---
autoSort: 800
---
# shell--history命令

1）历史命令的查看

```powershell
[root@xiaoshaozi ~]# history [选项] [历史命令保存文件]
选项：
	-c：		清空历史命令
	-w：		把缓存中的历史命令写入历史命令保存文件。
			 如果不手工指定历史命令保存文件，
			 则放入默认历史命令保存文件~/.bash_history中
```

> 修改profile文件参数

```powershell
[root@xiaoshaozi ~]# vim /etc/profile
…省略部分输出…
HISTSIZE=1000
…省略部分输出…

[root@xiaoshaozi ~]# . /etc/profile
[root@xiaoshaozi ~]# source /etc/profile
. 	有三中含义
. 	代表source
./ 	代表当前目录
..	代表上级目录
.xx	代表隐藏文件
```

我们使用history命令查看的历史命令和`~/.bash_history`文件中保存的历史命令是不同的。
那是因为当前登录操作的命令并没有直接写入`~/.bash_history`文件，而是保存在缓存当中的。
需要等当前用户注销之后，缓存中的命令才会写入`~/.bash_history`文件。
如果我们需要把内存中的命令直接写入`~/.bash_history`文件，而不等用户注销时再写入，就需要使用“-w”选项了。



2）、历史命令的调用

如果想要使用原先的历史命令有这样几种方法：

- 使用上、下箭头调用以前的历史命令
- 使用“!n”重复执行第n条历史命令
- 使用“!!”重复执行上一条命令
- 使用“!字串”重复执行最后一条以该字串开头的命令
- 使用“!$”重复上一条命令的最后一个参数

