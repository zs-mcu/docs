# websocket--3.5.netty方式03

## core

```java
package com.zs.websocket.netty.core;

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
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class NettyWebSocketServer implements InitializingBean, DisposableBean {
    @Autowired
    private WebSocketProperties webSocketProperties;

    @Autowired
    private NioWebSocketChannelInitializer webSocketChannelInitializer;

    private EventLoopGroup bossGroup;
    private EventLoopGroup workGroup;
    private ChannelFuture channelFuture;

    /**
     * 初始化时机早于@PostConstruct或者xml的init-method
     *
     * @throws Exception
     */
    @Override
    public void afterPropertiesSet() throws Exception {
        try {
            bossGroup = new NioEventLoopGroup(webSocketProperties.getBoss());
            workGroup = new NioEventLoopGroup(webSocketProperties.getWork());

            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap
                    //半连接 + 全连接 > SO_BACKLOG 时会被拒绝
                    .option(ChannelOption.SO_BACKLOG, 1024)
                    //用于剔除失效连接
                    .option(ChannelOption.SO_KEEPALIVE, true)
                    //分工 boss 只负责 ServerSocketChannel 上accept事件 worker 只负责 socketChannel 上的读写
                    //可以理解为：线程池 + Selector
                    .group(bossGroup, workGroup)
                    //选择服务 Scoket 实现类,其中 NioServerSocketChannel 表示基于 NIO 的服务器端实现
                    .channel(NioServerSocketChannel.class)
                    //配置启动端口
                    .localAddress(webSocketProperties.getPort())
                    // childHandler，是接下来添加的处理器都是给 SocketChannel 用的，而不是给 ServerSocketChannel
                    .childHandler(webSocketChannelInitializer);
            //启动服务器，监听端口，阻塞直到启动成功
            channelFuture = serverBootstrap.bind().sync();
        } finally {
            if (channelFuture != null && channelFuture.isSuccess()) {
                log.info("netty服务启动端口: {} (websocket) 连接地址 '{}'", webSocketProperties.getPort(), webSocketProperties.getPath());
            } else {
                log.error("netty服务启动失败");
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
package com.zs.websocket.netty.core;

import com.zs.websocket.netty.core.WebSocketProperties;
import com.zs.websocket.netty.handler.NioWebSocketHandler;
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
                // 因为使用http协议，所以需要使用http的编码器，解码器
                .addLast(new HttpServerCodec())
                // 以块方式写，添加 chunkedWriter 处理器
                .addLast(new ChunkedWriteHandler())
                /**
                 * 说明：
                 *  1. http数据在传输过程中是分段的，HttpObjectAggregator可以把多个段聚合起来；
                 *  2. 这就是为什么当浏览器发送大量数据时，就会发出多次 http请求的原因
                 */
                .addLast(new HttpObjectAggregator(8192))
                // 自定义handler ，处理业务逻辑
                .addLast(nioWebSocketHandler)
                /**
                 * 说明：
                 *  1. 对于 WebSocket，它的数据是以帧frame 的形式传递的；
                 *  2. 可以看到 WebSocketFrame 下面有6个子类
                 *  3. 浏览器发送请求时： ws://localhost:7000/hello 表示请求的uri
                 *  4. WebSocketServerProtocolHandler 核心功能是把 http协议升级为 ws 协议，保持长连接；
                 *      是通过一个状态码 101 来切换的
                 */
                .addLast(new WebSocketServerProtocolHandler(webSocketProperties.getPath(), null, true, 65536));
    }
}
```

```java
package com.zs.websocket.netty.core;

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
package com.zs.websocket.netty.core;

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
  private Integer work = 8; // workGroup线程数
}
```

## handler

```java
package com.zs.websocket.netty.handler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.util.AttributeKey;
import org.apache.commons.lang3.StringUtils;

import java.net.InetSocketAddress;

public class HttpHeadersHandler extends ChannelInboundHandlerAdapter {
    private AttributeKey<String> key = AttributeKey.valueOf("Id");

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof FullHttpRequest) {
            HttpHeaders headers = ((FullHttpRequest) msg).headers();
            String ip = headers.get("X-Real-IP");
            if (StringUtils.isEmpty(ip)) {//如果没经过nginx，就直接获取远端地址
                InetSocketAddress address = (InetSocketAddress) ctx.channel().remoteAddress();
                ip = address.getAddress().getHostAddress();
            }
            NettyUtil.setAttr(ctx.channel(), NettyUtil.IP, ip);
        }
        ctx.fireChannelRead(msg);
    }
}
```

```java
package com.zs.websocket.netty.handler;

import io.netty.channel.Channel;
import io.netty.util.Attribute;
import io.netty.util.AttributeKey;

/**
 * Description: netty工具类
 */

public class NettyUtil {

    public static AttributeKey<String> IP = AttributeKey.valueOf("ip");

    public static <T> void setAttr(Channel channel, AttributeKey<T> attributeKey, T data) {
        Attribute<T> attr = channel.attr(attributeKey);
        attr.set(data);
    }

    public static <T> T getAttr(Channel channel, AttributeKey<T> ip) {
        return channel.attr(ip).get();
    }
}
```

```java
package com.zs.websocket.netty.handler;

import cn.hutool.http.HttpUtil;
import com.zs.websocket.netty.core.RequestUriUtils;
import com.zs.websocket.netty.core.WebSocketProperties;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.websocketx.*;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@ChannelHandler.Sharable
@Component
public class NioWebSocketHandler extends SimpleChannelInboundHandler<WebSocketFrame> {

    @Autowired
    private WebSocketProperties webSocketProperties;

    /**
     * 所有已连接的websocket连接列表和一些额外参数
     */
    private static final ConcurrentHashMap<Channel, String> ONLINE_WS_MAP = new ConcurrentHashMap<>();



    //======================================================================
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        log.debug("客户端连接：{}", ctx.channel().id());
        ONLINE_WS_MAP.put(ctx.channel(), ctx.channel().id().asLongText());
        super.channelActive(ctx);
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        log.debug("客户端断开连接：{}", ctx.channel().id());
        // 可能出现业务判断离线后再次触发 channelInactive
        log.warn("触发 channelInactive 掉线![{}]", ctx.channel().id());
        userOffLine(ctx);
        super.channelInactive(ctx);
    }
    // 客户端离线
    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        userOffLine(ctx);
    }
    private void userOffLine(ChannelHandlerContext ctx) {
        log.warn("websocket 断开连接");
        ONLINE_WS_MAP.remove(ctx.channel());
        ctx.channel().close();
    }

    // 处理异常
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        log.warn("异常发生，异常消息 ={}", cause.getMessage());
        ctx.channel().close();
    }

    //======================================================================



    /**
     * 心跳检查
     *
     * @param ctx
     * @param evt
     * @throws Exception
     */
    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof IdleStateEvent) {
            IdleStateEvent idleStateEvent = (IdleStateEvent) evt;
            // 读空闲
            if (idleStateEvent.state() == IdleState.READER_IDLE) {
                // 关闭用户的连接
                userOffLine(ctx);
            }
        }
        super.userEventTriggered(ctx, evt);
    }


    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.channel().flush();
    }
    //======================================================================


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame frame) {
        //System.out.println("服务器收到消息：" + msg.text());
        // 根据请求数据类型进行分发处理
        if (frame instanceof PingWebSocketFrame) {
            pingWebSocketFrameHandler(ctx, (PingWebSocketFrame) frame);
        } else if (frame instanceof TextWebSocketFrame) {
            textWebSocketFrameHandler(ctx, (TextWebSocketFrame) frame);
        } else if (frame instanceof CloseWebSocketFrame) {
            closeWebSocketFrameHandler(ctx, (CloseWebSocketFrame) frame);
        }

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
    /**
     * 创建连接之后，客户端发送的消息都会在这里处理
     *
     * @param ctx
     * @param frame
     */
    private void textWebSocketFrameHandler(ChannelHandlerContext ctx, TextWebSocketFrame frame) {
        log.debug("服务端接收到消息:{}",frame.text());
        // 客户端发送过来的内容不进行业务处理，原样返回
        ctx.channel().writeAndFlush(frame.retain());
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

    //======================================================================


    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        log.debug("客户端请求数据类型：{}", msg.getClass());
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
        if (webSocketProperties.getPath().equals(RequestUriUtils.getBasePath(uri))) {
            // 因为有可能携带了参数，导致客户端一直无法返回握手包，因此在校验通过后，重置请求路径
            request.setUri(webSocketProperties.getPath());
        }else {
            log.error("服务地址uri:{}, 客户端连接uri：{}", webSocketProperties.getPath(), RequestUriUtils.getBasePath(uri) + "请检查路径不一致");
            ctx.close();
        }
    }
}
```
