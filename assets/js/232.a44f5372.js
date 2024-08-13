(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1459:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令-2-关机、重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令-2-关机、重启"}},[t._v("#")]),t._v(" 命令--2.关机、重启")]),t._v(" "),s("h3",{attrs:{id:"sync数据同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync数据同步"}},[t._v("#")]),t._v(" sync数据同步")]),t._v(" "),s("p",[t._v("sync命令的基本信息如下。")]),t._v(" "),s("p",[t._v("功能描述：刷新文件系统缓冲区。")]),t._v(" "),s("h3",{attrs:{id:"shutdown命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shutdown命令"}},[t._v("#")]),t._v(" shutdown命令")]),t._v(" "),s("p",[t._v("关机和重启操作只有管理员可以执行！")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# shutdown [选项] 时间 [警告信息]")]),t._v("\n选项：\n    -c：取消已经执行的shutdown命令\n    -h：关机\n    -r：重启\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v(" now "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 立刻马上关机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 60分钟（1个小时）后关闭")]),t._v("\n\n说明：如果取消在另一终端使用shutdown "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" 或者直接ctrl+c\n")])])]),s("p",[s("code",[t._v("reboot")]),t._v(" 重启系统")]),t._v(" "),s("p",[s("code",[t._v("shutdown -r now")]),t._v(" 立刻马上重启")]),t._v(" "),s("p",[s("code",[t._v("shutdown -r 30")]),t._v(" 30分钟后重启系统")]),t._v(" "),s("h3",{attrs:{id:"reboot命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reboot命令"}},[t._v("#")]),t._v(" reboot命令")]),t._v(" "),s("p",[t._v("在现在的系统中，reboot命令也是安全的，而且不需要加入过多的选项。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reboot")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启")]),t._v("\n")])])]),s("h3",{attrs:{id:"halt和poweroff命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#halt和poweroff命令"}},[t._v("#")]),t._v(" halt和poweroff命令")]),t._v(" "),s("p",[t._v("这两个都是关机命令，直接执行即可。这两个命令不会完整关闭和保存系统的服务，不建议使用。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# halt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# poweroff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关机")]),t._v("\n")])])]),s("h3",{attrs:{id:"init命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init命令"}},[t._v("#")]),t._v(" init命令")]),t._v(" "),s("p",[t._v("init是修改Linux运行级别的命令，也可以用于关机和重启。这个命令并不安全，不建议使用。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# init 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关机，也就是调用系统的0级别")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# init 6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启，也就是调用系统的6级别")]),t._v("\n")])])]),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),s("ul",[s("li",[t._v("远程主机不建议关机")]),t._v(" "),s("li",[t._v("在重启前，关闭正在执行的服务，当心损坏硬盘")]),t._v(" "),s("li",[t._v("建议使用"),s("code",[t._v("shutdown -r now")]),t._v("命令重启。这条命令在重启时会正常保存和中止服务器中正在运行的程序，是安全重启命令。")]),t._v(" "),s("li",[t._v("而且最好在重启前执行几次"),s("code",[t._v("sync")]),t._v("命令，这条命令是数据同步命令，可以让暂时保存在内存中的数据同步到硬盘上。")])]),t._v(" "),s("h3",{attrs:{id:"远程防火墙配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程防火墙配置"}},[t._v("#")]),t._v(" 远程防火墙配置")]),t._v(" "),s("p",[t._v("如果需要远程配置防火墙，那么先写一个系统定时任务，让它每5分钟清空一下防火墙规则，就算写错了也还有反悔的机会，等测试没有问题了再删除这个系统定时任务")])])}),[],!1,null,null,null);s.default=e.exports}}]);