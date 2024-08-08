(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1e3:function(t,s,a){t.exports=a.p+"assets/img/image-20231221144330415.f7780b21.png"},1405:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令-16-vim编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令-16-vim编辑器"}},[t._v("#")]),t._v(" 命令--16.vim编辑器")]),t._v(" "),s("ul",[s("li",[t._v("Linux平台下的"),s("strong",[t._v("文本编辑器：")]),t._v(" emacs、nano、gedit、"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("vi")]),t._v("、"),s("strong",[t._v("vim")])])],1)]),t._v(" "),s("p",[t._v("vi（visual editor）编辑器通常被简称为vi，它是Linux和Unix系统上最基本的文本编辑器，类似于Windows 系统下的记事本。学会它后，我们将在Linux 的世界里游刃有余。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("为什么要学习vim？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("所有的Unix like系统都会"),s("strong",[t._v("内置")]),t._v("vi文本编辑器，其他的文本编辑器则不一定会存在")])]),t._v(" "),s("li",[s("p",[t._v("很多软件的编辑接口都会主动调用vi")])]),t._v(" "),s("li",[s("p",[t._v("vim具有"),s("font",{attrs:{color:"red"}},[t._v("程序编辑")]),t._v("的能力，可以主动以字体颜色辨别语法的正确性，方便程序设计")],1)]),t._v(" "),s("li",[s("p",[t._v("程序简单，编辑速度快")])]),t._v(" "),s("li",[s("p",[t._v("vim是vi的升级版")])])])])]),t._v(" "),s("h2",{attrs:{id:"vim工作模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim工作模式"}},[t._v("#")]),t._v(" vim工作模式")]),t._v(" "),s("p",[t._v("vim工作在三种模式之下：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(998),alt:"image-20231221124344179"}})]),t._v(" "),s("p",[t._v("命令模式：是主要使用快捷键的模式，是我们后面学习的重点。命令模式想要进入输入模式，可以使用以下的方式：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(999),alt:"image-20231102110923623"}})]),t._v(" "),s("p",[t._v("输入模式：主要用于文本编辑，和记事本类似，输入数据就好。")]),t._v(" "),s("p",[t._v("末行模式（编辑模式）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":w\t\t\t\t保存不退出\n\t:w 新文件名\t 文件另存为\n:q\t\t\t\t不保存退出\n:wq\t\t\t\t保存退出\n:!\t\t\t\t强制\n\t:q!\t\t\t强制不保存退出，用于修改文件之后，不保存数据退出。\n\t:wq!\t\t强制保存退出，当文件的所有者或者root用户，对文件没有写权限的时候，强制写入数据使用\n:x\t\t\t\t在文件没有修改的情况下，表示直接退出（等价于:q），在文件修改的情况下等价于（:wq）\n")])])]),s("h2",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("问：命令行可以干什么？")]),t._v(" "),s("p",[t._v("答：可以进行一些基本的"),t._v("复制、删除、跳转、撤销、移动"),t._v("等操作")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("yy")]),t._v(" "),s("td",[t._v("复制光标所在行")]),t._v(" "),s("td",[t._v("3yy表示复制3行")])]),t._v(" "),s("tr",[s("td",[t._v("p(小写p)")]),t._v(" "),s("td",[t._v("光标所在行后面粘贴")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("P(大写P)")]),t._v(" "),s("td",[t._v("光标所在行前面粘贴")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("gg")]),t._v(" "),s("td",[t._v("光标快速跳到文件首行，并且定位到首字符")]),t._v(" "),s("td",[t._v("3gg表示快速跳到文件第3行行首字符")])]),t._v(" "),s("tr",[s("td",[t._v("G")]),t._v(" "),s("td",[t._v("光标快速跳到文件尾行，并且定位到首字符")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("home")]),t._v(" "),s("td",[t._v("跳转到行首")]),t._v(" "),s("td",[t._v("Shift+6 即 ^ 符号表示行首")])]),t._v(" "),s("tr",[s("td",[t._v("end")]),t._v(" "),s("td",[t._v("跳转到行尾")]),t._v(" "),s("td",[t._v("Shitf+4 即 $ 符号表示行尾")])]),t._v(" "),s("tr",[s("td",[t._v("dd")]),t._v(" "),s("td",[t._v("删除光标所在行")]),t._v(" "),s("td",[t._v("3dd表示删除3行（包括光标所在行")])]),t._v(" "),s("tr",[s("td",[t._v("d^")]),t._v(" "),s("td",[t._v("从光标位置删至行首，不包括光标位")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("d$")]),t._v(" "),s("td",[t._v("从光标位置删至行尾，包括光标位，与D作用相同")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("dG")]),t._v(" "),s("td",[t._v("删除光标所在行以及下面所有行")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("dgg")]),t._v(" "),s("td",[t._v("删除光标所在行以及上面所有行")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("x(小写)")]),t._v(" "),s("td",[t._v("删除光标所在字符后面一个字符，3x删除3个字符")]),t._v(" "),s("td",[t._v("类似于windows下的delete键")])]),t._v(" "),s("tr",[s("td",[t._v("X(大写)")]),t._v(" "),s("td",[t._v("删除光标所在字符前面一个字符，3X删除3个字符")]),t._v(" "),s("td",[t._v("类似windows下的backspace键")])]),t._v(" "),s("tr",[s("td",[t._v("u")]),t._v(" "),s("td",[t._v("撤销操作")]),t._v(" "),s("td",[t._v("ctrl+r 取消撤销")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"移动光标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动光标"}},[t._v("#")]),t._v(" 移动光标")]),t._v(" "),s("p",[t._v("1）上下左右移动光标")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("h\tj\tk\tl\n←\t↓\t↑\t→\n")])])]),s("p",[t._v("2）把光标移动到文件头或尾")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("gg\t文件头\nG\t文件尾\n")])])]),s("p",[t._v("3）移动到行首或行尾")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("^\t行首\n$\t行尾\n")])])]),s("p",[t._v("4）移动到指定行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":n\t到第n行\n")])])]),s("h3",{attrs:{id:"删除或剪切"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除或剪切"}},[t._v("#")]),t._v(" 删除或剪切")]),t._v(" "),s("p",[t._v("1）删除字母")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("x\t删除单个字母\nnx\t删除n个字母\n\n\nn是数字，如果打算从光标位置删除连续的10个字母，可以使用“10x”即可。\n删除字母并不符合使用习惯，我们更习惯在编辑模式中，用“Backspace”键删除字母。\n")])])]),s("p",[t._v("2）删除整行或剪切")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dd\t\t删除单行\nndd\t\t删除多行\n:n1,n2d\t删除指定范围的行\n\n删除整行或多行，这是比较常用的删除方法。\n这里的dd快捷键既是删除，也是剪切。\n删除内容放入了剪切板，如果不粘贴就是删除，如果粘贴就是剪切。粘贴方法如下：\n\np\t\t 粘贴到光标后\nP(大)\t粘贴到光标前\n\n\n\n:1,8d \t删掉文本的1到8行\n")])])]),s("p",[t._v("3）从光标所在行删除到文件尾")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dG\t从光标所在行删除到文件尾\n")])])]),s("h3",{attrs:{id:"复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[t._v("#")]),t._v(" 复制")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yy\t复制单行\nnyy\t复制多行\n\n复制之后的粘贴，依然可以使用p键或P（大）键\n")])])]),s("h3",{attrs:{id:"撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("u\t\t\t撤销\nctrl + r\t反撤销\n\n“u”键能一直撤销到文件打开时的状态，类似Windows下“ctrl+z”键的作用。\n“ctrl+r”能一直反撤销到最后一次操作状态，类似Windows下“ctrl+y”键的作用。\n")])])]),s("h3",{attrs:{id:"替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换"}},[t._v("#")]),t._v(" 替换")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("r\t替换光标所在处的字符\nR\t从光标所在处开始替换字符，按ESC结束\n\n“r”键替换单一字符，不用进入输入模式，实际使用时，比进入输入模式删除后再修改，要方便。\n")])])]),s("h3",{attrs:{id:"vim配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim配置文件"}},[t._v("#")]),t._v(" vim配置文件")]),t._v(" "),s("p",[t._v("这次末行模式参数设置，多数需要在vim中才能生效。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("设置参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v(":set nu")]),s("br"),s("code",[t._v(":set number")]),s("br"),s("code",[t._v(":set nonu")]),s("br")]),t._v(" "),s("td",[t._v("显示与取消行号。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":syntax on")]),s("br"),s("code",[t._v("syntax off")])]),t._v(" "),s("td",[t._v("是否依据语法显示相关的颜色帮助。"),s("br"),t._v("在Vim中修改相关的配置文件或Shell脚本文件时（如前面示例的脚本/etc/init.d/sshd），"),s("br"),t._v("默认会显示相应的颜色，用来帮助排错。"),s("br"),t._v("如果觉得颜色产生了干扰，则可以取消此设置")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":set hlsearch")]),s("br"),s("code",[t._v(":set nohlsearch")])]),t._v(" "),s("td",[t._v("设置是否将查找的字符串高亮显示。默认是set hlsearch高亮显示")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":set ruler")]),s("br"),s("code",[t._v(":set noruler")])]),t._v(" "),s("td",[t._v("设置是否显示右下角的状态栏。默认是set ruler显示")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":set showmode")]),s("br"),s("code",[t._v(":set noshowmode")])]),t._v(" "),s("td",[t._v("设置是否在左下角显示如”--INSERT--“之类的状态栏。默认是set showmode显示")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(":set list")]),s("br"),s("code",[t._v(":set nolist")])]),t._v(" "),s("td",[t._v("设置是否显示隐藏字符（Tab键用”"),s("code",[t._v("^I")]),t._v("“表示，回车键用”"),s("code",[t._v("$")]),t._v("“表示）。"),s("br"),t._v("默认是nolist显示。如果使用set list显示隐藏字符，类似”cat -A 文件名“。")])])])]),t._v(" "),s("p",[t._v("vim支持更多的设置参数，可以通过“:set all”进行查看。")]),t._v(" "),s("p",[t._v("大家会发现，这些设置参数都只是临时生效，一旦关闭文件再打开，又需要重新输入。如果想要永久生效，需要手工建立vim的配置文件“"),s("code",[t._v("~/.vimrc")]),t._v("”,把你需要的参数写入配置文件就永久生效了。")]),t._v(" "),s("p",[t._v("补充：Windows下回车符在Linux中是用“"),s("code",[t._v("^M$")]),t._v("”符。这样会导致Windows下编辑的程序脚本，无法在Linux中执行。这时可以通过命令“dos2unix”，把Windows格式转为Linux格式，当然反过来“unix2dos”命令就是把Linux格式转为Windows格式。这两个命令默认没有安装，需要手工安装才能使用。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("全局配置 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/vimrc\n单用户配置 ~"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vimrc\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@xiaoshaozi ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim ~/.vimrc")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" nu\n \n\n永久设置行号\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set number"')]),t._v(" >> "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc/vimrc\n")])])]),s("h3",{attrs:{id:"查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找"}},[t._v("#")]),t._v(" 查找")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/查找内容\t从光标行向上查找\n?查找内容\t从光标行向下搜索\nn\t\t\t上一个\nN\t\t\t下一个\n\n搜索摸索\n:/root n往下匹配;N往上匹配\n")])])]),s("h3",{attrs:{id:"替换-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换-2"}},[t._v("#")]),t._v(" 替换")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10s/old/new/g\t替换1到10行的所有old为new\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/old/new/g\t\t替换整个文件的old为new\n\n\n替换模式\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/root/ROOT/ 全文搜索"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("替换每一行匹配到的第一个关键字\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/root/ROOT/g 全文搜索"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("替换每一行所有匹配的关键字\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/root/ROOT/"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gc")]),t._v(" 交互式替换\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sbin\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nologin/\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bash/ \\转义符\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#/sbin/nologin#/bin/bash#g 更换分隔符")]),t._v("\n:7s/shutdown/SHUTDOWN/g 只替换第7行的内容\n")])])]),s("p",[t._v("替换字符串，(注释"),s("code",[t._v("#")]),t._v(")前十行")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10s/^"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#/g\t注释1到10行")]),t._v("\n:1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10s/^"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#//g\t取消注释")]),t._v("\n")])])]),s("p",[t._v("替换字符串，（注释"),s("code",[t._v("//")]),t._v("）前十行")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10s/^"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\t\t注释1到10行\n:1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10s/^\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\t\t取消注释\n")])])]),s("h2",{attrs:{id:"vim其他功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim其他功能"}},[t._v("#")]),t._v(" vim其他功能")]),t._v(" "),s("h3",{attrs:{id:"在vim中导入其他文件内容或命令结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vim中导入其他文件内容或命令结果"}},[t._v("#")]),t._v(" 在vim中导入其他文件内容或命令结果")]),t._v(" "),s("h4",{attrs:{id:"导入其他文件内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入其他文件内容"}},[t._v("#")]),t._v(" 导入其他文件内容")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":r 文件名\t\t把文件内容导入光标位置\n\n:r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt \t在光标所在行下面读取"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt文件内容\n:3r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt \t在当前文本的第3行后读取"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt文件\n")])])]),s("p",[t._v("可以把其他文件的内容导入到光标所在位置")]),t._v(" "),s("h4",{attrs:{id:"保存内容到文件内"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存内容到文件内"}},[t._v("#")]),t._v(" 保存内容到文件内")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("地址定位\n:1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("5 w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保存前5行内容到/tmp/5.txt")]),t._v("\n")])])]),s("h4",{attrs:{id:"在vim中执行系统命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vim中执行系统命令"}},[t._v("#")]),t._v(" 在vim中执行系统命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":!命令\t\t在vim中执行系统命令\n")])])]),s("p",[t._v("这里只是在vim中执行系统命令，但并不把系统命令的结果写入到文件中。主要用于在文件编辑中，查看系统信息，如时间。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":n! command 用命令的执行结果替换第n行内容\n:nr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("command 在第n行下面读取命令所执行的结果\n")])])]),s("h3",{attrs:{id:"导入命令结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入命令结果"}},[t._v("#")]),t._v(" 导入命令结果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":r !命令\t\t在vim中执行系统命令，并吧命令结果导入光标所在行\n")])])]),s("p",[t._v("在vim中执行系统命令，并吧命令结果导入光标所在行。")]),t._v(" "),s("h3",{attrs:{id:"设定快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设定快捷键"}},[t._v("#")]),t._v(" 设定快捷键")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":map 快捷键 快捷键执行的命令\t\t自定义快捷键\n")])])]),s("p",[t._v("vim允许自定义快捷键，常用的自定义快捷键如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":map ^P I#<ESC>\t\t按”ctrl+p“时，在行首加入注释\n:map ^B ^x\t\t\t按”ctrl+b“时，删除行首第一个字母（删除注释）\n")])])]),s("p",[t._v("注意："),s("code",[t._v("^P")]),t._v("快捷键不能手工输入，需要执行"),s("code",[t._v("ctrl+V+P")]),t._v("来定义，或"),s("code",[t._v("ctrl+V")]),t._v(",然后"),s("code",[t._v("ctrl+P")]),t._v("。"),s("code",[t._v("^B")]),t._v("快捷键也一样")]),t._v(" "),s("h3",{attrs:{id:"字符替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符替换"}},[t._v("#")]),t._v(" 字符替换")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":ab 源字符 替换为字符\t\t字符替换\n")])])]),s("p",[t._v("在vim编辑中，有时候需要频繁输入某一个长字符串（比如邮箱），这时使用字符串替换，能增加输入效率，例如：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(":ab mymail shenchao@163"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com \t当碰到“mymail”时，转变为邮箱\n")])])]),s("p",[t._v("注意：“源字符”不应设置的太短，否则有可能影响输入。")]),t._v(" "),s("h3",{attrs:{id:"多文件打开"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多文件打开"}},[t._v("#")]),t._v(" 多文件打开")]),t._v(" "),s("p",[t._v("在vim中可以同时打开两个文件，只要执行如下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@xiaoshaozi ~]# vim -o abc bcd\n[root@xiaoshaozi ~]# vim -O abc bcd\n\n#-o\t\t小写o会上下分屏打开两个文件\n#-O\t\t大写O会左右分屏打开两个文件\n\n切换窗口\n\t-o(小)\tctrl+w  上下键\n\t-O(大)\tctrl+w  左右键\n")])])]),s("p",[t._v("这样可以同时打开两个文件，方便操作。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1e3),alt:"image-20231221144330415"}})]),t._v(" "),s("h3",{attrs:{id:"vim打开文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim打开文件"}},[t._v("#")]),t._v(" vim打开文件")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("vim 文件名\t\t\t \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认会进入命令行模式")]),t._v("\nvim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n 文件名\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开指定的文件，并且将光标移动到指定行")]),t._v("\nvim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("关键字 文件名\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开指定的文件，并且高亮显示关键词")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm -rf /tmp/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp /etc/passwd /tmp/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /tmp/passwd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim +5 /tmp/passwd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim +/shutdown /tmp/passwd")]),t._v("\n")])])]),s("h3",{attrs:{id:"取消高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消高亮"}},[t._v("#")]),t._v(" 取消高亮")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("取消高亮\n:noh （no highlight）\n")])])]),s("h3",{attrs:{id:"多窗口编辑问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多窗口编辑问题"}},[t._v("#")]),t._v(" 多窗口编辑问题")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("当两个终端同时打开或者意外结束文件时，会产生一个.swap文件 （交换文件）")])],1),t._v(" "),s("h4",{attrs:{id:"举例说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例说明"}},[t._v("#")]),t._v(" 举例说明：")]),t._v(" "),s("p",[t._v("你在两个终端同时打开/tmp/passwd文件，会产生/tmp/.passwd.swp。这时，有六个按钮可以使用：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("O"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read-Only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\t打开成只读文件。\nE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\t\t 用正常方式打开要编辑的文件，并不会载入暂存文件的内容。这很容易出现两个用户相互改变对方的文件的问题。\nR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ecover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\t加载暂存文件的内容。\nD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\t如果你确定这个暂存文件是没有用的，则可以删除。\nQ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\t\t不进行任何操作，回到命令行。\nA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\t忽略这个编辑行为，和Q类似。\n\n需要注意的是：\n这个暂存文件不会因为你结束vim后自动删除，必须要手动删除。否则每次打开对应的文件时都会出现这样的提示。\n")])])]),s("p",[t._v("使用"),s("code",[t._v("ctrl + z")]),t._v("接收当前终端vim编辑产生零时文件")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("fg")]),t._v("命令重新进入继续编辑")]),t._v(" "),s("h2",{attrs:{id:"可视化模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可视化模式"}},[t._v("#")]),t._v(" 可视化模式")]),t._v(" "),s("p",[t._v("按键：ctrl + v（可视块）或V（可视行），然后按下↑ ↓ ← →方向键来选中需要")]),t._v(" "),s("p",[t._v("复制的区块，按下y 键进行复制（不要按下yy），最后按下p 键粘贴")]),t._v(" "),s("p",[t._v("退出可视模式按下Esc")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速注释")]),t._v("\nctrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" v\n选中区块\nI\n输入文字\nesc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速删除")]),t._v("\nctrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" v\n选中区块\nd\n")])])]),s("h2",{attrs:{id:"高频命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高频命令"}},[t._v("#")]),t._v(" 高频命令")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("命令行模式：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制一行")]),t._v("\nyyp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除行")]),t._v("\ndd\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤回")]),t._v("\nu\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消撤回")]),t._v("\nctrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件末尾")]),t._v("\nG\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件首位")]),t._v("\ngg\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 行首")]),t._v("\n^\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 行末")]),t._v("\n$\n\n\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂起shell")]),t._v("\nCtrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" z  \nfg重新进入vim\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速注释")]),t._v("\nctrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" v\n选中区块\nI\n输入文字\nesc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速删除")]),t._v("\nctrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" v\n选中区块\nd\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择复制")]),t._v("\nv\n选中区\ny\np\n\n\n底行模式：\n临时设置行号\n:"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" number 或 :"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" nu\n\n\n搜索摸索\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("root n往下匹配"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("N往上匹配\n:"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s/root/ROOT/"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gc")]),t._v(" 交互式替换\n取消高亮\n:noh （no highlight）\n\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports},998:function(t,s,a){t.exports=a.p+"assets/img/image-20231221124344179.26159b8c.png"},999:function(t,s,a){t.exports=a.p+"assets/img/image-20231102110923623.a695ccd7.png"}}]);