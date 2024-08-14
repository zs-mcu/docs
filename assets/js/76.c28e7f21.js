(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1470:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令-4-文件操作管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令-4-文件操作管理"}},[t._v("#")]),t._v(" 命令--4.文件操作管理")]),t._v(" "),s("p",[s("strong",[t._v("重要：Linux下，一切皆文件！！！")])]),t._v(" "),s("p",[s("strong",[t._v("说在前面：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("接下来所有的命令需要在一个载体上执行，这个载体就叫做"),s("strong",[t._v("终端")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("终端上所有命令都需要一个东西"),s("strong",[t._v("翻译解析")]),t._v("一下，计算机才能理解并执行。")])]),t._v(" "),s("li",[s("p",[t._v("这个翻译解析的东西叫"),s("strong",[t._v("SHELL")]),t._v("解释器**，RedHat和Centos默认shell解释器叫**bash。")])]),t._v(" "),s("li",[s("p",[t._v("既然需要bash帮忙翻译解释相关命令，那么你所敲的命令必须"),s("strong",[t._v("符合它的语法")]),t._v("，否则报错给你看。")])])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("命令 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 参数\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -l /root")]),t._v("\n命令：整条shell命令的主体\n选项：会影响或微调命令的行为，通常以"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n参数：命令作用的对象\n")])])]),s("h2",{attrs:{id:"_1、file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、file"}},[t._v("#")]),t._v(" 1、file")]),t._v(" "),s("blockquote",[s("p",[t._v("判断文件类型")])]),t._v(" "),s("p",[t._v("常见文件类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("文件类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("字符设备（c）")]),t._v(" "),s("td",[t._v("所有==输入输出的设备==，如：键盘、鼠标、显示器、打印机等")])]),t._v(" "),s("tr",[s("td",[t._v("块设备（==b==）")]),t._v(" "),s("td",[t._v("所有==存储设备==称之为块设备文件，如：软盘、磁盘、光盘、U盘、磁带、光驱等")])]),t._v(" "),s("tr",[s("td",[t._v("软连接文件（==l==）")]),t._v(" "),s("td",[t._v("类似于Windows下的快捷方式")])]),t._v(" "),s("tr",[s("td",[t._v("目录文件（==d==）")]),t._v(" "),s("td",[t._v("相当于Windows下的文件夹")])]),t._v(" "),s("tr",[s("td",[t._v("普通文件(==f==或==-==)")]),t._v(" "),s("td",[t._v("类似Windows下记事本、word等，可以使用==相关命令==进行编辑、==查看文件内容==")])]),t._v(" "),s("tr",[s("td",[t._v("管道文件(p)")]),t._v(" "),s("td",[t._v("简单理解为==程序或进程之间通讯==的一种方式")])]),t._v(" "),s("tr",[s("td",[t._v("套接字文件(s)")]),t._v(" "),s("td",[t._v("简单理解为==程序或进程之间通讯==的一种方式")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td")])])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("用")]),t._v(" file "),s("strong",[t._v("命令来判断文件类型")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# file /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root: directory 目录\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# file /root/install.log")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root/install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log: ASCII text 普通的文本文件\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# file /dev/sda")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev/sda: block special 块设备文件，存放数据\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# file /dev/tty1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev/tty1: character special 字符设备\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# file /bin/sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin/sh: symbolic link to bash 软连接文件\n")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(987),alt:"image-20231031155740005"}})]),t._v(" "),s("p",[t._v("字符设备")]),t._v(" "),s("p",[s("img",{attrs:{src:a(988),alt:"image-20231031155712778"}})]),t._v(" "),s("p",[t._v("块设备")]),t._v(" "),s("p",[s("img",{attrs:{src:a(989),alt:"image-20231031155736205"}})]),t._v(" "),s("p",[t._v("软链接文件")]),t._v(" "),s("p",[s("img",{attrs:{src:a(990),alt:"image-20231031160000001"}})]),t._v(" "),s("h2",{attrs:{id:"_2、ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、ls"}},[t._v("#")]),t._v(" 2、ls")]),t._v(" "),s("blockquote",[s("p",[t._v("列出目录内容")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("常见选项\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("查看目录下的所有文件，包括隐藏文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l 长列表显示\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h human，以人性化方式显示出来\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d 只列出目录名，不列出其他内容\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t 按修改时间排序\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r 逆序排列\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("S 按文件的大小排序\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i 显示文件的inode号（索引号）\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("R 递归列出目录中的内容\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m 用逗号分隔显示内容\n示例：以不同的选项列出"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root目录里的内容\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -a /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -l /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -lh /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -lt /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -S /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -R /root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -d /root 查看/root目录本身的信息")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3、mkdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、mkdir"}},[t._v("#")]),t._v(" 3、mkdir")]),t._v(" "),s("blockquote",[s("p",[t._v("创建目录")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("常见选项\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p 级联创建\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /test/ 在根下创建test目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir ./test/ 在当前目录下创建test目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir ./test /test 创建多个目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -p /test/yunwei/redhat")]),t._v("\n\n说明：\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("如果创建的目录的上一级目录不存在，就需要加"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p参数；"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p在前面和后面都可以\n")])])]),s("h2",{attrs:{id:"_4、touch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、touch"}},[t._v("#")]),t._v(" 4、touch")]),t._v(" "),s("blockquote",[s("p",[t._v("创建文件")])]),t._v(" "),s("p",[t._v("注意：Linux下文件的命名规则")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("文件名严格区分大小写 file FILE")])]),t._v(" "),s("li",[s("p",[t._v("文件名不能包含特殊符号，如(/或*等)")])]),t._v(" "),s("li",[s("p",[t._v("文件名最多可达255个字符")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建一个新的空文件（目标文件不存在）")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch /tmp/file1 在/tmp目录下创建file1文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch file1 在当前目录下创建file1文件")]),t._v("\n思考：这2个file1文件是同一个文件吗？\n答：不是同一个文件，因为路径不一样。\n")])])])]),t._v(" "),s("li",[s("p",[t._v("修改文件的时间（目标文件存在）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查看文件的相关时间")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stat file1 查看文件的状态信息")]),t._v("\nFile: `file1'\nSize: 0 Blocks: 0 IO Block: 4096 regular empty file\nDevice: fd00h/64768d Inode: 915714 Links: 1\nAccess: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0644/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Uid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 0/ root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Gid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 0/ root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAccess: 2019-04-01 17:36:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\nModify: 2019-04-01 17:36:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\nChange: 2019-04-01 17:36:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\nAccess:文件的查看访问时间\nModify:文件的修改时间\nChange:文件的属性时间"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("文件的大小、权限等信息发生改变时，该时间会变化\n")])])])]),t._v(" "),s("li",[s("p",[t._v("修改文件的时间")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch file1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stat file1 查看文件的状态信息")]),t._v("\nFile: `file1'\nSize: 0 Blocks: 0 IO Block: 4096 regular empty file\nDevice: fd00h/64768d Inode: 915714 Links: 1\nAccess: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0644/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Uid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 0/ root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Gid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 0/ root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAccess: 2019-04-01 17:41:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\nModify: 2019-04-01 17:41:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\nChange: 2019-04-01 17:41:00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("353096343 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("0800\n\n其他修改：\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch -a file1 -t 201506161320 修改文件点访问时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch -m file1 -t 201612121330 修改文件修改时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a：访问时间\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m：修改时间\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t：时间类型格式\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch -d 20110808 file1 修改文件日期")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch -d 1215 file1 修改文件时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# touch -d "20101012 11:11:11" file1 修改文件的日期和时间')]),t._v("\n\n说明：大家只需要掌握touch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d的用法即可。\n\n注：RHEL6开始relatime，atime延迟修改，必须满足其中一个条件：\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 自上次atime修改后，已达到86400秒；\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 发生写操作时；\n")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"_5、cat-more-less-head-tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、cat-more-less-head-tail"}},[t._v("#")]),t._v(" 5、cat|more|less|head|tail")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("cat 命令：一般查看小文件，从第一行到最后一行列出来")]),t._v(" "),s("p",[t._v("常见选项：")]),t._v(" "),s("p",[t._v("-n：显示行号")]),t._v(" "),s("p",[t._v("-A：显示控制字符，如换行符,制表符等（ linux $ 和 Windows ^M$ ）")])]),t._v(" "),s("li",[s("p",[t._v("tac 命令：一般查看小文件，从最后一行到第一行列出来")])]),t._v(" "),s("li",[s("p",[t._v("more和less 命令：一般查看大文件，q退出查看，可以搜索，建议less命令")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("less 文件\n\tenter键：一行一行查看\n\t空格键：一页一页查看\n\t退出：Q键\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(":搜索\n\tn:查找下一个\n\tgg:回到开头\n")])])])]),t._v(" "),s("li",[s("p",[t._v("head 命令：默认查看文件前10行， head -n 15或head -15 表示查看前15行")])]),t._v(" "),s("li",[s("p",[t._v("tail 命令：默认查看文件后10行， tail -n 15或tail -15 表示查看后15行； -f 表示动态查看")])]),t._v(" "),s("li",[s("p",[t._v("ldd 命令：一般用来查看二进制的命令文件")])])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/passwd 查看/etc/passwd文件内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat -n /etc/passwd 查看/etc/passwd文件内容，并打印行号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tac /etc/passwd 查看/etc/passwd文件内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# head -5 /etc/passwd 查看/etc/passwd文件的前5行内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tail -5 /etc/passwd 查看/etc/passwd文件的后5行内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# more /var/log/messages")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# less /var/log/messages")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ldd /bin/mkdir 查看mkdir命令文件（二进制）的内容")]),t._v("\n")])])]),s("h2",{attrs:{id:"_6、cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、cp"}},[t._v("#")]),t._v(" 6、cp")]),t._v(" "),s("blockquote",[s("p",[t._v("拷贝文件")])]),t._v(" "),s("p",[t._v("注意："),s("strong",[t._v("本地")]),t._v("文件拷贝")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("常用选项：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a 递归拷贝文件，包括目录及文件属性信息\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r 拷贝目录\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p 拷贝文件包含文件的属性信息\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v 显示拷贝过程信息\n用法：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" 选项 需要拷贝的文件 拷贝到哪里去\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp /root/file1 /home 拷贝/root/下的file1文件到/home目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp -r /home/itcast /root 拷贝/home/itcast目录到/root目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# su - user01 切换到user01用户下")]),t._v("\n$ touch file1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp -p /home/user01/file1 /tmp/ 拷贝home/user01/file1文件（包含属性信息）到/tmp下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp /root/file1 /tmp/test1 拷贝文件并且重命名")]),t._v("\n\n\n问："),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a和"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p有什么区别？\n答：相同点都是需要拷贝文件的属性信息，比如拥有者（谁创建的等）；不同点在于，"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p只能拷贝文件，"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a既可以拷贝文件\n也可以拷贝目录。\n")])])]),s("h2",{attrs:{id:"_7、mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、mv"}},[t._v("#")]),t._v(" 7、mv")]),t._v(" "),s("blockquote",[s("p",[t._v("移动或重命名文件")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("移动文件用法（不同路径下）：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mv 需要移动的文件 移动到新的路径下")]),t._v("\n\n注意：文件的路径不一样\n重命名用法（相同路径下）：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mv 原来文件的名字 新文件的名字")]),t._v("\n\n注意：老文件和新文件的路径一样\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mv /root/file1 /tmp 移动/root/file1文件到/tmp目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mv /tmp/file1 /tmp/test1 将/tmp目录下的file1文件重命名成test1")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8、rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、rm"}},[t._v("#")]),t._v(" 8、rm")]),t._v(" "),s("blockquote",[s("p",[t._v("删除文件")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("常用选项\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r 递归删除，一般用于删除目录\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f 直接删除，不提示\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm file1 删除当前目录下的file1文件，有提示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm -r dir1 删除当前目录下的dir1目录，有提示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm -f /root/file1 强制删除/root/file1文件，不提示，直接删")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports},987:function(t,s,a){t.exports=a.p+"assets/img/image-20231031155740005.2dfff98e.png"},988:function(t,s,a){t.exports=a.p+"assets/img/image-20231031155712778.4ec013a6.png"},989:function(t,s,a){t.exports=a.p+"assets/img/image-20231031155736205.b4499700.png"},990:function(t,s,a){t.exports=a.p+"assets/img/image-20231031160000001.97ed956d.png"}}]);