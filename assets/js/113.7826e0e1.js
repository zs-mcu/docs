(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1368:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_4-打印流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-打印流"}},[t._v("#")]),t._v(" 4. 打印流")]),t._v(" "),s("p",[s("img",{attrs:{src:a(596),alt:"image-20231211143929959"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(597),alt:"image-20231211144230925"}})]),t._v(" "),s("h2",{attrs:{id:"_4-1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-概述"}},[t._v("#")]),t._v(" 4.1 概述")]),t._v(" "),s("p",[t._v("平时我们在控制台打印输出，是调用"),s("code",[t._v("print")]),t._v("方法和"),s("code",[t._v("println")]),t._v("方法完成的，这两个方法都来自于"),s("code",[t._v("java.io.PrintStream")]),t._v("类，该类能够方便地打印各种数据类型的值，是一种便捷的输出方式。")]),t._v(" "),s("h2",{attrs:{id:"_4-2-printstream类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-printstream类"}},[t._v("#")]),t._v(" 4.2 PrintStream类")]),t._v(" "),s("h3",{attrs:{id:"构造方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[t._v("#")]),t._v(" 构造方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("public PrintStream(String fileName)")]),t._v("： 使用指定的文件名创建一个新的打印流。")])]),t._v(" "),s("p",[t._v("构造举例，代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintStream")]),t._v(" ps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ps.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n")])])]),s("h3",{attrs:{id:"改变打印流向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变打印流向"}},[t._v("#")]),t._v(" 改变打印流向")]),t._v(" "),s("p",[s("code",[t._v("System.out")]),t._v("就是"),s("code",[t._v("PrintStream")]),t._v('类型的，只不过它的流向是系统规定的，打印在控制台上。不过，既然是流对象，我们就可以玩一个"小把戏"，改变它的流向。')]),t._v(" "),s("p",[t._v("此打印流在虚拟机启动的时候，由虚拟机创建，默认指向控制台\n特殊的打印流，系统中的标准输出流，是不能关闭，在系统中是唯一的")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用系统的打印流,控制台直接输出97")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建打印流,指定文件的名称")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintStream")]),t._v(" ps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ps.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \t\n      \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置系统的打印流流向,输出到ps.txt")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用系统的打印流,ps.txt中输出97")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports},596:function(t,s,a){t.exports=a.p+"assets/img/image-20231211143929959.5d4fb134.png"},597:function(t,s,a){t.exports=a.p+"assets/img/image-20231211144230925.a55a355c.png"}}]);