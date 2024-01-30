# websocket--3.5.netty方式02



```java
package com.zs.websocket.netty2;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class NioWebSocketServer implements InitializingBean, DisposableBean {

  @Autowired
  private WebSocketProperties webSocketProperties;
  @Autowired
  private NioWebSocketChannelInitializer webSocketChannelInitializer;

  private EventLoopGroup bossGroup;
  private EventLoopGroup workGroup;
  private ChannelFuture channelFuture;

  @Override
  public void afterPropertiesSet() throws Exception {
    try {
      bossGroup = new NioEventLoopGroup(webSocketProperties.getBoss());
      workGroup = new NioEventLoopGroup(webSocketProperties.getWork());

      ServerBootstrap serverBootstrap = new ServerBootstrap();
      serverBootstrap.option(ChannelOption.SO_BACKLOG, 1024)
          .group(bossGroup, workGroup)
          .channel(NioServerSocketChannel.class)
          .localAddress(webSocketProperties.getPort())
          .childHandler(webSocketChannelInitializer);

      channelFuture = serverBootstrap.bind().sync();
    } finally {
      if (channelFuture != null && channelFuture.isSuccess()) {
        log.info("Netty server startup on port: {} (websocket) with context path '{}'", webSocketProperties.getPort(), webSocketProperties.getPath());
      } else {
        log.error("Netty server startup failed.");
        if (bossGroup != null)
          bossGroup.shutdownGracefully().sync();
        if (workGroup != null)
          workGroup.shutdownGracefully().sync();
      }
    }
  }

  @Override
  public void destroy() throws Exception {
    log.info("Shutting down Netty server...");
    if (bossGroup != null)
      bossGroup.shutdownGracefully().sync();
    if (workGroup != null)
      workGroup.shutdownGracefully().sync();
    if (channelFuture != null)
      channelFuture.channel().closeFuture().syncUninterruptibly();
    log.info("Netty server shutdown.");
  }
}

```

```java
package com.zs.websocket.netty2;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.stream.ChunkedWriteHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NioWebSocketChannelInitializer extends ChannelInitializer<SocketChannel> {

  @Autowired
  private WebSocketProperties webSocketProperties;
  @Autowired
  private NioWebSocketHandler nioWebSocketHandler;

  @Override
  protected void initChannel(SocketChannel socketChannel) {
    socketChannel.pipeline()
        .addLast(new HttpServerCodec())
        .addLast(new ChunkedWriteHandler())
        .addLast(new HttpObjectAggregator(8192))
        .addLast(nioWebSocketHandler)
        .addLast(new WebSocketServerProtocolHandler(webSocketProperties.getPath(), null, true, 65536));
  }
}
```

```java
package com.zs.websocket.netty2;

import cn.hutool.http.HttpUtil;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.websocketx.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

@Slf4j
@ChannelHandler.Sharable
@Component
public class NioWebSocketHandler extends SimpleChannelInboundHandler<WebSocketFrame> {

    @Autowired
    private NioWebSocketChannelPool webSocketChannelPool;
    @Autowired
    private WebSocketProperties webSocketProperties;

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        log.debug("客户端连接：{}", ctx.channel().id());
        webSocketChannelPool.addChannel(ctx.channel());
        super.channelActive(ctx);
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        log.debug("客户端断开连接：{}", ctx.channel().id());
        webSocketChannelPool.removeChannel(ctx.channel());
        super.channelInactive(ctx);
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.channel().flush();
    }

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame frame) {
        // 根据请求数据类型进行分发处理
        if (frame instanceof PingWebSocketFrame) {
            pingWebSocketFrameHandler(ctx, (PingWebSocketFrame) frame);
        } else if (frame instanceof TextWebSocketFrame) {
            textWebSocketFrameHandler(ctx, (TextWebSocketFrame) frame);
        } else if (frame instanceof CloseWebSocketFrame) {
            closeWebSocketFrameHandler(ctx, (CloseWebSocketFrame) frame);
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        log.info("客户端请求数据类型：{}", msg.getClass());
        if (msg instanceof FullHttpRequest) {
            fullHttpRequestHandler(ctx, (FullHttpRequest) msg);
        }
        super.channelRead(ctx, msg);
    }

    /**
     * 处理连接请求，客户端WebSocket发送握手包时会执行这一次请求
     *
     * @param ctx
     * @param request
     */
    private void fullHttpRequestHandler(ChannelHandlerContext ctx, FullHttpRequest request) {
        String uri = request.uri();
        HashMap<String, String> params = (HashMap<String, String>) HttpUtil.decodeParamMap(uri, StandardCharsets.UTF_8);
        log.debug("客户端请求参数：{}", params);
        // 判断请求路径是否跟配置中的一致
        if (webSocketProperties.getPath().equals(RequestUriUtils.getBasePath(uri)))
            // 因为有可能携带了参数，导致客户端一直无法返回握手包，因此在校验通过后，重置请求路径
            request.setUri(webSocketProperties.getPath());
        else
            ctx.close();
    }

    /**
     * 客户端发送断开请求处理
     *
     * @param ctx
     * @param frame
     */
    private void closeWebSocketFrameHandler(ChannelHandlerContext ctx, CloseWebSocketFrame frame) {
        ctx.close();
    }

    /**
     * 创建连接之后，客户端发送的消息都会在这里处理
     *
     * @param ctx
     * @param frame
     */
    private void textWebSocketFrameHandler(ChannelHandlerContext ctx, TextWebSocketFrame frame) {
        // 客户端发送过来的内容不进行业务处理，原样返回
        ctx.channel().writeAndFlush(frame.retain());
    }

    /**
     * 处理客户端心跳包
     *
     * @param ctx
     * @param frame
     */
    private void pingWebSocketFrameHandler(ChannelHandlerContext ctx, PingWebSocketFrame frame) {
        ctx.channel().writeAndFlush(new PongWebSocketFrame(frame.content().retain()));
    }
}

```



```java
package com.zs.websocket.netty2;

import io.netty.channel.Channel;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.concurrent.GlobalEventExecutor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class NioWebSocketChannelPool {

  private final ChannelGroup channels = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);

  /**
   * 新增一个客户端通道
   *
   * @param channel
   */
  public void addChannel(Channel channel) {
    channels.add(channel);
  }

  /**
   * 移除一个客户端连接通道
   *
   * @param channel
   */
  public void removeChannel(Channel channel) {
    channels.remove(channel);
  }

}
```





```java
package com.zs.websocket.netty2;

import java.util.HashMap;
import java.util.Map;

public class RequestUriUtils {

  /**
   * 将路径参数转换成Map对象，如果路径参数出现重复参数名，将以最后的参数值为准
   * @param uri 传入的携带参数的路径
   * @return
   */
  public static Map<String, String> getParams(String uri) {
    Map<String, String> params = new HashMap<>(10);

    int idx = uri.indexOf("?");
    if (idx != -1) {
      String[] paramsArr = uri.substring(idx + 1).split("&");

      for (String param : paramsArr) {
        idx = param.indexOf("=");
        params.put(param.substring(0, idx), param.substring(idx + 1));
      }
    }

    return params;
  }

  /**
   * 获取URI中参数以外部分路径
   * @param uri
   * @return
   */
  public static String getBasePath(String uri) {
    if (uri == null || uri.isEmpty())
      return null;

    int idx = uri.indexOf("?");
    if (idx == -1)
      return uri;

    return uri.substring(0, idx);
  }
}
```

```java
package com.zs.websocket.netty2;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "chat.websocket")
public class WebSocketProperties {

  private Integer port = 8070; // 监听端口
  private String path = "/ws"; // 请求路径
  private Integer boss = 2; // bossGroup线程数
  private Integer work = 2; // workGroup线程数
}
```

