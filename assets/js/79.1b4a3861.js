(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1e3:function(t,s,a){t.exports=a.p+"assets/img/image-20231101092241384.a3e5ae1f.png"},1001:function(t,s,a){t.exports=a.p+"assets/img/image-20231101092827303.de8472d0.png"},1494:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令-5-查找命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令-5-查找命令"}},[t._v("#")]),t._v(" 命令--5.查找命令")]),t._v(" "),s("h2",{attrs:{id:"whereis命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whereis命令"}},[t._v("#")]),t._v(" whereis命令")]),t._v(" "),s("p",[s("code",[t._v("which 命令")]),t._v(" ：找出命令的绝对路径")]),t._v(" "),s("p",[s("code",[t._v("whereis 命令")]),t._v(" ：找出命令的路径以及文档手册信息")]),t._v(" "),s("p",[t._v("​\t\twhereis是搜索系统命令的命令（像绕口令一样），也就是说，whereis命令不能搜索普通文件，而只能搜索系统命令。whereis命令的基本信息如下。")]),t._v(" "),s("ul",[s("li",[t._v("命令名称：whereis。")]),t._v(" "),s("li",[t._v("功能描述：查找二进制命令、源文件和帮助文档的命令。")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# whereis mkdir")]),t._v("\nmkdir: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/bin/mkdir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/share/man/man1/mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/share/man/man1p/mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/share/man/man2/mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/share/man/man3p/mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n")])])]),s("h2",{attrs:{id:"which命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which命令"}},[t._v("#")]),t._v(" which命令")]),t._v(" "),s("p",[s("code",[t._v("which 命令")]),t._v(" ：找出命令的绝对路径")]),t._v(" "),s("p",[s("code",[t._v("whereis 命令")]),t._v(" ：找出命令的路径以及文档手册信息")]),t._v(" "),s("p",[t._v("which也是搜索系统命令的命令。")]),t._v(" "),s("ul",[s("li",[t._v("命令名称：which。")]),t._v(" "),s("li",[t._v("功能描述：列出命令的所在路径。")])]),t._v(" "),s("p",[t._v("和whereis命令的区别在于：")]),t._v(" "),s("ul",[s("li",[t._v("whereis命令可以在查找到二进制命令的同时，查找到帮助文档的位置；")]),t._v(" "),s("li",[t._v("而which命令在查找到二进制命令的同时，如果这个命令有别名，则还可以找到别名命令。")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# which mkdir")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr/bin/mkdir\n")])])]),s("h2",{attrs:{id:"locate命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate命令"}},[t._v("#")]),t._v(" locate命令")]),t._v(" "),s("h3",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("p",[t._v("locate命令才是可以按照文件名搜索普通文件的命令。")]),t._v(" "),s("ul",[s("li",[t._v("优点：按照数据库搜索，搜索速度快，消耗资源小。数据库位置"),s("code",[t._v("/var/lib/mlocate/mlocate.db")]),t._v("，\n可以使用"),s("code",[t._v("updatedb")]),t._v("命令强制更新数据库。")]),t._v(" "),s("li",[t._v("缺点：只能按照文件名来搜索文件，而不能执行更复杂的搜索，比如按照权限、大小、修改时间等搜索文件。")])]),t._v(" "),s("p",[t._v("locate命令的基本信息如下。")]),t._v(" "),s("ul",[s("li",[t._v("所在路径：/usr/bin/locate。")]),t._v(" "),s("li",[t._v("执行权限：所有用户。")]),t._v(" "),s("li",[t._v("功能描述：按照文件名搜索文件。")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# locate hello.sh ")]),t._v("\nlocate: 无法执行 stat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" `"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib/mlocate/mlocate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db': 没有那个文件或目录\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# updatedb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# locate hello.sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root/hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n")])])]),s("h3",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("/etc/updatedb.conf")])])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[jysp@jysp media]")]),t._v("$ vim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/updatedb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启搜索限制，也就是让这个配置文件生效")]),t._v("\nPRUNE_BIND_MOUNTS = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yes"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在locate执行搜索时，禁止搜索这些文件系统类型")]),t._v("\nPRUNEFS = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9p afs anon_inodefs auto autofs bdev binfmt_misc cgroup cifs coda configfs cpuset debugfs devpts ecryptfs exofs fuse fuse.sshfs fusectl gfs gfs2 gpfs hugetlbfs inotifyfs iso9660 jffs2 lustre mqueue ncpfs nfs nfs4 nfsd pipefs proc ramfs rootfs rpc_pipefs securityfs selinuxfs sfs sockfs sysfs tmpfs ubifs udf usbfs fuse.glusterfs ceph fuse.ceph"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在locate执行搜索时，禁止搜索带有这些扩展名的文件")]),t._v("\nPRUNENAMES = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".git .hg .svn"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在locate执行搜索时，禁止搜索这些系统目录")]),t._v("\nPRUNEPATHS = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/afs /media /mnt /net /sfs /tmp /udev /var/cache/ccache /var/lib/yum/yumdb /var/spool/cups /var/spool/squid /var/tmp /var/lib/ceph"')]),t._v("\n")])])]),s("h2",{attrs:{id:"find命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find命令"}},[t._v("#")]),t._v(" find命令")]),t._v(" "),s("blockquote",[s("p",[t._v("在目录中搜索文件。")]),t._v(" "),s("p",[s("code",[t._v("find 命令")]),t._v("："),s("strong",[t._v("精确")]),t._v("查找，磁盘搜索，IO读写，cpu开销大")])]),t._v(" "),s("p",[s("strong",[t._v("根据需求")]),t._v("查找出来直接输出到屏幕")]),t._v(" "),s("p",[t._v("find 查找路径 选项 关键字")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("常见选项")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("font",{attrs:{color:"red"}},[t._v("-name")])],1),t._v(" "),s("td",[t._v("按照文件名查找文件")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("font",{attrs:{color:"red"}},[t._v("-iname")])],1),t._v(" "),s("td",[t._v("按照文件名忽略大小写查找")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("font",{attrs:{color:"red"}},[t._v("-size")])],1),t._v(" "),s("td",[t._v("按照文件大小来查找")]),t._v(" "),s("td",[t._v("+1M 大于1M -1M 小于1M 1M 等于1M")])]),t._v(" "),s("tr",[s("td",[s("font",{attrs:{color:"red"}},[t._v("-type")])],1),t._v(" "),s("td",[t._v("按照文件类型来查找")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("font",{attrs:{color:"red"}},[t._v("-mtime")])],1),t._v(" "),s("td",[t._v("按文件修改时间来查找文件")]),t._v(" "),s("td",[t._v("-n指n天以内，+n指n天以前")])]),t._v(" "),s("tr",[s("td",[t._v("-atime")]),t._v(" "),s("td",[t._v("按文件访问时间来查")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("-ctime")]),t._v(" "),s("td",[t._v("按文件创建时间来查找文件")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("-perm")]),t._v(" "),s("td",[t._v("按照文件权限来查找文件")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"按照文件名搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照文件名搜索"}},[t._v("#")]),t._v(" 按照文件名搜索")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name：\t按照文件名搜索\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iname：\t按照文件名搜索，不区分文件名大小写\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("inum：\t按照inode号搜索\n")])])]),s("blockquote",[s("p",[t._v("文件名搜索示例")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# find /test -name "file1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# find /test -iname "file1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# find /etc -name "*.conf"')]),t._v("\n")])])]),s("h3",{attrs:{id:"按照文件大小搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照文件大小搜索"}},[t._v("#")]),t._v(" 按照文件大小搜索")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n\n选项：\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("大小：按照指定大小搜索文件\n\n注意："),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1M 当文件中没有小于1M的文件的时候，会变成查找"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1k\n")])])]),s("p",[t._v("这里的“+”的意思是搜索比指定大小还要大的文件，“-”的意思是搜索比指定大小还要小的文件。")]),t._v(" "),s("p",[t._v("find命令的单位：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# man find")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[cwbkMG]")]),t._v("\n              File uses n units of space"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  The following suffixes can be used:\n\t\t\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这是默认单位，如果单位为b或不写单位，则按照512Byte搜索")]),t._v("\n              `b"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'    for 512-byte blocks (this is the default if no suffix is used)\n\t\t\t  #搜索单位是c，按照字节搜索\n              `c'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" bytes\n\t\t\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#搜索单位是w，按照双字节（中文）搜索")]),t._v("\n              `w"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'    for two-byte words\n\t\t\t  #按照KB单位搜索，必须是小写的k\n              `k'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Kilobytes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("units of 1024 bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#按照MB单位搜索，必须是大写的M")]),t._v("\n              `M"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'    for Megabytes (units of 1048576 bytes)\n\t\t\t  #按照GB单位搜索，必须是大写的G\n              `G'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Gigabytes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("units of 1073741824 bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n              The  size  does  not count indirect blocks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but it does count blocks in sparse files that are not actually allocated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  Bear in mind that the `"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' and\n              `%b'")]),t._v(" format specifiers of "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("printf handle sparse files differently"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  The `b' suffix always denotes 512-byte blocks and never 1 Kilobyte blocks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  which\n              is different to the behaviour of "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),s("blockquote",[s("p",[t._v("文件大小示例")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -size +1M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -size -1M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -size -1024k")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -size 9M")]),t._v("\n")])])]),s("h3",{attrs:{id:"按照修改时间搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照修改时间搜索"}},[t._v("#")]),t._v(" 按照修改时间搜索")]),t._v(" "),s("p",[t._v("Linux中的文件有访问时间（atime）、数据修改时间（mtime）、状态修改时间（ctime）这三个时间，我们也可以按照时间来搜索文件。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("atime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("时间：按照文件访问时间搜索\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mtime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("时间：按照文件数据修改时间搜索\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ctime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("时间：按照文件状态修改时间搜索\n")])])]),s("p",[t._v("这三个时间的区别我们在stat命令中已经解释过了，这里用mtime数据修改时间来举例，重点说说“[+-]”时间的含义。")]),t._v(" "),s("ul",[s("li",[t._v("-5：代表5天内修改的文件。")]),t._v(" "),s("li",[t._v("5：代表前5～6天那一天修改的文件。")]),t._v(" "),s("li",[t._v("+5：代表6天前修改的文件。")])]),t._v(" "),s("p",[t._v("我们画一个时间轴，来解释一下，如图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(998),alt:"image-20231221095856219"}})]),t._v(" "),s("img",{attrs:{src:a(999),alt:"image-20231101091106875"}}),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find ./ -type f -mtime +2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find ./ -type f -mtime -2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find ./ -type f -mtime 2")]),t._v("\n注意：这里的天数需要满24小时为一天的\nfind "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("daystart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("2\n")])])]),s("h3",{attrs:{id:"按照权限搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照权限搜索"}},[t._v("#")]),t._v(" 按照权限搜索")]),t._v(" "),s("p",[t._v("命令格式。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("perm  权限模式：查找文件权限刚好等于“权限模式”的文件\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("perm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("权限模式：查找文件权限全部包含“权限模式”的文件\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("perm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("权限模式：查找文件权限包含“权限模式”的任意一个权限的文件\n")])])]),s("h3",{attrs:{id:"按照所有者和所属组搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照所有者和所属组搜索"}},[t._v("#")]),t._v(" 按照所有者和所属组搜索")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uid 用户ID：\t按照用户ID查找所有者是指定ID的文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gid 组ID：\t 按照用户组ID查找所属组是指定ID的文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user 用户名：\t按照用户名查找所有者是指定用户的文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v(" 组名：\t按照组名查找所属组是指定用户组的文件\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nouser：\t 查找没有所有者的文件\n")])])]),s("p",[t._v("按照所有者和所属组搜索时，“-nouser”选项比较常用，主要用于查找垃圾文件。")]),t._v(" "),s("p",[t._v("只有一种情况例外，那就是外来文件。比如光盘和U盘中的文件如果是由Windows复制的，在Linux中查看就是没有所有者的文件；再比如手工源码包安装的文件，也有可能没有所有者")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -user heima -group heima -type f")]),t._v("\n一般省略 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a: find "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user heima "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v(" heima "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" f 代表同时满足\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -perm 644")]),t._v("\n")])])]),s("h3",{attrs:{id:"按照文件类型搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照文件类型搜索"}},[t._v("#")]),t._v(" 按照文件类型搜索")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" d：查找目录\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" f：查找普通文件\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" l：查找软链接文件\n")])])]),s("blockquote",[s("p",[t._v("文件类型示例")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find /usr/bin/ -type l\t\t查找连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find /dev -type b\t\t\t查找块设备")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type d\t\t\t查找目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f\t\t\t查找文件")]),t._v("\n")])])]),s("h3",{attrs:{id:"逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容")]),t._v("\n选项：\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a：\t\tand逻辑与\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o：\t\tor逻辑或\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-not")]),t._v("：\tnot逻辑非\n")])])]),s("p",[t._v("1）-a：and逻辑与")]),t._v(" "),s("p",[t._v("find命令也支持逻辑运算符选项，其中-a代表逻辑与运算，也就是-a的两个条件都成立，find搜索的结果才成立。举个例子：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在当前目录下搜索大于2KB，并且文件类型是普通文件的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -size +2k -a -type f")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -user heima -group heima -type f")]),t._v("\n一般省略 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a: find "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user heima "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v(" heima "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" f 代表同时满足\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima test]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -type f -perm 644")]),t._v("\n")])])]),s("p",[t._v("2）-o：or逻辑或")]),t._v(" "),s("p",[t._v("-o选项代表逻辑或运算，也就是-o的两个条件只要其中一个成立，find命令就可以找到结果。例如：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在当前目录下搜索文件名要么是cangls的文件，要么是bols的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -name cangels -o -name bols")]),t._v("\n")])])]),s("p",[t._v("3）-not：not逻辑非")]),t._v(" "),s("p",[t._v("-not是逻辑非，也就是取反的意思。举个例子：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在当前目录下搜索文件名不是cangls的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find . -not -name cangls")]),t._v("\n")])])]),s("h3",{attrs:{id:"其他选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他选项"}},[t._v("#")]),t._v(" 其他选项")]),t._v(" "),s("p",[s("strong",[t._v("根据需求")]),t._v("查找出来后"),s("font",{attrs:{color:"red"}},[t._v("执行某个动作(命令)")])],1),t._v(" "),s("p",[s("code",[t._v("find 路径 选项 关键字 动作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("常见动作")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-exec")]),t._v(" "),s("td",[t._v("对查找到的文件"),s("font",{attrs:{color:"red"}},[t._v("直接")]),t._v("执行该参数后的shell命令")],1)]),t._v(" "),s("tr",[s("td",[t._v("-ok")]),t._v(" "),s("td",[t._v("对查找到的文件"),s("font",{attrs:{color:"red"}},[t._v("询问式")]),t._v("执行该参数后的shell命令")],1)]),t._v(" "),s("tr",[s("td",[t._v("-delete")]),t._v(" "),s("td",[t._v("删除查找到的文件")])]),t._v(" "),s("tr",[s("td",[t._v("-ls")]),t._v(" "),s("td",[t._v("列出查找到的文件,详细信息")])]),t._v(" "),s("tr",[s("td",[t._v("-print")]),t._v(" "),s("td",[t._v("打印出查找到的文件（默认选项）")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("1）-exec选项")]),t._v(" "),s("p",[t._v("这里我们主要讲解两个选项“-exec”和“-ok”，这两个选项的基本作用非常相似。我们先来看看“-exec”选项的格式。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find 搜索路径 [选项] 搜索内容 -exec 命令2 {} \\;")]),t._v("\n")])])]),s("p",[t._v("其次，这个选项的作用其实是把find命令的结果交给由“-exec”调用的命令2来处理。“{}”就代表find命令的查找结果。")]),t._v(" "),s("p",[t._v("2）-ok选项")]),t._v(" "),s("p",[t._v("“-ok”选项和“-exec”选项的作用基本一致，区别在于：“-exec”的命令2会直接处理，而不询问；“-ok”的命令2在处理前会先询问用户是否这样处理，在得到确认命令后，才会执行。")]),t._v(" "),s("p",[s("strong",[t._v("举例说明：")])]),t._v(" "),s("p",[s("code",[t._v("-delete")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1e3),alt:"image-20231101092241384"}})]),t._v(" "),s("p",[s("code",[t._v("-exec | -ok")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("语法结构：\n注意：\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("exec或者"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ok后面写完命令必须以空格反斜杠\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("结尾（ \\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("）\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("表示find命令所找出来的内容\n\nfind "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ok "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp \\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(1001),alt:"image-20231101092827303"}})])])}),[],!1,null,null,null);s.default=n.exports},998:function(t,s,a){t.exports=a.p+"assets/img/image-20231221095856219.35037add.png"},999:function(t,s,a){t.exports=a.p+"assets/img/image-20231101091106875.6e4103ba.png"}}]);