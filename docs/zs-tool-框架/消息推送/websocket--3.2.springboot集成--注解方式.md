



```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;


@Configuration
@EnableWebSocket
public class WebSocketConfig {

    @Bean
    public ServerEndpointExporter serverEndpoint() {
        return new ServerEndpointExporter();
    }
}
```

```java
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@ServerEndpoint("/myWs")
@Component
public class WsServerEndpoint {

    /**
     * 连接成功
     *
     * @param session
     */
    @OnOpen
    public void onOpen(Session session) {
        System.out.println("连接成功");
    }

    /**
     * 连接关闭
     *
     * @param session
     */
    @OnClose
    public void onClose(Session session) {
        System.out.println("连接关闭");
    }

    /**
     * 接收到消息
     *
     * @param text
     */
    @OnMessage
    public String onMsg(String text) throws IOException {
        return "servet 发送：" + text;
    }
}
```

**@ServerEndpoint**

1. 通过这个 spring boot 就可以知道你暴露出去的 ws 应用的路径，有点类似我们经常用的@RequestMapping。比如你的启动端口是8080，而这个注解的值是ws，那我们就可以通过 ws://127.0.0.1:8080/ws 来连接你的应用

**@OnOpen**

1. 当 websocket 建立连接成功后会触发这个注解修饰的方法，注意它有一个 Session 参数

**@OnClose**

1. 当 websocket 建立的连接断开后会触发这个注解修饰的方法，注意它有一个 Session 参数

**@OnMessage**

1. 当客户端发送消息到服务端时，会触发这个注解修改的方法，它有一个 String 入参表明客户端传入的值

**@OnError**

1. 当 websocket 建立连接时出现异常会触发这个注解修饰的方法，注意它有一个 Session 参数

另外一点就是服务端如何发送消息给客户端，服务端发送消息必须通过上面说的 Session 类，通常是在@OnOpen 方法中，当连接成功后把 session 存入 Map 的 value，key 是与 session 对应的用户标识，当要发送的时候通过 key 获得 session 再发送，这里可以通过 `session.getBasicRemote().sendText()`来对客户端发送消息。



获取访问端点中的参数

```java
@ServerEndpoint("/webSocket/{remoteAddr}")
@Component
public class SocketHandler {
    @OnOpen
	public void onOpen(@PathParam("remoteAddr") String remoteAddr, Session session) {
		
	}
```



接口

```java
public class myOwnEndpoint extends javax.websocket.Endpoint {
   public void onOpen(Session session, EndpointConfig config) {...}
   public void onClose(Session session, CloseReason closeReason) {...}
   public void onError (Session session, Throwable throwable) {...}
}

// 接收消息，需要通过onOpen时注册
public void onOpen (Session session, EndpointConfig config) {
   final RemoteEndpoint.Basic remote = session.getBasicRemote();
   session.addMessageHandler (new MessageHandler.Whole<String>() {
      public void onMessage(String text) {
                 try {
                     remote.sendString(text.toUpperCase());
                 } catch (IOException ioe) {
                     // handle send failure here
                 }
             }

   });
}
```

发送

```java
其本质是websocket内置的消息类型。当然也可以自定义。  
字符串  
接收：onMessage接收消息为String即可  
发送：session.getBasicRemote().sendText(text);  
二进制/流  
接收：onMessage接收消息为byte\[\]即可  
发送：session.getBasicRemote().sendBinary(byteBuffer);  
ping消息  
接收：此消息会由中间件内置实现，无需处理  
发送：session.getBasicRemote().sendPing(byteBuffer);
```

编解码

```java
@ServerEndpoint(value="/endpoint", encoders = MessageEncoder.class, decoders= MessageDecoder.class)
public class MyEndpoint {
...
}




class MessageEncoder implements Encoder.Text<MyJavaObject> {
   @override
   public String encode(MyJavaObject obj) throws EncodingException {
      ...
   }
}

class MessageDecoder implements Decoder.Text<MyJavaObject> {
   @override 
   public MyJavaObject decode (String src) throws DecodeException {
      ...
   }

   @override 
   public boolean willDecode (String src) {
      // return true if we want to decode this String into a MyJavaObject instance
   }
}
```



[JSR356](https://www.oracle.com/technical-resources/articles/java/jsr356.html "JSR356")  
[RFC6455](https://tools.ietf.org/html/rfc6455 "RFC6455")  
[RFC6455中文版](https://blog.csdn.net/aigoogle/article/details/122281445 "RFC6455中文版")  
[ws协议分析](https://zhuanlan.zhihu.com/p/407711596 "ws协议分析")  
[tomcat特定配置](https://www.w3cschool.cn/tomcat/gszj1ka6.html "tomcat特定配置")  
[spring整合websocket官方文档](https://docs.spring.io/spring-framework/docs/5.1.3.RELEASE/spring-framework-reference/web.html#websocket "spring整合websocket官方文档")