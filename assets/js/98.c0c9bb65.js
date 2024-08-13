(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1460:function(t,v,_){"use strict";_.r(v);var a=_(4),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"命令-15-echo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令-15-echo"}},[t._v("#")]),t._v(" 命令--15.echo")]),t._v(" "),v("p",[v("font",{attrs:{color:"red"}},[t._v("echo会将输入的字符串送往标准输出")]),t._v("，并在最后加上换行符。 可以理解为打印字符串。")],1),t._v(" "),v("div",{staticClass:"language-powershell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-powershell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo [选项] [输出内容]")]),t._v("\n\n常见选项：\n    "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n ：不输出最后的换行符“\\n”（就是内容输出后不换行）\n    "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e：解释转义字符（字符串中出现\\n、\\t等特殊字符，则特别加以处理，而不会将它当成一般文字输出）\n")])])]),v("p",[t._v("举例说明：")]),t._v(" "),v("div",{staticClass:"language-powershell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-powershell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo hello world 打印hello world")]),t._v("\nhello world\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo aaaa 打印aaaa")]),t._v("\naaaa\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo hello > file1 将hello重定向到file1文件中")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat file1")]),t._v("\nhello\n\n\n总结：\n1"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v("表示打印字符串，默认将字符串送往标准输出；默认会打印一个换行符\n2"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v("可以结合>或者>>符号来使用，进行文件的创建或内容追加。\n\n\n常见控制字符：\n\\t 表示制表符\n\\n 表示换行符\n\\r 表示回车\n\n\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo -e 'date\\nuuu' > 1.sh //-e表示将\\n解释为换行符")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat 1.sh")]),t._v("\ndate\nuuu\n\n\nhelp "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v("\n")])])]),v("blockquote",[v("p",[t._v("-e 参数说明")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("控制字符")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("\\\\")])]),t._v(" "),v("td",[t._v("输出"),v("code",[t._v("\\")]),t._v("本身")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\a")])]),t._v(" "),v("td",[t._v("输出警告音")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\b")])]),t._v(" "),v("td",[t._v("退格键，也就是向左删除")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\c")])]),t._v(" "),v("td",[t._v("取消输出行末的换行符。和“-n”选项一致")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\e")])]),t._v(" "),v("td",[t._v("ESCAPE键")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\f")])]),t._v(" "),v("td",[t._v("换页符")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\n")])]),t._v(" "),v("td",[t._v("换行符")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\r")])]),t._v(" "),v("td",[t._v("回车键")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\t")])]),t._v(" "),v("td",[t._v("制表符，也就是Tab键")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\v")])]),t._v(" "),v("td",[t._v("垂直制表符")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\0nnn")])]),t._v(" "),v("td",[t._v("按照八进制ASCII码表输出字符。其中0为数字零，nnn是三位八进制数")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\xhh")])]),t._v(" "),v("td",[t._v("按照十六进制ASCII码表输出字符。其中hh是两位十六进制数")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("更多示例")]),t._v(" "),v("div",{staticClass:"language-powershell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-powershell"}},[v("code",[t._v("这个输出会输出\\，同时会在系统音响中输出一声提示音\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo -e "\\\\ \\a"')]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\b"')]),t._v("删除，所以输出时只有"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ac")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo -e "ab\\bc"')]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ac")]),t._v("\n\n我们加入了制表符“\\t”和换行符“\\n”"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("所以会按照格式输出\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo -e "a\\tb\\tc\\nd\\te\\tf"')]),t._v("\na       b       c\nd       e       f\n\n还是会输出上面的内容，不过是按照八进制ASCII码输出的。\n也就是说141这个八进制，在ASCII码中代表小写的“a”，其他的以此类推\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo -e "\\0141\\t\\0142\\t\\0143\\n\\0144\\t\\0145\\t\\0146"')]),t._v("\na       b       c\nd       e       f\n\n如果按照十六进制ASCII码也同样可以输出\n"),v("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo -e "\\x61\\t\\x62\\t\\x63\\n\\x64\\t\\x65\\t\\x66"')]),t._v("\na       b       c\nd       e       f\n\n")])])]),v("p",[t._v("echo命令还可以进行一些比较有意思的东西，比如：")]),t._v(" "),v("p",[v("img",{attrs:{src:_(981),alt:"image-20231220141202133"}})]),t._v(" "),v("div",{staticClass:"language-powershell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-powershell"}},[v("code",[t._v("这条命令会把abcd按照红色输出。\n解释下这个命令\n\\e"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1 \t是标准格式，代表颜色输出开始，\n\\e"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0m\t代表颜色输出结束，\n31m\t\t定义字体颜色是红色\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v("\n能够识别的颜色如下：\n30m=黑色，\n31m=红色，\n32m=绿色，\n33m=黄色，\n34m=蓝色，\n35m=洋红，\n36m=青色，\n37m=白色。\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v("\n可以使用的背景颜色如下：\n40m=黑色，\n41m=红色，\n42m=绿色，\n43m=黄色，\n44m=蓝色，\n45m=洋红，\n46m=青色，\n47m=白色。\n")])])])]),t._v(" "),v("h1",{attrs:{id:"ascii-控制字符-033"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ascii-控制字符-033"}},[t._v("#")]),t._v(' ASCII 控制字符 - "\\033"')]),t._v(" "),v("p",[t._v("ASCII控制字符的编号范围是0-31和127（0x00-0x1F和0x7F），共33个字符。")]),t._v(" "),v("p",[t._v("输出到控制台时，可以利用控制字符来控制输出文本的显示效果。")]),t._v(" "),v("p",[t._v('控制字符可以用8进制或16进制表示，比如："\\033", "\\0x1b", "\\x1b"均表示同一个控制字符，含义是ESC')]),t._v(" "),v("p",[t._v("ESC后面跟一个格式字符串，用来设置颜色或控制光标")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("格式")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("\\033[0m")]),t._v(" "),v("td",[t._v("关闭所有属性")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[1m")]),t._v(" "),v("td",[t._v("设置高亮度")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[4m")]),t._v(" "),v("td",[t._v("下划线")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[5m")]),t._v(" "),v("td",[t._v("闪烁")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[7m")]),t._v(" "),v("td",[t._v("反显")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[8m")]),t._v(" "),v("td",[t._v("消隐")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[30~37m")]),t._v(" "),v("td",[t._v("设置前景色")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[40~47;m")]),t._v(" "),v("td",[t._v("设置背景色")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[nA")]),t._v(" "),v("td",[t._v("光标上移n行")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[nB")]),t._v(" "),v("td",[t._v("光标下移n行")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[nC")]),t._v(" "),v("td",[t._v("光标右移n行")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[nD")]),t._v(" "),v("td",[t._v("光标左移n行")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[y;xH")]),t._v(" "),v("td",[t._v("设置光标位置")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[2J")]),t._v(" "),v("td",[t._v("清屏")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[K")]),t._v(" "),v("td",[t._v("清除从光标到行尾的内容")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[s")]),t._v(" "),v("td",[t._v("保存光标位置")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[u")]),t._v(" "),v("td",[t._v("恢复光标位置")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[?25l")]),t._v(" "),v("td",[t._v("隐藏光标")])]),t._v(" "),v("tr",[v("td",[t._v("\\033[?25h")]),t._v(" "),v("td",[t._v("显示光标")])])])]),t._v(" "),v("h2",{attrs:{id:"前景色和背景色对应的数字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前景色和背景色对应的数字"}},[t._v("#")]),t._v(" 前景色和背景色对应的数字")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("颜色")]),t._v(" "),v("th",[t._v("背景色")]),t._v(" "),v("th",[t._v("背景色加亮")]),t._v(" "),v("th",[t._v("前景色")]),t._v(" "),v("th",[t._v("前景色加亮")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("黑")]),t._v(" "),v("td",[t._v("40")]),t._v(" "),v("td",[t._v("100")]),t._v(" "),v("td",[t._v("30")]),t._v(" "),v("td",[t._v("90")])]),t._v(" "),v("tr",[v("td",[t._v("红")]),t._v(" "),v("td",[t._v("41")]),t._v(" "),v("td",[t._v("101")]),t._v(" "),v("td",[t._v("31")]),t._v(" "),v("td",[t._v("91")])]),t._v(" "),v("tr",[v("td",[t._v("绿")]),t._v(" "),v("td",[t._v("42")]),t._v(" "),v("td",[t._v("102")]),t._v(" "),v("td",[t._v("32")]),t._v(" "),v("td",[t._v("92")])]),t._v(" "),v("tr",[v("td",[t._v("黄")]),t._v(" "),v("td",[t._v("43")]),t._v(" "),v("td",[t._v("103")]),t._v(" "),v("td",[t._v("33")]),t._v(" "),v("td",[t._v("93")])]),t._v(" "),v("tr",[v("td",[t._v("蓝")]),t._v(" "),v("td",[t._v("44")]),t._v(" "),v("td",[t._v("104")]),t._v(" "),v("td",[t._v("34")]),t._v(" "),v("td",[t._v("94")])]),t._v(" "),v("tr",[v("td",[t._v("紫")]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("105")]),t._v(" "),v("td",[t._v("35")]),t._v(" "),v("td",[t._v("95")])]),t._v(" "),v("tr",[v("td",[t._v("靛蓝")]),t._v(" "),v("td",[t._v("46")]),t._v(" "),v("td",[t._v("106")]),t._v(" "),v("td",[t._v("36")]),t._v(" "),v("td",[t._v("96")])]),t._v(" "),v("tr",[v("td",[t._v("白")]),t._v(" "),v("td",[t._v("47")]),t._v(" "),v("td",[t._v("107")]),t._v(" "),v("td",[t._v("37")]),t._v(" "),v("td",[t._v("97")])])])]),t._v(" "),v("h2",{attrs:{id:"使用echo命令进行测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用echo命令进行测试"}},[t._v("#")]),t._v(" 使用echo命令进行测试")]),t._v(" "),v("p",[t._v("可以使用echo命令对格式字符串进行测试")]),t._v(" "),v("p",[t._v("例如:")]),t._v(" "),v("p",[v("code",[t._v('echo -e "\\033[41;36m 一段文字 \\033[0m"')])]),t._v(" "),v("p",[t._v("这里先把控制台的背景色设置为红色（41），文字的颜色设置为靛蓝色（36），打印一段文字后，关闭了所有设置（还原到默认状态下）")]),t._v(" "),v("p",[v("img",{attrs:{src:_(982),alt:"output"}})]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("测试不同的前景色")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(983),alt:"test-foregroud-color"}})])])}),[],!1,null,null,null);v.default=s.exports},981:function(t,v,_){t.exports=_.p+"assets/img/image-20231220141202133.3c2e404e.png"},982:function(t,v,_){t.exports=_.p+"assets/img/932498-20220728160926256-450342873.2e4b04d6.png"},983:function(t,v,_){t.exports=_.p+"assets/img/932498-20220728113442106-96801990.85a41971.png"}}]);