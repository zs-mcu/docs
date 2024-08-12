(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1420:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令-7-1-文件权限-普通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令-7-1-文件权限-普通"}},[t._v("#")]),t._v(" 命令--7.1.文件权限(普通)")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#一、权限概述"}},[t._v("一、权限概述")]),s("ul",[s("li",[s("a",{attrs:{href:"#一-什么是权限"}},[t._v("㈠ 什么是权限")])]),s("li",[s("a",{attrs:{href:"#二-权限设置目的"}},[t._v("㈡ 权限设置目的")])]),s("li",[s("a",{attrs:{href:"#三-文件权限的分类"}},[t._v("㈢ 文件权限的分类")])])])]),s("li",[s("a",{attrs:{href:"#二、普通权限-重点"}},[t._v("二、普通权限(重点)")]),s("ul",[s("li",[s("a",{attrs:{href:"#一-理解普通权限rwx含义"}},[t._v("㈠ 理解普通权限rwx含义")])]),s("li",[s("a",{attrs:{href:"#二-理解ugo的含义"}},[t._v("㈡ 理解UGO的含义")])]),s("li",[s("a",{attrs:{href:"#三-修改文件普通权限-chmod"}},[t._v("㈢ 修改文件普通权限(chmod)")])]),s("li",[s("a",{attrs:{href:"#课堂练习"}},[t._v("课堂练习")])])])]),s("li",[s("a",{attrs:{href:"#三、文件的属主和属组"}},[t._v("三、文件的属主和属组")]),s("ul",[s("li",[s("a",{attrs:{href:"#一-如何查看文件的属主和属组"}},[t._v("㈠ 如何查看文件的属主和属组")])]),s("li",[s("a",{attrs:{href:"#二-如何修改文件的属主和属组"}},[t._v("㈡ 如何修改文件的属主和属组")])])])]),s("li",[s("a",{attrs:{href:"#demo案例"}},[t._v("demo案例")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"一、权限概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、权限概述"}},[t._v("#")]),t._v(" 一、权限概述")]),t._v(" "),s("h3",{attrs:{id:"一-什么是权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是权限"}},[t._v("#")]),t._v(" ㈠ 什么是权限")]),t._v(" "),s("p",[s("strong",[t._v("权限：")]),t._v(" 在计算机"),s("font",{attrs:{color:"red"}},[t._v("系统中")]),t._v("，权限是指某个"),s("font",{attrs:{color:"red"}},[t._v("计算机用户")]),t._v("具有"),s("font",{attrs:{color:"red"}},[t._v("使用软件资源的权利")]),t._v("。")],1),t._v(" "),s("p",[s("strong",[t._v("思考：计算机资源分为哪两部分？")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("硬件资源 硬盘、CPU、内存、网卡等"),s("font",{attrs:{color:"red"}},[t._v("物理硬件资源")])],1)]),t._v(" "),s("li",[s("p",[t._v("软件资源")]),t._v(" "),s("p",[s("strong",[t._v("软件")]),t._v("：操作系统(特殊的软件)、应用程序。只要不启动，这些软件就是一堆静态的"),s("font",{attrs:{color:"red"}},[t._v("文件")]),t._v("，并且静静的躺在我们计算机的磁盘中。")],1),t._v(" "),s("p",[s("strong",[t._v("软件资源")]),t._v("：Linux系统中，一切皆文件！SO，这里的软件资源就是"),s("font",{attrs:{color:"red"}},[t._v("文件资源")]),t._v("。")],1)])]),t._v(" "),s("p",[s("strong",[t._v("总结：")])]),t._v(" "),s("p",[t._v("我们今天所讲的权限，指的就是："),s("font",{attrs:{color:"red"}},[t._v("文件资源")]),t._v("所拥有的相关权限，即"),s("font",{attrs:{color:"red"}},[t._v("文件权限")])],1),t._v(" "),s("h3",{attrs:{id:"二-权限设置目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-权限设置目的"}},[t._v("#")]),t._v(" ㈡ 权限设置目的")]),t._v(" "),s("p",[t._v("文件权限的设置目的："),s("font",{attrs:{color:"red"}},[t._v("是想让某个用户（Linux操作系统中的用户）有权利操作文件")])],1),t._v(" "),s("h3",{attrs:{id:"三-文件权限的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-文件权限的分类"}},[t._v("#")]),t._v(" ㈢ 文件权限的分类")]),t._v(" "),s("p",[s("strong",[t._v("普通权限")])]),t._v(" "),s("ul",[s("li",[t._v("用户正常情况去操作文件所具有的权限")])]),t._v(" "),s("p",[s("strong",[t._v("高级权限")])]),t._v(" "),s("ul",[s("li",[t._v("用户对某个文件操作有特殊需求，而普通权限不能满足，需要给文件设置高级权限")])]),t._v(" "),s("p",[s("strong",[t._v("默认权限")])]),t._v(" "),s("ul",[s("li",[t._v("用户在系统中创建一个文件，该文件默认都会有一个权限，该权限是默认有的")])]),t._v(" "),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("p",[t._v("权限是"),s("font",{attrs:{color:"red"}},[t._v("设置在文件上")]),t._v("的，而不是用户；设置权限目的是让相应的人（用户）去操作相应的文件")],1),t._v(" "),s("h2",{attrs:{id:"二、普通权限-重点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、普通权限-重点"}},[t._v("#")]),t._v(" 二、普通权限(重点)")]),t._v(" "),s("h3",{attrs:{id:"一-理解普通权限rwx含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-理解普通权限rwx含义"}},[t._v("#")]),t._v(" ㈠ 理解普通权限rwx含义")]),t._v(" "),s("p",[t._v("1、读权限—r("),s("font",{attrs:{color:"red"}},[t._v("r")]),t._v("ead)")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("目录")])],1),t._v(" "),s("p",[t._v("一个目录拥有r权限，说明可以查看该"),s("font",{attrs:{color:"red"}},[t._v("目录里的内容")]),t._v("（ls命令列出）")],1)]),t._v(" "),s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("普通文件")])],1),t._v(" "),s("p",[t._v("一个普通文件拥有r权限，说明可以查看该"),s("font",{attrs:{color:"red"}},[t._v("文件的内容")]),t._v("(cat/head/tail/less/more等命令查看)")],1)]),t._v(" "),s("li",[s("p",[t._v("读权限**"),s("font",{attrs:{color:"red"}},[t._v("r")]),t._v("**（read）用数字表示是"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("4")])])],1)])]),t._v(" "),s("p",[t._v("2、写权限—w("),s("font",{attrs:{color:"red"}},[t._v("w")]),t._v("rite)")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("目录")])],1),t._v(" "),s("p",[t._v("一个目录拥有w权限，说明可以在该目录里"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("创建、删除、重命名")])]),t._v("等操作（mkdir/touch/mv/rm等）")],1)]),t._v(" "),s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("普通文件")])],1),t._v(" "),s("p",[t._v("一个普通文件拥有w权限，说明可以"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("修改")])]),t._v("该"),s("font",{attrs:{color:"red"}},[t._v("文件的"),s("strong",[t._v("内容")])]),t._v("（vi/vim编辑器编辑文件）")],1)]),t._v(" "),s("li",[s("p",[t._v("写权限"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("w")])]),t._v("（write）用数字表示是**"),s("font",{attrs:{color:"red"}},[t._v("2")]),t._v("**")],1)])]),t._v(" "),s("p",[t._v("3、执行权限—x(e"),s("font",{attrs:{color:"red"}},[t._v("x")]),t._v("ecute)")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("目录")])],1),t._v(" "),s("p",[t._v("一个目录拥有x权限，说明可以**"),s("font",{attrs:{color:"red"}},[t._v("进入或切换到")]),t._v("**该目录里（cd命令）")],1)]),t._v(" "),s("li",[s("p",[t._v("针对"),s("font",{attrs:{color:"red"}},[t._v("普通文件")])],1),t._v(" "),s("p",[t._v("一个普通文件拥有x权限，说明可以**"),s("font",{attrs:{color:"red"}},[t._v("执行")]),t._v("**该文件（一般程序文件、脚本文件、命令都需要执行权限）")],1)]),t._v(" "),s("li",[s("p",[t._v("执行权限"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("x")])]),t._v("（execute）用数字表示是"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("1")])])],1)])]),t._v(" "),s("p",[t._v("4、没有权限—横杠-")]),t._v(" "),s("p",[t._v("没有任何权限用横杠"),s("font",{attrs:{color:"red"}},[t._v("-")]),t._v("表示，数字表示是"),s("strong",[t._v("0")])],1),t._v(" "),s("h3",{attrs:{id:"二-理解ugo的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-理解ugo的含义"}},[t._v("#")]),t._v(" ㈡ 理解UGO的含义")]),t._v(" "),s("p",[t._v("1、UGO指的是什么")]),t._v(" "),s("p",[t._v("UGO，指的是**"),s("font",{attrs:{color:"red"}},[t._v("用户身份")]),t._v("**，每个字母代表"),s("font",{attrs:{color:"red"}},[t._v("不同的")]),t._v("用户身份。")],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("U（the user who owns it）")]),t._v(" "),s("p",[t._v("文件的"),s("font",{attrs:{color:"red"}},[t._v("拥有者")]),t._v("(owner)或者"),s("font",{attrs:{color:"red"}},[t._v("创建者")])],1)]),t._v(" "),s("li",[s("p",[t._v("G（other users in the file’s "),s("font",{attrs:{color:"red"}},[t._v("g")]),t._v("roup）")],1),t._v(" "),s("p",[t._v("在文件的所属组（默认是创建文件的用户的主组）里的用户")])]),t._v(" "),s("li",[s("p",[t._v("O（"),s("font",{attrs:{color:"red"}},[t._v("o")]),t._v("ther users not in the file’s group）")],1),t._v(" "),s("p",[t._v("既不是文件的创建者，也不在文件属组里的用户，称为其他人")])])]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("p",[t._v("除了上面ugo以外，还有一个字母**"),s("font",{attrs:{color:"red"}},[t._v("a")]),t._v("**（all users）,表示"),s("font",{attrs:{color:"red"}},[t._v("所有用户")]),t._v("，包含ugo")],1),t._v(" "),s("p",[t._v("2、如何判断不同身份的用户对文件的权限")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("查看文件详细信息，包含权限信息：\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -l")]),t._v("\ntotal 144\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 9 Mar 2 20:38 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 1651 Feb 28 11:00 anaconda-ks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cfg\ndrwxr-xr-x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root root 4096 Mar 6 18:34 Desktop\ndrwxr-xr-x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root root 4096 Feb 28 14:12 dir1\n")])])]),s("p",[s("img",{attrs:{src:a(969),alt:"image-20231102195525101"}})]),t._v(" "),s("h3",{attrs:{id:"三-修改文件普通权限-chmod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-修改文件普通权限-chmod"}},[t._v("#")]),t._v(" ㈢ 修改文件普通权限(chmod)")]),t._v(" "),s("p",[t._v("1、chmod命令用法")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("chmod "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 模式 文件名\n常见选项：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("recursive 递归更改目录和目录里文件的权限\n")])])]),s("p",[t._v("2、举例说明")]),t._v(" "),s("p",[t._v("① 通过字母形式更改文件权限")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("u:表示文件拥有者\ng:表示文件属组里的用户\no:表示其他人，即不是文件的创建者，也不在文件属组里\na:表示所有人\n")])])]),s("ul",[s("li",[t._v("环境准备")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /tmp/dir1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch /tmp/dir1/file{1..5}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch /tmp/test{1..3}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll /tmp/ -R")]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用字母形式修改文件权限")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pwd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test1\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod u+x test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rwxr-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test1\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod g+w test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rwxrw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test1\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod o-r test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rwxrw-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test1\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test2\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod a+x test2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rwxr-xr-x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test2\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test3\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod u+x,g+w,o-r test3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rwxrw-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test3\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod u=rw,g=rx,o+r test3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll test3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-xr-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 test3\n\n修改目录的权限：\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll -d dir1/")]),t._v("\ndrwxr-xr-x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root root 4096 Mar 6 20:45 dir1/\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll dir1/")]),t._v("\ntotal 0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file2\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file3\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file4\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file5\n\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("只修改目录本身的权限\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod g+w dir1/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll -d dir1/")]),t._v("\ndrwxrwxr-x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root root 4096 Mar 6 20:45 dir1/\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll dir1/")]),t._v("\ntotal 0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file2\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file3\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file4\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file5\n说明：目录下面文件的权限并没有修改\n\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("修改目录以及目录里所有文件的权限（递归修改），使用"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("R参数\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod -R o+w dir1/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll -d dir1/")]),t._v("\ndrwxrwxrwx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root root 4096 Mar 6 20:45 dir1/\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima tmp]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll dir1/")]),t._v("\ntotal 0\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file2\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file3\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file4\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 1 root root 0 Mar 6 20:45 file5\n")])])]),s("p",[t._v("② 通过数字形式更改文件权限")]),t._v(" "),s("ul",[s("li",[t._v("学会用数字表示权限")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("字母和数字对应关系：\nr——4\nw——2\nx——1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("——0\n\n\nrw- r-x r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 用数字表示就是654\nrwx rw- "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 用数字表示就是760\n755 用字母表示就是rwx r-x r-x\n644 用字母表示就是rw- r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用数字形式修改文件权限")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod 644 file1 rw-r--r--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod 700 file2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chmod -R 755 dir1")]),t._v("\n")])])]),s("p",[s("strong",[t._v("总结：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("普通权限当中rwx含义")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("目录：r（ls列出目录内容），w（创建、删除、重命名等操作），x（cd进入目录）")])]),t._v(" "),s("li",[s("p",[t._v("文件：r（cat等相关工具查看文件内容），w（修改文件内容），x（可执行，程序，脚本文件等）")])])])]),t._v(" "),s("li",[s("p",[t._v("理解用户身份（UGO）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("U：文件的拥有者（创建）")])]),t._v(" "),s("li",[s("p",[t._v("G：文件所属组里成员")])]),t._v(" "),s("li",[s("p",[t._v("O：陌生人（其他人）")])])])]),t._v(" "),s("li",[s("p",[t._v("如何设置文件的权限？——>chmod命令")]),t._v(" "),s("ul",[s("li",[t._v("用字母形式")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("chmod u+x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("g=rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("o-x filename\n")])])]),s("ul",[s("li",[t._v("数字形式")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("r——>4\nw——>2\nx——>1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("——>0\nrw- r-x r-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" = 654\n\n\nchmod 755 filename rwx r-x r-x\n")])])])]),t._v(" "),s("li",[s("p",[t._v("是否可以在目录里创建或删除文件？看当前目录本身是否有w权限！！")])]),t._v(" "),s("li",[s("p",[t._v("对于正常操作目录而言，一般都会具有r和x权限")])])]),t._v(" "),s("h3",{attrs:{id:"课堂练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课堂练习"}},[t._v("#")]),t._v(" 课堂练习")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建5个用户user01~user05和一个admin组")])]),t._v(" "),s("li",[s("p",[t._v("将user01~user03用户加入到admin组里")])]),t._v(" "),s("li",[s("p",[t._v("user01用户在其家目录里创建file1~file3三个文件")])]),t._v(" "),s("li",[s("p",[t._v("user02用户编辑/home/user01/file1文件的内容：good good study,day day up!")])]),t._v(" "),s("li",[s("p",[t._v("user05用户往/home/user01/file1文件里追加内容：I known")])]),t._v(" "),s("li",[s("p",[t._v("user04用删除/home/user01家目录的所有文件")])])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("id user01\nuseradd user01\nuseradd user02 \nuseradd user03 \nuseradd user04\nuseradd user05\n\ngrep admin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v("\ngroupdel admin\ngroupadd admin\ntail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v("\n\n\nusermod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("G admin user01\ngpasswd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("M user01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user02\ngpasswd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a user03\nid user02\ntail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v("\n\nsu user01\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwd")]),t._v("\ntouch file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nchmod o+rx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home/user01\nchmod o+w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("home/user01/file1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"good good study,day day up"')]),t._v(" > file1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I konwn"')]),t._v(" > file1\n\n\n")])])]),s("h2",{attrs:{id:"三、文件的属主和属组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、文件的属主和属组"}},[t._v("#")]),t._v(" 三、文件的属主和属组")]),t._v(" "),s("h3",{attrs:{id:"一-如何查看文件的属主和属组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-如何查看文件的属主和属组"}},[t._v("#")]),t._v(" ㈠ 如何查看文件的属主和属组")]),t._v(" "),s("p",[s("img",{attrs:{src:a(970),alt:"image-20231103091506274"}})]),t._v(" "),s("h3",{attrs:{id:"二-如何修改文件的属主和属组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-如何修改文件的属主和属组"}},[t._v("#")]),t._v(" ㈡ 如何修改文件的属主和属组")]),t._v(" "),s("h4",{attrs:{id:"_1、chown命令修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、chown命令修改"}},[t._v("#")]),t._v(" 1、chown命令修改")]),t._v(" "),s("p",[s("code",[t._v("chown")]),t._v(" 命令既可以修改文件的属主，也可以修改文件的属组。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("只修改文件的属主\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown 用户名 文件名")]),t._v("\n\n修改文件的属主和属组\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown 用户名.组名 文件名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown 用户名:组名 文件名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown 用户名. 文件名 //没有指定组名，默认是用户的主组")]),t._v("\n\n只修改文件的属组\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown .组名 文件名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chown :组名 文件名")]),t._v("\n\n可以加"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("R选项，表示递归修改\n")])])]),s("h4",{attrs:{id:"_2、chgrp命令修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、chgrp命令修改"}},[t._v("#")]),t._v(" 2、chgrp命令修改")]),t._v(" "),s("p",[s("code",[t._v("chgrp")]),t._v(" 命令只能修改文件的属组。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chgrp 组名 文件名")]),t._v("\n")])])]),s("h2",{attrs:{id:"demo案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo案例"}},[t._v("#")]),t._v(" demo案例")]),t._v(" "),s("p",[t._v("一、创建目录在跳板机")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /data/code -p")]),t._v("\n")])])]),s("p",[t._v("二、目录做好权限管控")]),t._v(" "),s("p",[t._v("1、该目录只给开发人员使用")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@heima ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll -d /data/code/")]),t._v("\ndrwxrwx-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 2 root coding 58 8月 1 22:18 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("code/\n\nchgrp codeing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("code/\nchmod g+w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("code/\nchmod o-rx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("code/\n")])])]),s("p",[t._v("2、开发所有人只能自己管理自己")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("测试结果：\n开发部门的人可以删除其他人的文件，不满足需求，怎么办？\n普通权限无法满足我们的需求，尝试使用高级权限解决\nchmod o+t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("code\n")])])])])}),[],!1,null,null,null);s.default=e.exports},969:function(t,s,a){t.exports=a.p+"assets/img/image-20231102195525101.636e7f31.png"},970:function(t,s,a){t.exports=a.p+"assets/img/image-20231103091506274.b1b1faa5.png"}}]);