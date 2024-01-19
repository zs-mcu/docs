# CMD--查找在用IP

```shell
# 查看自己的IP
ipconfig/all
    
# -w 2毫秒延时，-n 数据包大小
for /L %i IN (1,1,254) DO ping -w 2 -n 1 192.168.10.%i

# 查看ping的结果
arp -a
```

