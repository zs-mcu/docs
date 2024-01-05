

# 工具--cut

> cut是**<font style="background-color:yellow;">列</font>**截取工具，用于列的截取

**语法和选项**

```powershell
# cut [选项]  文件名
常见选项：
    -c:	以字符为单位进行分割,截取
    	不依赖分隔符来区分列，而是通过字符范围（行首为0）来进行字段提取。“n-”表示从第n个字符到行尾；
    	“n-m”从第n个字符到第m个字符；“-m”表示从第1个字符到第m个字符。
    -d:	自定义分隔符，默认为制表符\t
    -f:	与-d一起使用，提取第几列
```

**举例说明:**

~~~powershell
[root@xiaoshaozi ~]#  cut -d : -f1 1.txt 			以:冒号分割，截取第1列内容
[root@xiaoshaozi ~]#  cut -d ":"" -f1,6,7 1.txt 	以:冒号分割，截取第1,6,7列内容
[root@xiaoshaozi ~]#  cut -c 4 1.txt 				截取文件中每行第4个字符
[root@xiaoshaozi ~]#  cut -c 1-4 1.txt 			截取文件中每行的1-4个字符
[root@xiaoshaozi ~]#  cut -c 4-10 1.txt 			截取文件中每行的4-10个字符
[root@xiaoshaozi ~]#  cut -c 5- 1.txt 				从第5个字符开始截取后面所有字符


[root@xiaoshaozi ~]# echo "zs=123=456=789" | cut -d "=" -f 2
123
[root@xiaoshaozi ~]# echo "zs=123=456=789" | cut -d "=" -f 1,2
zs=123
[root@xiaoshaozi ~]# echo "zs=123=456=789" | cut -d "=" -f 1,2,4
zs=123=789
~~~

**课堂练习：**
用小工具列出你当系统的运行级别。5/3

1. 如何查看系统运行级别
   - 命令`runlevel`
   - 文件`/etc/inittab`
2. 如何过滤运行级别

```powershell
runlevel |cut -c3
runlevel | cut -d ' ' -f2
grep -v '^#' /etc/inittab | cut -d: -f2
grep '^id' /etc/inittab |cut -d: -f2
grep "initdefault:$" /etc/inittab | cut -c4
grep -v ^# /etc/inittab |cut -c4
grep 'id:' /etc/inittab |cut -d: -f2
cut -d':' -f2 /etc/inittab |grep -v ^#
cut -c4 /etc/inittab |tail -1
cut -d: -f2 /etc/inittab |tail -1
```

### 