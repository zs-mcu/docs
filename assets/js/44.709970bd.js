(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1340:function(A,t,v){"use strict";v.r(t);var a=v(4),r=Object(a.a)({},(function(){var A=this,t=A._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("h1",{attrs:{id:"精确问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精确问题"}},[A._v("#")]),A._v(" 精确问题")]),A._v(" "),t("h2",{attrs:{id:"小数运算不精确"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小数运算不精确"}},[A._v("#")]),A._v(" 小数运算不精确")]),A._v(" "),t("p",[A._v("在做小数运算的时候发现有时精确，有时不精确。")]),A._v(" "),t("p",[t("img",{attrs:{src:v(428),alt:"image-20240814234449384"}})]),A._v(" "),t("p",[A._v("所有计算机语言都一样")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("如果以十进制方式推断小数运算规则是这样的\n如果运算规则一致，小数就表示成这样：明显不是\n计算机希望运算规则保持一致。那么十进制小数转二进制必定会不丢失精度\n\n3\t--\x3e 11\n3.3\t--\x3e 11.11\n3.3 + 3.3 --\x3e 11.11 + 11.11\n6.6\t\t  --\x3e 111.10  ==> 7.1\n")])])]),t("p",[A._v("十进制")]),A._v(" "),t("p",[A._v("$314 = 3 \\times 10^2 + 1 \\times 10^1 + 4 \\times 10^0$")]),A._v(" "),t("p",[A._v("$3.14 = 3 \\times 10^0 + 1 \\times 10^{-1} + 4 \\times 10^{-2}$")]),A._v(" "),t("p",[A._v("二进制")]),A._v(" "),t("p",[A._v("$101 = 1 \\times 2^2 + 0 \\times 2^1 +  1 \\times 2^0 = 5$")]),A._v(" "),t("p",[A._v("$1.101 = 1 \\times 2^0 + 1 \\times 2^{-1} + 0 \\times 2^{-2} + 1 \\times 2^{-3} = 1.625$")]),A._v(" "),t("p",[t("img",{attrs:{src:v(429),alt:"image-20240815193549701"}})]),A._v(" "),t("p",[A._v("写成有限位格式的二进制小数转十进制末尾一定是5")]),A._v(" "),t("h2",{attrs:{id:"tofix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tofix"}},[A._v("#")]),A._v(" toFix")]),A._v(" "),t("p",[A._v("toFix引发的思考")]),A._v(" "),t("p",[t("img",{attrs:{src:v(430),alt:"image-20240815201236094"}})]),A._v(" "),t("p",[A._v("小数不精确有三点")]),A._v(" "),t("ul",[t("li",[A._v("存储")]),A._v(" "),t("li",[A._v("运算")]),A._v(" "),t("li",[A._v("显示")])]),A._v(" "),t("p",[t("img",{attrs:{src:v(431),alt:"image-20240815201523898"}})]),A._v(" "),t("p",[t("img",{attrs:{src:v(432),alt:"image-20240815201619508"}})]),A._v(" "),t("p",[A._v("以上现象：")]),A._v(" "),t("ul",[t("li",[A._v("数据在存储浮点数时本身就不精确")]),A._v(" "),t("li",[A._v("为何显示是精确的，可以任务是一个近似处理。\n好比两个非常相近的浮点值会被认为是同一个数据一样")]),A._v(" "),t("li",[A._v("同理可以认为两个不精确的数据相加如果得到一个误差很小的值时会被近似处理")])]),A._v(" "),t("p",[t("a",{attrs:{href:"https://ecma-international.org/publications-and-standards/standards/ecma-262/",target:"_blank",rel:"noopener noreferrer"}},[A._v("ES262官方文档"),t("OutboundLink")],1)]),A._v(" "),t("p",[t("img",{attrs:{src:v(433),alt:"image-20240815202855621"}})]),A._v(" "),t("h2",{attrs:{id:"decimal-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decimal-js"}},[A._v("#")]),A._v(" Decimal.js")]),A._v(" "),t("p",[A._v("https://github.com/MikeMcl/decimal.js")]),A._v(" "),t("p",[t("img",{attrs:{src:v(434),alt:"image-20240815203417553"}})])])}),[],!1,null,null,null);t.default=r.exports},428:function(A,t){A.exports="data:image/png;base64,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"},429:function(A,t,v){A.exports=v.p+"assets/img/image-20240815193549701.f58bffe9.png"},430:function(A,t){A.exports="data:image/png;base64,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"},431:function(A,t,v){A.exports=v.p+"assets/img/image-20240815201523898.e8aa56e3.png"},432:function(A,t){A.exports="data:image/png;base64,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"},433:function(A,t,v){A.exports=v.p+"assets/img/image-20240815202855621.bf7e340f.png"},434:function(A,t,v){A.exports=v.p+"assets/img/image-20240815203417553.e425f255.png"}}]);