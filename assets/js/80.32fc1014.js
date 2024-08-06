(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1265:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-工具包-commons-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-工具包-commons-io"}},[t._v("#")]),t._v(" 6. 工具包（Commons-io）")]),t._v(" "),s("p",[s("img",{attrs:{src:a(560),alt:"image-20231211152601172"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(561),alt:"image-20231211152726445"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(562),alt:"image-20231211152753350"}})]),t._v(" "),s("p",[t._v("介绍：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Commons是apache开源基金组织提供的工具包，里面有很多帮助我们提高开发效率的API\n")])])]),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("StringUtils   字符串工具类\n\nNumberUtils   数字工具类 \n\nArrayUtils   数组工具类  \n\nRandomUtils   随机数工具类\n\nDateUtils   日期工具类 \n\nStopWatch   秒表工具类 \n\nClassUtils   反射工具类  \n\nSystemUtils   系统工具类  \n\nMapUtils   集合工具类\n\nBeanutils   bean工具类\n\nCommons-io io的工具类\n\n等等.....\n")])])]),s("p",[t._v("其中：Commons-io是apache开源基金组织提供的一组有关IO操作的开源工具包。")]),t._v(" "),s("p",[t._v("作用：提高IO流的开发效率。")]),t._v(" "),s("p",[t._v("使用方式：")]),t._v(" "),s("p",[t._v("1，新建lib文件夹")]),t._v(" "),s("p",[t._v("2，把第三方jar包粘贴到文件夹中")]),t._v(" "),s("p",[t._v("3，右键点击add as a library")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonsIODemo1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n          FileUtils类\n                static void copyFile(File srcFile, File destFile)                   复制文件\n                static void copyDirectory(File srcDir, File destDir)                复制文件夹\n                static void copyDirectoryToDirectory(File srcDir, File destDir)     复制文件夹\n                static void deleteDirectory(File directory)                         删除文件夹\n                static void cleanDirectory(File directory)                          清空文件夹\n                static String readFileToString(File file, Charset encoding)         读取文件中的数据变成成字符串\n                static void write(File file, CharSequence data, String encoding)    写出数据\n\n            IOUtils类\n                public static int copy(InputStream input, OutputStream output)      复制文件\n                public static int copyLarge(Reader input, Writer output)            复制大文件\n                public static String readLines(Reader input)                        读取数据\n                public static void write(String data, OutputStream output)          写出数据\n         */")]),t._v("\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* File src = new File("myio\\\\a.txt");\n        File dest = new File("myio\\\\copy.txt");\n        FileUtils.copyFile(src,dest);*/')]),t._v("\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*File src = new File("D:\\\\aaa");\n        File dest = new File("D:\\\\bbb");\n        FileUtils.copyDirectoryToDirectory(src,dest);*/')]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*File src = new File("D:\\\\bbb");\n        FileUtils.cleanDirectory(src);*/')]),t._v("\n\n\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h1",{attrs:{id:"_7-工具包-hutool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-工具包-hutool"}},[t._v("#")]),t._v(" 7. 工具包（hutool）")]),t._v(" "),s("p",[t._v("介绍：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Commons是国人开发的开源工具包，里面有很多帮助我们提高开发效率的API\n")])])]),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("DateUtil  日期时间工具类 \n\nTimeInterval  计时器工具类 \n\nStrUtil  字符串工具类\n\nHexUtil   16进制工具类\n\nHashUtil   Hash算法类\n\nObjectUtil  对象工具类\n\nReflectUtil   反射工具类\n\nTypeUtil  泛型类型工具类\n\nPageUtil  分页工具类\n\nNumberUtil  数字工具类\n")])])]),s("p",[t._v("使用方式：")]),t._v(" "),s("p",[t._v("1，新建lib文件夹")]),t._v(" "),s("p",[t._v("2，把第三方jar包粘贴到文件夹中")]),t._v(" "),s("p",[t._v("3，右键点击add as a library")]),t._v(" "),s("p",[t._v("代码示例：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n        FileUtil类:\n                file：根据参数创建一个file对象\n                touch：根据参数创建文件\n\n                writeLines：把集合中的数据写出到文件中，覆盖模式。\n                appendLines：把集合中的数据写出到文件中，续写模式。\n                readLines：指定字符编码，把文件中的数据，读到集合中。\n                readUtf8Lines：按照UTF-8的形式，把文件中的数据，读到集合中\n\n                copy：拷贝文件或者文件夹\n    */")]),t._v("\n\n\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* File file1 = FileUtil.file("D:\\\\", "aaa", "bbb", "a.txt");\n        System.out.println(file1);//D:\\aaa\\bbb\\a.txt\n\n        File touch = FileUtil.touch(file1);\n        System.out.println(touch);\n\n\n        ArrayList<String> list = new ArrayList<>();\n        list.add("aaa");\n        list.add("aaa");\n        list.add("aaa");\n\n        File file2 = FileUtil.writeLines(list, "D:\\\\a.txt", "UTF-8");\n        System.out.println(file2);*/')]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*  ArrayList<String> list = new ArrayList<>();\n        list.add("aaa");\n        list.add("aaa");\n        list.add("aaa");\n        File file3 = FileUtil.appendLines(list, "D:\\\\a.txt", "UTF-8");\n        System.out.println(file3);*/')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:\\\\a.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports},560:function(t,s,a){t.exports=a.p+"assets/img/image-20231211152601172.d33bbdc8.png"},561:function(t,s,a){t.exports=a.p+"assets/img/image-20231211152726445.b7e3629d.png"},562:function(t,s,a){t.exports=a.p+"assets/img/image-20231211152753350.dbf1614e.png"}}]);