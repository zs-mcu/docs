---
autoSort: 4000
---
# Linux帮助文档

## 1、简约求帮助(help)

```powershell
help命令：知道该命令的含义，相关参数不知道可以使用help
内部命令求帮助：help 命令
外部命令求帮助：命令 --help


cp --help
help cd


type命令：判断一个命令是内部还是外部
内部命令：shell内置的命令，bash
外部命令：第三方程序，软件带来的命令
```



## 2、详细求帮助(man)

```powershell
# man man
    ANUAL SECTIONS
    The standard sections of the manual include:
    1    User Commands 所有用户使用命令
    2    System Calls 系统调用
    3    C Library Functions 函数库
    4    Devices and Special Files 设备与特殊文件
    5    File Formats and Conventions 文档格式说明
    6    Games et. Al. 游戏
    7    Miscellanea 杂项
    8    System Administration tools and Deamons 系统管理员与程序用户相关


一般情况是不需要使用章节号，例如：
# man 1 ls
# man ls
# man useradd
# man setfacl （/EXAMPLES）
# man -f passwd 列出所有章节中的passwd手册
# man 1 passwd passwd命令的帮助
# man 5 passwd 用户配置文件的帮助
# man -a passwd 在所有章节中查找
# man -k passwd 以关键字导出man page

程序猿手册 man 23467
管理员手册 man 158
```

## 3、相关官方文档

```powershell
http://httpd.apache.org/docs/2.4/
http://nginx.org/
http://tengine.taobao.org/nginx_docs/cn/docs/
https://www.zabbix.com/documentation/3.4/zh/manual
https://puppet.com/docs
其他社区
https://www.linuxidc.com/
等等
```