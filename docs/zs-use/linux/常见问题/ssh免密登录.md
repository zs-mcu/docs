 

#### SSH 三步解决免密登录

*   [1.客户端生成公私钥](about:blank#1_2)
*   [2.上传公钥到服务器](about:blank#2_25)
*   [3.测试免密登录](about:blank#3_46)

1.客户端生成公私钥
-----------------------------------------------------------------------

本地客户端生成公私钥：（一路回车默认即可）

```
ssh-keygen
```

上面这个命令会在用户目录.ssh文件夹下创建公私钥

```
cd ~/.ssh
```
```
ls
```

下创建两个密钥：

1.  id\_rsa （私钥）
2.  id\_rsa.pub (公钥)

2.上传公钥到服务器
-----------------------------------------------------------------------

上传公钥到服务器

```
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.101 -p 10022
```

上面这条命令是写到服务器上的ssh目录下去了

```
cd ~/.ssh
```
```
vim authorized_keys
```

可以看到客户端写入到服务器的 id\_rsa.pub （公钥）内容。

3.测试免密登录
---------------------------------------------------------------------

客户端通过ssh连接远程服务器，就可以免密登录了。

```
ssh root@192.168.1.101 -p 10022
```



## 4.上传文件到服务器

使用scp命令

```bash
scp -P 10022 -r "./dist" xiaoshaozi@192.168.1.101:/home/xiaoshaozi/workspace
```





## 常见错误

### 无法上传秘钥

> 上传报错

```sh
miyufeng@MacBook-Pro .ssh % ssh-copy-id -i ~/.ssh/linux_106_rsa_ssh.pub root@106.14.41.60
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/Users/miyufeng/.ssh/linux_106_rsa_ssh.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed

/usr/bin/ssh-copy-id: ERROR: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ERROR: @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
ERROR: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ERROR: IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
ERROR: Someone could be eavesdropping on you right now (man-in-the-middle attack)!
ERROR: It is also possible that a host key has just been changed.
ERROR: The fingerprint for the ECDSA key sent by the remote host is
ERROR: SHA256:kXtnmnqUFcE/btiDu5sFkCInUpwU2dgLTPyuyBtxUsw.
ERROR: Please contact your system administrator.
ERROR: Add correct host key in /Users/miyufeng/.ssh/known_hosts to get rid of this message.
ERROR: Offending ECDSA key in /Users/miyufeng/.ssh/known_hosts:1
ERROR: ECDSA host key for 106.14.41.60 has changed and you have requested strict checking.
ERROR: Host key verification failed.

miyufeng@MacBook-Pro .ssh % ssh-copy-id -i ~/.ssh/linux_106_rsa_ssh.pub root@106.14.41.60 -p 22
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/Users/miyufeng/.ssh/linux_106_rsa_ssh.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed

/usr/bin/ssh-copy-id: ERROR: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ERROR: @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
ERROR: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ERROR: IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
ERROR: Someone could be eavesdropping on you right now (man-in-the-middle attack)!
ERROR: It is also possible that a host key has just been changed.
ERROR: The fingerprint for the ECDSA key sent by the remote host is
ERROR: SHA256:kXtnmnqUFcE/btiDu5sFkCInUpwU2dgLTPyuyBtxUsw.
ERROR: Please contact your system administrator.
ERROR: Add correct host key in /Users/miyufeng/.ssh/known_hosts to get rid of this message.
ERROR: Offending ECDSA key in /Users/miyufeng/.ssh/known_hosts:1
ERROR: ECDSA host key for 106.14.41.60 has changed and you have requested strict checking.
ERROR: Host key verification failed.
```

**解决方法一：** 清除本地[**缓存**](https://www.lsjlt.com/tag/缓存/)证书

执行  `ssh-keygen -R IP地址`

**解决方法二：**在.ssh/known_hosts中删除对应ip

执行vi .ssh/known_hosts 找到并删除
