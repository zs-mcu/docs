# websocket--3.7.java客户端

```xml
<dependency>
    <groupId>org.java-websocket</groupId>
    <artifactId>Java-WebSocket</artifactId>
    <version>1.5.3</version>
</dependency>
```

```java
package com.zs.websocket.client;

import java.net.URI;
// import com.alibaba.fastjson.JSONObject;
import cn.hutool.json.JSONObject;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.enums.ReadyState;
import org.java_websocket.handshake.ServerHandshake;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *  websocket客户端监听类
 * @author 。
 */
public class BaseWebsocketClient extends WebSocketClient {

    private static Logger logger = LoggerFactory.getLogger(BaseWebsocketClient.class);

    public BaseWebsocketClient(URI serverUri) {
        super(serverUri);
    }

    @Override
    public void onOpen(ServerHandshake serverHandshake) {
        logger.info(">>>>>>>>>>>websocket open");

    }

    @Override
    public void onMessage(String s) {
        logger.info(">>>>>>>>>> websocket message");
        System.out.println(s);

    }

    @Override
    public void onClose(int i, String s, boolean b) {
        logger.info(">>>>>>>>>>>websocket close");
    }

    @Override
    public void onError(Exception e) {
        logger.error(">>>>>>>>>websocket error {}",e);
    }


    public static void main(String[] args) {
        try {
            BaseWebsocketClient myClient = new BaseWebsocketClient(new URI("ws://127.0.0.1:8090/ws?id=2"));
            myClient.connect();
            while (!myClient.getReadyState().equals(ReadyState.OPEN)) {
                System.out.println("连接中。。。");
                Thread.sleep(1000);
            }
            // 连接成功往websocket服务端发送数据
            JSONObject object = new JSONObject();
            object.put("message", "success连接");
            myClient.send("是我啊");
            System.out.println("...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

```

