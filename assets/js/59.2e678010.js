(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1069:function(t,a,n){t.exports=n.p+"assets/img/image-20231215155152978.a62a7e0e.png"},1070:function(t,a,n){t.exports=n.p+"assets/img/image-20240109114400900.3af6b879.png"},1071:function(t,a,n){t.exports=n.p+"assets/img/image-20240109113400666.1aa6c22c.png"},1072:function(t,a,n){t.exports=n.p+"assets/img/image-20240109113816518.afc9ee15.png"},1073:function(t,a,n){t.exports=n.p+"assets/img/image-20240109113911526.b528eae9.png"},1074:function(t,a,n){t.exports=n.p+"assets/img/image-20240109114254512.6dfdad54.png"},1432:function(t,a,n){"use strict";n.r(a);var s=n(4),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"系统管理-3-2-系统管理-定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统管理-3-2-系统管理-定时任务"}},[t._v("#")]),t._v(" 系统管理--3.2.系统管理-定时任务")]),t._v(" "),a("h2",{attrs:{id:"at一次性执行定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#at一次性执行定时任务"}},[t._v("#")]),t._v(" at一次性执行定时任务")]),t._v(" "),a("h3",{attrs:{id:"_1-、at服务管理与访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-、at服务管理与访问控制"}},[t._v("#")]),t._v(" 1)、at服务管理与访问控制")]),t._v(" "),a("p",[t._v("at命令要想正确执行，需要atd服务的支持。atd服务是独立的服务，所以启动的命令是：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service atd start")]),t._v("\n正在启动 atd：\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("确定"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("如果想要让atd服务开机时自动启动，可以使用如下命令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# chkconfig atd on")]),t._v("\n")])])]),a("p",[t._v("atd服务启动之后，at命令才可以正常使用，不过我们还要学习下at命令的访问控制。\n这里的访问控制指的是允许哪些用户使用at命令设定定时任务，或者不允许哪些用户使用at命令。\n大家可以想象成为设定黑名单或设定白名单，这样更容易理解。\nat的访问控制是依靠"),a("code",[t._v("/etc/at.allow")]),t._v("文件（白名单）和"),a("code",[t._v("/etc/at.deny")]),t._v("文件（黑名单）这两个文件来实现的，具体规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("如果系统中有"),a("code",[t._v("/etc/at.allow")]),t._v("文件，那么只有写入"),a("code",[t._v("/etc/at.allow")]),t._v("文件（白名单）中的用户可以使用at命令，其他用户不能使用at命令（"),a("code",[t._v("/etc/at.deny")]),t._v("文件会被忽略，也就是说同一个用户既写入"),a("code",[t._v("/etc/at.allow")]),t._v("文件，也写入"),a("code",[t._v("/etc/at.deny")]),t._v("文件，那么这个用户是可以使用at命令的，因为"),a("code",[t._v("/etc/at.allow")]),t._v("文件优先级更高。）")]),t._v(" "),a("li",[t._v("如果系统中没有"),a("code",[t._v("/etc/at.allow")]),t._v("文件，只有"),a("code",[t._v("/etc/at.deny")]),t._v("文件，那么写入"),a("code",[t._v("/etc/at.deny")]),t._v("文件（黑名单）中的用户不能使用at命令，其他用户可以使用at命令。不过这个文件对root用户不生效。")]),t._v(" "),a("li",[t._v("如果系统中这两个文件都不存在，那么只有root用户可以使用at命令。")])]),t._v(" "),a("p",[t._v("系统中默认时只有/etc/at.deny文件，而且这个文件是空的，这样的话系统中所有的用户都可以使用at命令。\n不过如果我们打算控制用户的at命令权限，把用户写入/etc/at.deny文件即可")]),t._v(" "),a("p",[a("code",[t._v("/etc/at.allow")]),t._v("文件的权限更高，如果"),a("code",[t._v("/etc/at.allow")]),t._v("文件存在，则"),a("code",[t._v("/etc/at.deny")]),t._v("文件失效。\n"),a("code",[t._v("/etc/at.allow")]),t._v("管理行为更加严格，因为只有写入这个文件的用户才能使用at命令，如果需要禁用at命令的用户较多，则可以把少数用户写入这个文件。"),a("code",[t._v("/etc/at.deny")]),t._v("文件的管理较为松散，如果允许使用at命令的用户较多，则可以把禁用的用户写入这个文件。不过这两个文件都不能对root用户生效。")]),t._v(" "),a("h3",{attrs:{id:"_2-、at命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-、at命令"}},[t._v("#")]),t._v(" 2）、at命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# at [选项] 时间")]),t._v("\n选项：\n\t-m：\t\t\t当at工作完成后，无论是否命令有输出，都用email通知执行at命令的用户\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" 工作号：\t  显示该at工作的实际内容\n\t\n时间：\n\tat支持的时间格式如下：\n\tHH:MM\t\t\t\t\t\t\t\t\t\t在指定的“小时:分钟”执行命令，例如：02:30\t\n\tHH:MM YYYY-MM-DD\t\t\t\t\t\t\t在指定的“小时:分钟年月日”执行，例如02:30 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-07-25\n\tHH:MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("am"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("month"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t\t\t\t在指定的“小时:分钟"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("上午下午"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("月"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("日"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("”执行，例如02:30 July "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\n\tHH:MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("am"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" + "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("hours"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("days"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("weeks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t在指定的时间“再加多久执行”，例如now + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" minutes，05am +2 hours\n")])])]),a("p",[t._v("at命令只要指定正确的时间，就可以输入需要在指定时间执行的命令了，这个命令可以是系统命令，也可以是shell脚本。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("例子1：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /root/hello.sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world!!"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# at now +2 minutes")]),t._v("\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /root/hello.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /root/hello.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行hello.sh脚本，并把输出写入/root/hello.log文件")]),t._v("\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-使用ctrl+d保存at任务\njob "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-07-2520:54\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-这是第8个at任务，会在2018年7月25日20:54分执行\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# at -c 8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查询第8个at任务的内容")]),t._v("\n…省略部分内容…\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-主要是定义系统的环境变量\n/root/hello.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /root/hello.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以看到at执行的任务")]),t._v("\n\n\n例子2：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# at 02:00 2018-07-26")]),t._v("\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /bin/sync\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /sbin/shutdown "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v(" now\nat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\njob "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-07-26 02:00\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在指定的时间关机。在一个at任务中，是可以执行多个系统命令的")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-、其他at管理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-、其他at管理命令"}},[t._v("#")]),t._v(" 3）、其他at管理命令")]),t._v(" "),a("p",[t._v("at还有查询和删除命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atq")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查询当前服务器上的at工作")]),t._v("\n\n例如：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atq")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-07-26  02:00 a root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#说明root用户有一个at任务在2018年7月26日的02:00执行，工作号是9")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#atrm [工作号]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除指定的at任务")]),t._v("\n\n\n例如：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atrm 9")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# atq")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除9号at任务，再查询就没有at任务存在了")]),t._v("\n")])])]),a("h2",{attrs:{id:"crontab循环执行定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab循环执行定时任务"}},[t._v("#")]),t._v(" crontab循环执行定时任务")]),t._v(" "),a("p",[t._v("了解系统计划任务相关文件")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d/0hourly \t系统每小时第一分钟需要执行的任务\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deny \t\t\t用户拒绝列表（在该文件中的用户不能使用cron服务）\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/crontab \t\t\t该文件的作用相当于"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d/下面的某一个文件，可以定义系统计划任务\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monthly/ \t\t存放系统每个月需要执行的脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weekly/ \t\t存放系统每周需要执行的脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("daily/ \t\t存放系统每天需要执行的脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/cron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hourly/ \t\t存放系统每小时需要执行的脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("spool/cron \t\t这个目录用来存放各个用户自己设定的定时任务，普通用户没有权限直接访问\n")])])]),a("p",[a("img",{attrs:{src:n(1069),alt:"image-20231215155152978"}})]),t._v(" "),a("p",[t._v("计划任务的周期编写")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@rhel8 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/crontab")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("SHELL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/bin/bash\n默认的shell，告诉系统使用哪个shell\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/sbin:/bin:/usr/sbin:/usr/bin\n定义命令的路径\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MAILTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n结果以邮件的形式发送给root（不管是正确还是错误结果），如果MAILTO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("代表不会发邮件给任何人。\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For details see man 4 crontabs")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example of job definition:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .---------------- minute (0 - 59)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# | .------------- hour (0 - 23)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# | | .---------- day of month (1 - 31)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# | | | .------- month (1 - 12) OR jan,feb,mar,apr ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# | | | | .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# | | | | |")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * * * * * user-name command to be executed")]),t._v("\n前5个字段分别表示：\n\t分钟：0-59\n\t小时：0-23\n\t日期：1-31\n\t月份：1-12\n\t星期：0-7（0表示周日或者7表示周日）\n\n* \t每个单位的第一个\n,\t不连续时间\n-\t代办连续时间范围\n*/n\t每隔n个单位执行一次\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" * * * *\t\t每小时的第五分钟\n05 * * * *\t\t每小时的第五分钟\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" 08 * * *\t\t每天8点20分\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" * * *\t\t每天22点45分\n00 06 * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" *\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("月每天的6点\n\n03 01 * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\t\t每周日的1点03分\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t每周1的17点0分\n\n\n还可以用一些特殊符号：\n, \t\t表示分割，间隔\n- \t\t表示一个段\n/n \t\t表示每个n的单位执行一次\n\n*/5 * * * *\t\t每隔5分钟执行一次\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,15")]),t._v(" * *\t每月1号和15号的凌晨5点0分\n03 03,06 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-15 * *\t每隔月的 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("号到15号的 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("点03分和6点03分 执行任务\n\n礼拜1和礼拜3每隔2个小时去执行一个任务\n00 */2 * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,3")]),t._v("\n\n每个月的1号-15号，和25号的早上8:00到晚上6:00每隔2小时执行一个任务\n00 08-18/2 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-15,25 * *\n\n以下4行是rhel5里的配置；rhel6看不到，但是也生效\n红帽5在/etc/crontab文件下有，之后的都没有但生效\n01 * * * * \t\troot run-parts /etc/cron.hourly/\t每小时的第1分钟root执行目录里的脚本\n02 04 * * * \troot run-parts /etc/cron.daily/\t\t每天的4点2分\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" 04 * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" \troot run-parts /etc/cron.weekly/\t每周日4点22分\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" 04 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" * * \troot run-parts /etc/cron.monthly/\t每月1号4点42分\n\n注意：\nrun-parts：\ncrond用这个工具来执行某个目录下所有的可执行脚本，定时任务中的每小时/每天/每周/每月任务就是通过这个工具来触发的.\n")])])]),a("h3",{attrs:{id:"_1-、crond服务管理与访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-、crond服务管理与访问控制"}},[t._v("#")]),t._v(" 1）、crond服务管理与访问控制")]),t._v(" "),a("p",[t._v("crontab命令是需要crond服务支持的，crond服务同样是独立的服务")]),t._v(" "),a("p",[t._v("crontab命令和at命令类似，也是通过"),a("code",[t._v("/etc/cron.allow")]),t._v("和"),a("code",[t._v("/etc/cron.deny")]),t._v("文件来限制某些用户是否可以使用"),a("code",[t._v("crontab")]),t._v("命令的。\n而且原则也非常相似：")]),t._v(" "),a("ul",[a("li",[t._v("当系统中有"),a("code",[t._v("/etc/cron.allow")]),t._v("文件时，只有写入此文件的用户可以使用"),a("code",[t._v("crontab")]),t._v("命令，没有写入的用户不能使用"),a("code",[t._v("crontab")]),t._v("命令。\n同样如果有此文件，"),a("code",[t._v("/etc/cron.deny")]),t._v("文件会被忽略，"),a("code",[t._v("/etc/cron.allow")]),t._v("文件的优先级更高。")]),t._v(" "),a("li",[t._v("当系统中只有"),a("code",[t._v("/etc/cron.deny")]),t._v("文件时，则写入此文件的用户不能使用"),a("code",[t._v("crontab")]),t._v("命令，没有写入文件的用户可以使用"),a("code",[t._v("crontab")]),t._v("命令。")])]),t._v(" "),a("p",[t._v("这个规则基本和at的规则一直，同样"),a("code",[t._v("/etc/cron.allow")]),t._v("文件的优先级比"),a("code",[t._v("/etc/cron.deny")]),t._v("文件的优先级高，Linux中默认只有"),a("code",[t._v("/etc/cron.deny")]),t._v("文件。")]),t._v(" "),a("h3",{attrs:{id:"_2-、用户的crontab设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-、用户的crontab设置"}},[t._v("#")]),t._v(" 2）、用户的crontab设置")]),t._v(" "),a("p",[t._v("每个用户都可以实现自己的crontab定时任务，只要是使用这个用户身份执行“"),a("code",[t._v("crontab -e")]),t._v("”命令即可，当然这个用户不能加入"),a("code",[t._v("/etc/cron.deny")]),t._v("文件中。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab [选项]")]),t._v("\n选项：\n    -e：编辑crontab定时任务\n    -l：查询crontab任务\n    -r：删除当前用户所有的crontab任务，如果有多个任务，只想删除一个，可以所以用“crontab -e”\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" 用户名：修改或删除其他用户的crontab任务。只有root可用\n    \n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#crontab -e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入crontab编辑界面。会打开vim编辑你的工作。")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("例子1：让系统每隔5分钟，就向/tmp/test文件中写入一行“11”，验证一下系统定时任务是否会执行\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab -e")]),t._v("\n*/5 * * * * /bin/echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /tmp/test\n\n\n例子2：在系统在每周二的凌晨5点05分重启一次\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab -e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" /sbin/shutdown "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" now\n\n\n例子3：在每月的1号，10号，15号的凌晨3点30分都定时执行日志备份脚本autobak.sh\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab -e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,10")]),t._v(",15 * * /root/sh/autobak.sh\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab -l")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看root用户的crontab任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crontab -r")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除root用户所有的定时任务，如果只想删除某一个定时任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以“crontab -e”进入编辑模式手工删除")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-、crontab的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-、crontab的注意事项"}},[t._v("#")]),t._v(" 3）、crontab的注意事项")]),t._v(" "),a("p",[t._v("在书写crontab定时任务时，需要注意几个注意事项，这里我们再强调下：")]),t._v(" "),a("ul",[a("li",[t._v("六个选项都不能为空，必须填写。如果不确定使用“"),a("code",[t._v("*")]),t._v("”代表任意时间；")]),t._v(" "),a("li",[t._v("crontab定时任务，最小有效时间是分钟，最大时间范围是月。像2018年某时执行，3点30分30秒这样的时间都不能识别；")]),t._v(" "),a("li",[t._v("在定义时间时，日期和星期最好不要在一条定时任务中出现，因为它们都是以天作为单位，非常容易让管理员混乱；")]),t._v(" "),a("li",[t._v("在定时任务中，不管是直接写命令，还是在脚本中写命令，最好都是用绝对路径。有时相对路径的命令会报错。")])]),t._v(" "),a("h2",{attrs:{id:"系统的crontab设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统的crontab设置"}},[t._v("#")]),t._v(" 系统的crontab设置")]),t._v(" "),a("p",[t._v("“crontab -e”是每个用户执行的命令，也就是说不同的用户身份可以执行自己的定时任务。")]),t._v(" "),a("p",[t._v("可是有些定时任务需要系统执行，这时我们就需要编辑/etc/crontab这个配置文件了。")]),t._v(" "),a("p",[t._v("当然，并不是说写入/etc/crontab配置文件中的定时任务执行时，不需要用户身份，而是“crontab -e”命令定义定时任务时，默认用户身份是当前登录用户。")]),t._v(" "),a("p",[t._v("而修改/etc/crontab配置文件时，定时任务的执行着身份是可以手工指定的。")]),t._v(" "),a("p",[t._v("这样定时任务的执行会更加灵活，修改起来也更加方便。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("SHELL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/bin/bash\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/sbin:/bin:/usr/sbin:/usr/bin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MAILTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For details see man 4 crontabs")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example of job definition:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .---------------- minute (0 - 59)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# |  .------------- hour (0 - 23)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# |  |  .---------- day of month (1 - 31)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# |  |  |  |  |")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# *  *  *  *  * user-name  command to be executed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分 时 日 月  周 执行者身份  命令")]),t._v("\n")])])]),a("p",[t._v("在CentOS 6.x中，"),a("code",[t._v("/etc/crontab")]),t._v("这个文件也发生了变化，在CentOS 5.x中这个文件的内容大概是这个样子：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(1070),alt:"image-20240109114400900"}})]),t._v(" "),a("p",[t._v("在CentOS5.x版本中，/etc/crontab文件会使用run-parts脚本执行/etc/cron.{daily,weekly,monthly}目录中的所有文件。这个run-parts其实是一个shell脚本，保存在/usr/bin/run-parts，它的作用就是把其后面跟随的目录中的所有可执行文件依次执行。也就是说，如果我们想让某个脚本在每天都执行一次，可以不用手工去写定时任务，而只需要给这个脚本赋予执行权限，并把它放入/etc/cron.daily/目录中。这样这个脚本就会在每天的凌晨4点02分执行了。")]),t._v(" "),a("p",[t._v("可是在CentOS 6.x版本中，/etc/crontab文件中不再有相关的段落，那么是否run-ptars这种定时任务执行方法不可用了呢？我们看到/etc/crontab中有一句提示，让我们“man 4 crontabs”来查看帮助，那么我们就看看这个帮助吧！在这个帮助中，明确写明了“在旧版本的crontab配置文件中，是通过run-parts脚本来调用cron.{daily,weekly,monthly}目录，定时执行这些目录中的脚本。在当前系统中，为了避免cron和anacron之间产生冲突，只要anacron已经安装，就使用anacron来执行这些目录中的脚本。具体可以查看anacron（8）的帮助。”。对于anacron的用法，我们下一个小节来介绍。")]),t._v(" "),a("p",[t._v("其实对我们用户来讲，我们并不需要知道这个定时任务到底是由哪个程序调用的。我们需要知道的事情是如何使用系统的crontab设置。这个新老版本的CentOS没有区别，配置方法都有两种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一种方法就是我刚刚说过的，把你需要定时执行的工作写成脚本程序，并赋予执行权限，然后直接把这个脚本复制到/etc/cron.{daily,weekly,monthly}目录中的任意一个。比如我需要让某个脚本每周执行，那么就把这个脚本复制到/etc/cron.weekly/目中中。这样这个脚本就会每周执行一次，具体的执行时间要参考anacron的配置。")])]),t._v(" "),a("li",[a("p",[t._v("第二种方法就是修改/etc/crontab这个配置文件，自己加入自己的定时任务，不过需要注意指定脚本的执行者身份。例如：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:n(1071),alt:"image-20240109113400666"}})]),t._v(" "),a("p",[t._v("只要保存/etc/crontab文件，这个定时任务就可以执行了，当然要确定crond服务是运行的。")]),t._v(" "),a("p",[t._v("这两种方法都是可以使用的，具体看个人的习惯吧！不过要想修改/etc/crontab文件，当然我要是root用户才可以，普通不能修改，只能使用用户身份的crontab命令。")]),t._v(" "),a("h2",{attrs:{id:"anacron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anacron"}},[t._v("#")]),t._v(" anacron")]),t._v(" "),a("p",[t._v("anacron是用来干什么的呢？我们的Linux服务器如果不是24小时开机的，那么刚好在关机的时间段之内有系统定时任务（cron）需要执行，那么这些定时任务是不会执行的。也就是说，假设我们需要在凌晨5点05分执行系统的日志备份，但是我们的Linux服务器不是24小时开机的，在晚上需要关机，白天上班之后才会再次开机。这个定时任务的执行时间我们的服务器刚好没有开机，那么这个任务就不会执行了。anacron就是用来解决这个问题的。")]),t._v(" "),a("p",[t._v("anacron会使用一天，七天，一个月作为检测周期，用来判断是否有定时任务在关机之后没有执行，如果有这样的任务，anacron会在特定的时间重新执行这些定时任务。那么anacron是如何判断这些定时任务已经超过了执行时间呢？在系统的/var/spool/anacron/目录中存在cron.{daily,weekly,monthly}文件，这些文件中都保存着anacron上次执行时的时间。anacron会去读取这些文件中的时间，然后和当前时间做比较，若果两个时间的差值超过了anacron的指定时间差值（一般是1天，7天和一个月），就说明有定时任务漏掉了没有被执行，这时anacron会介入而执行这个漏掉的定时任务，从而保证在关机时没有被执行的定时任务不会被漏掉。")]),t._v(" "),a("p",[t._v("在CentOS 6.x中，我们使用cronie-anacron取代了vixie-cron软件包。而且在原先的CentOS版本中/etc/cron.{daily,weekly,monthly}这些目录中的定时任务会同时被cron和anacron调用，这样非常容易出现重复执行同一个定时任务的错误。在现在的CentOS6.x中 ，/etc/cron.{daily,weekly,monthly}目录中的定时任务程序只会被anacron调用，从而保证这些定时任务只会在每天、每周或每月被定时执行一次，而不会重复执行。这也是我们在上一个小节中介绍的CentOS 6.x的变化之一。")]),t._v(" "),a("p",[t._v("在CentOS 6.x中anacron还有一个变化，anacron不再是单独的服务，而变成了系统命令。也就是说我们不再可以使用“service anacron restart”命令来管理anacron服务了。而是需要使用anacron命令来管理anacron工作，具体命令如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(1072),alt:"image-20240109113816518"}})]),t._v(" "),a("p",[t._v("在我们当前的Linux中，其实不需要执行任何anacron命令，只需要配置好/etc/anacrontab文件，系统就会依赖这个文件中的设定来通过anacron执行定时任务。那么关键就是/etc/anacrontab文件的内容了，这个文件如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(1073),alt:"image-20240109113911526"}})]),t._v(" "),a("p",[t._v("这个文件中“RANDOM_DELAY”定义的是最大随机延迟，也就是说cron.daily任务如果超过1天没有执行，并不会马上执行，而是先延迟强制延迟时间之后，再延迟随机延迟时间之后再执行命令。“START_HOURS_RANGE”定义anacron的执行时间范围，anacron只会在这个时间范围之内执行。")]),t._v(" "),a("p",[t._v("我们用cron.daily工作来说明下/etc/anacrontab的执行过程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先读取/var/spool/anacron/cron.daily中的上一次anacron执行的时间；")])]),t._v(" "),a("li",[a("p",[t._v("和当前时间比较，如果两个时间的差值超过1天，就执行cron.daily工作；")])]),t._v(" "),a("li",[a("p",[t._v("执行这个工作只能在03:00-22:00之间；")])]),t._v(" "),a("li",[a("p",[t._v("执行工作时强制延迟时间为5分钟，再随机延迟0-45分钟时间；")])]),t._v(" "),a("li",[a("p",[t._v("使用nice命令指定默认优先级，使用run-parts脚本执行/etc/cron.daily目录中的所有可执行文件。")])])]),t._v(" "),a("p",[t._v("大家发现了吧，/etc/cron.{daily,weekly,monthly}中的脚本，在当前的Linux中是被anacron调用的，不再依靠cron服务。不过anacron不用设置多余的配置，我们只需要把需要定时执行的脚本放入/etc/cron.{daily,weekly,monthly}目录当中，就会每天、每周或每月执行，而且也不再需要启动anacron服务了。我们如果做修改的话，只用修改/etc/anacrontab配置文件即可。比如我更加习惯让定时任务在凌晨03:00-05:00执行，就可以如下修改：")]),t._v(" "),a("p",[a("img",{attrs:{src:n(1074),alt:"image-20240109114254512"}})]),t._v(" "),a("p",[t._v("这样我们所有放入/etc/cron.{daily,weekly,monthly}目录中的脚本都会在指定时间运行了，而且也不怕服务器万一关机的情况了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);