# alias

```powershell
命令格式：
#查询命令别名
[root@localhost ~]#alias

#设定命令别名
[root@localhost ~]#alias 别名='原命令'

例如
[root@xiaoshaozi ~]# alias
alias cp='cp -i'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'

```

既然我们说别名的优先级比命令高，那么命令执行时具体的顺序是什么呢？

命令执行时的顺序是这样的：

1、第一顺位执行用绝对路径或相对路径执行的命令。
2、第二顺位执行别名。
3、第三顺位执行Bash的内部命令。
4、第四顺位执行按照$PATH环境变量定义的目录查找顺序找到的第一个命令。

为了让这个别名永久生效，可以把别名写入环境变量配置文件“`~/.bashrc`”。

对所有用户生效`/etc/bashrc`

命令如下：

```powershell
[root@localhost ~]# vim /root/.bashrc
[root@localhost ~]# vim /etc/bashrc


对所有用户生效
[root@centos ~]# echo "alias catfs='cat /etc/fstab'" >> /etc/bashrc
[root@centos ~]# source /etc/bashrc


只对root用户生效
[root@xiaoshaozi ~]# catfs
#
# /etc/fstab
# Created by anaconda on Thu Jul 11 02:52:01 2019
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
UUID=1114fe9e-2309-4580-b183-d778e6d97397 /                       ext4    defaults        1 1
[root@xiaoshaozi ~]# 
[root@xiaoshaozi ~]# 
[root@xiaoshaozi ~]# su jysp
[jysp@xiaoshaozi root]$ catfs
bash: catfs: 未找到命令
```