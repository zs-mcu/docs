(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1425:function(e,t,n){"use strict";n.r(t);var a=n(4),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"开通百度统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开通百度统计"}},[e._v("#")]),e._v(" 开通百度统计")]),e._v(" "),t("p",[e._v("我是使用"),t("a",{attrs:{href:"https://tongji.baidu.com/web/welcome/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度统计"),t("OutboundLink")],1),e._v("来统计浏览量的，首先要注册账号，如果有了也可以直接登陆。我用的账号的普通的百度账号，而不是营销账号。")]),e._v(" "),t("p",[e._v("登陆之后就能看到如下界面，并且点击使用设置："),t("br"),e._v(" "),t("img",{attrs:{src:n(765),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("点击之后进入设置页面，可以新建网站："),t("br"),e._v(" "),t("img",{attrs:{src:n(766),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("然后填入信息："),t("br"),e._v(" "),t("img",{attrs:{src:n(767),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("确定之后就能看到百度给的脚本了："),t("br"),e._v(" "),t("img",{attrs:{src:n(768),alt:"请添加图片描述"}})]),e._v(" "),t("h3",{attrs:{id:"配置代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置代码"}},[e._v("#")]),e._v(" 配置代码")]),e._v(" "),t("p",[e._v("按照他的教程，把脚本添加到我们的所有页面里面。由于使用vuepress构建后的是静态页面，切换页面也不会触发请求，所以我们需要在进去网站的时候就把这段脚本加上，而且在切换页面的时候也需要触发统计。")]),e._v(" "),t("p",[e._v("现在先把代码加到我们的页面中："),t("br"),e._v(" "),t("img",{attrs:{src:n(769),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("接下来添加 config 同级文件 enhanceApp.js，添加如下代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export default ({ router }) => {\n  // 路由切换事件处理\n  router.beforeEach((to, from, next) => {\n    //触发百度的pv统计\n    if (typeof _hmt != "undefined") {\n      if (to.path) {\n        _hmt.push(["_trackPageview", to.fullPath]);\n      }\n    }\n    next();\n  });\n};\n\n')])])]),t("p",[e._v("然后等一段时间，大概20分钟，如果配置正确的话就能看到数据了！"),t("br"),e._v(" "),t("img",{attrs:{src:n(770),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("那么接下来就是把数据引入到我们的网站里面了。我们可以阅读"),t("a",{attrs:{href:"https://tongji.baidu.com/api/manual/Chapter2/openapi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度统计的文档"),t("OutboundLink")],1),e._v("来开通数据api，但是开通需要前一天网站的阅读量超过100才可以，所以目前我还开通不了，自己随便点点几下就好了，只能明天再继续了。")]),e._v(" "),t("h3",{attrs:{id:"数据导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据导出"}},[e._v("#")]),e._v(" 数据导出")]),e._v(" "),t("p",[e._v("– one day later –"),t("br"),e._v("\n今天可以开通数据导出服务了，开通后我们会获取到API Key与Secret Key，如下图："),t("br"),e._v(" "),t("img",{attrs:{src:n(771),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("注意图中的统计工具和文档，后面调试的时候需要用到。")]),e._v(" "),t("p",[e._v("然后我们点击 此文档 继续后面的操作。")]),e._v(" "),t("p",[e._v("首先利用 api key 去获取 code：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri=oob&scope=basic&display=popup\n\n")])])]),t("p",[e._v("其中的CLIENT_ID就是api key。")]),e._v(" "),t("p",[e._v("获取到code之后，通过code、CLIENT_ID和Secret Key去获取 ACCESS_TOKEN，这个就是我们要调用接口的凭证了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code={CODE}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&redirect_uri=oob\n\n")])])]),t("p",[e._v("返回结果如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "expires_in": 2592000,\n    "refresh_token":"2.385d55f8615fdfd9edb7c4b5ebdc3e39.604800.1293440400-2346678-124328",\n    "access_token":"1.a6b7dbd428f731035f771b8d15063f61.86400.1292922000-2346678-124328",\n    "session_secret":"ANXxSNjwQDugf8615OnqeikRMu2bKaXCdlLxn",\n    "session_key":" 248APxvxjCZ0VEC43EYrvxqaK4oZExMB",\n    "scope":"basic"\n}\n\n')])])]),t("p",[e._v("此外还有一个参数需要获取，那就是site_id，也就是我们网站的id，需要调用查询自己的网站列表api去获取：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://openapi.baidu.com/rest/2.0/tongji/config/getSiteList?access_token=1.a6b7dbd428f731035f771b8d15063f61.86400.1292922000-2346678-124328\n\n")])])]),t("p",[e._v("把其中的 access_token 换成你自己的。")]),e._v(" "),t("p",[e._v("返回的结果如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "list": [\n        {\n            "site_id": 18957957,\n            "domain": "xxx",\n            "status": 0,\n            "create_time": "2023-04-04 17:58:49",\n            "sub_dir_list": []\n        }\n    ]\n}\n\n')])])]),t("p",[e._v("记住这个site_id。")]),e._v(" "),t("p",[e._v("然后我们回到刚开通数据导出服务的那个页面，点击api调试工具，来到调试界面，选择百度账号之后，填入自己的 access_token，选择获取报告数据，网站概况(趋势数据)，最后再填入参数就OK啦。")]),e._v(" "),t("p",[e._v("这里我们简单试一下，查询一下浏览量："),t("br"),e._v(" "),t("img",{attrs:{src:n(772),alt:"请添加图片描述"}}),t("br"),e._v("\n点击提交之后，就会自动帮我们生成请求链接和响应结果："),t("br"),e._v(" "),t("img",{attrs:{src:n(773),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("我们就可以拿着这个链接放到我们的博客里啦。")]),e._v(" "),t("p",[e._v("然后我只能查出总的访问量，不能看到每个子页面的访问量，可能是我设置站点的时候有些地方出错了。但经过查阅用户手册，发现可以通过调用 受访页面 的接口来获取每个页面的访问量。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=xxxxxxxx&site_id=xxxx&method=visit/toppage/a&start_date=20190101&end_date=20190105&metrics=pv_count,visitor_count\n\n")])])]),t("p",[e._v("其实就是 method 不一样。")]),e._v(" "),t("p",[e._v("那么我们可以在之前的 enhanceApp.js 中请求访问量，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { getPV } from "../util/api";\nexport default ({ router }) => {\n  // 路由切换事件处理\n  router.beforeEach((to, from, next) => {\n    //触发百度的pv统计\n    if (typeof _hmt != "undefined") {\n      if (to.path) {\n        _hmt.push(["_trackPageview", to.fullPath]);\n        getPV().then(res => {\n          if (res.error_code) {\n            // Access token 过期了\n          } else {\n            const items = res.data.result.items || []\n            const page = items[0] || [], vis = items[1] || []\n            let pv = 0\n            // 主页统计全部\n            if(to.path == \'/\') {\n              page.forEach((value, index) => {\n                // 只统计该域名下的，因为开发的时候访问也会被计算这里分开统计\n                if(value[0].name.indexOf(window.location.origin) > -1) {\n                  pv += vis[index][0]\n                }\n              })\n            } else {\n              const pathUrl = window.location.origin + to.path\n              for(let i = 0, n = page.length; i < n; i++) {\n                if(page[i][0].name == pathUrl) {\n                  pv = vis[i][0]\n                  break\n                }\n              }\n            }\n            console.log(pv)\n          }\n        })\n      }\n    }\n    next();\n  });\n};\n\n')])])]),t("h3",{attrs:{id:"展示浏览量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#展示浏览量"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_45732455/article/details/129975128",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("展示浏览量")]),e._v(" "),t("p",[e._v("到这里已经只差最后一步了，那就是把浏览量展示到我们的主页还有每篇博客上面。因为我使用的主题是vuepress-theme-reco，所以需要在node_modules中找到主题的源代码，自己修改想要显示浏览量的位置。")]),e._v(" "),t("p",[e._v("例如在首页中，我希望把浏览量设置在底部备案的位置："),t("br"),e._v(" "),t("img",{attrs:{src:n(774),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("所以我们需要找到Footer组件，经过我的一番寻找，发现他在node_modules/vuepress-theme-reco/components下，我们直接把备案的那串代码注释掉，添加如下代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- template --\x3e\n<span>\n  <reco-icon icon="reco-eye" />\n  <a>\n    <span>{{ pv }}</span>\n  </a>\n</span>\n\n\x3c!-- js --\x3e\nsetup() {\n  ...\n  const pv = window.pv\n  return { ..., pv}\n}\n\n')])])]),t("p",[e._v("然后重新启动项目，就能看到效果了："),t("br"),e._v(" "),t("img",{attrs:{src:n(775),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("接下来就是在博客文章的页面加上了，继续翻源码，还是在刚刚的component目录下，找到PageInfo，进去刚刚相同的操作就好了。但是发现他原本就有这一段代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<reco-icon\n  v-if="showAccessNumber === true"\n  icon="reco-eye"\n>\n  <AccessNumber :idVal="pageInfo.path" :numStyle="numStyle" />\n</reco-icon>\n\n')])])]),t("p",[e._v("也就是说官方是支持阅读量的，但通过查阅官方文档后，他们的这么解释的：")]),e._v(" "),t("blockquote",[t("p",[e._v("浏览量 仅在使用 Valine 时显示；")]),e._v(" "),t("p",[e._v("因为 浏览量 需要在页面加载时去调用相关接口，所以列表页的所有数据会一起加载下来，如果文章数量很多会影响加载速度，所以在 1.2.0 之后去掉文章列表的浏览量。")])]),e._v(" "),t("p",[e._v("那我们也不用管了，直接使用百度的统计API就行。")]),e._v(" "),t("p",[e._v("修改之后可以看到如下效果："),t("br"),e._v(" "),t("img",{attrs:{src:n(776),alt:"请添加图片描述"}})]),e._v(" "),t("h3",{attrs:{id:"调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_45732455/article/details/129975128",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("调试")]),e._v(" "),t("p",[e._v("本以为大功告成了，没想到回到首页一看，寄，首页中文章列表也是用的这个组件，所以浏览量变成了首页的："),t("br"),e._v(" "),t("img",{attrs:{src:n(777),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("那么现在的问题是在首页的时候需要获取到各个页面的浏览量，这个好办，我们把之前pv变量设置成一个对象，把页面的url作为key，然后值为浏览量。稍微修改一下 enhanceApp.js 中相关的部分：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import { getPV } from "../util/api";\nexport default ({ router }) => {\n  // 路由切换事件处理\n  router.beforeEach(async (to, from, next) => {\n    //触发百度的pv统计\n    if (typeof _hmt != "undefined") {\n      if (to.path) {\n        _hmt.push(["_trackPageview", to.fullPath]);\n        await getPV().then(res => {\n          let pv = {} // 修改为一个对象\n          if (res.error_code) {\n            // Access token 过期了\n          } else {\n            const items = res.data.result.items || []\n            const page = items[0] || [], vis = items[1] || []\n            const n = page.length\n            // 首页把全部页面的浏览量添加进去\n            if(to.path == \'/\') {\n              let total = 0\n              page.forEach((value, index) => {\n                if(value[0].name.indexOf(window.location.origin) > -1) {\n                  total += vis[index][0]\n                }\n              })\n              pv[\'home\'] = total\n              for(let i = 0; i < n; i++) {\n                pv[page[i][0].name] = vis[i][0]\n              }\n            } else {\n              const pathUrl = window.location.origin + to.path\n              for(let i = 0; i < n; i++) {\n                if(page[i][0].name == pathUrl) {\n                  pv[pathUrl] = vis[i][0] // 不是首页只添加自己的页面\n                  break\n                }\n              }\n            }\n          }\n          window.pv = pv\n        })\n      }\n    }\n    next();\n  });\n};\n\n')])])]),t("p",[e._v("然后对应修改 Footer 组件和 PageInfo 组件的 pv 取值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Footer.vue\nconst pv = window.pv['home'] || 0\n\n// PageInfo.vue\nconst pv = window.pv[window.location.origin + props.pageInfo.path] || 0\n\n// 原本我还在想，首页中是如何知道每个PageInfo组件是属于哪一篇文章的呢，因为官方原本也有实现这个功能。结果打印props一看，好家伙，信息都在里面。\n// 所以可以拿到这个 props.pageInfo.path，匹配到对应的页面就可以拿到浏览量了。\n\n")])])]),t("p",[e._v("本以为真的没问题了，没想到一打包，报了一堆错误QAQ，发现是window is not defined。又是经过了一阵查找，发现没什么特别好的解决方法。只能综合网上的方法自己想一个了。")]),e._v(" "),t("p",[e._v("我们就是要个全局变量可以存储 pv 这个对象，那么可以把他挂在 Vue 实例上。但又有一个问题，我们在服务端获取不了当前的页面路径，使用 window.location.domain 也会报错。最后发现 enhanceApp.js 中可以接收一个变量 isServer，判断当前是否是服务端。那么只要不是在服务端，我们就能使用 window 了。")]),e._v(" "),t("p",[e._v("最终修改代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// enhanceApp.js\nimport { getPV } from \"../util/api\";\nimport Vue from 'vue'\nexport default ({ router, isServer }) => {\n  // 路由切换事件处理\n  router.beforeEach(async (to, from, next) => {\n    Vue.prototype.isServer = isServer\n    //触发百度的pv统计\n    if (typeof _hmt != \"undefined\") {\n      // 这里稍微修改了一下，因为被编译成html了，hash值改变就不再重复添加了\n      if (to.path && (to.path == '/' || to.path != from.path)) {\n        _hmt.push([\"_trackPageview\", to.path]);\n        await getPV().then(res => {\n          let pv = {}\n          if (res.error_code) {\n            // Access token 过期了\n          } else {\n            const items = res.data.result.items || []\n            const page = items[0] || [], vis = items[1] || []\n            const n = page.length\n            if(to.path == '/') {\n              let total = 0\n              page.forEach((value, index) => {\n                if(value[0].name.indexOf(window.location.origin) > -1) {\n                  total += vis[index][0]\n                }\n              })\n              pv['home'] = total\n              for(let i = 0; i < n; i++) {\n                pv[page[i][0].name] = vis[i][0]\n              }\n            } else {\n              const pathUrl = window.location.origin + to.path\n              for(let i = 0; i < n; i++) {\n                if(page[i][0].name == pathUrl) {\n                  pv[pathUrl] = vis[i][0]\n                  break\n                }\n              }\n            }\n          }\n          Vue.prototype.pv = pv\n        })\n      }\n    }\n    next();\n  });\n};\n\n// PageInfo.vue\nlet pv = 0\nif(!Vue.prototype.isServer && Vue.prototype.pv) {\n  pv = Vue.prototype.pv[window.location.origin + props.pageInfo.path]\n}\n\n// Footer.vue\nlet pv = 0\nif(!Vue.prototype.isServer && Vue.prototype.pv) {\n  pv = Vue.prototype.pv['home']\n}\n\n")])])]),t("p",[e._v("期间还有一个小插曲，就是本地没问题，到服务端却报错了，Uncaught DOMException: Failed to execute ‘appendChild’ on ‘Node’: This node type does not support this method. at Object.appendChild 。经过查阅和调试之后，发现是 v-if 的问题，也就是在 PageInfo 和 Footer 组件中，如果你用了 v-if 去控制浏览量的显隐，因为在服务端是不会渲染的，而到了浏览器就报错了。所以把 v-if 修改成 v-show 就可以了。")]),e._v(" "),t("p",[e._v("这么修改之后就基本就没问题了，看看最后的效果："),t("br"),e._v(" "),t("img",{attrs:{src:n(778),alt:"请添加图片描述"}})]),e._v(" "),t("p",[e._v("这下终于大功告成了！虽然走了不少弯路，还修改了主题的源码，好在最终想要的效果也实现了。")]),e._v(" "),t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_45732455/article/details/129975128",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),e._v("其他")]),e._v(" "),t("p",[e._v("还有一点就是百度统计的 access_token 有效期只有一个月，过期了需要用 refresh_token 去获取新的，在使用手册里面也有介绍方法。等过期了我看看啥情况再做一下自动更新吧。")]),e._v(" "),t("p",[e._v("本文转自 "),t("a",{attrs:{href:"https://blog.csdn.net/weixin_45732455/article/details/129975128",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/weixin_45732455/article/details/129975128"),t("OutboundLink")],1),e._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);t.default=s.exports},765:function(e,t,n){e.exports=n.p+"assets/img/06102d3a415e47979d24a93bd0760984.24ce8991.png"},766:function(e,t,n){e.exports=n.p+"assets/img/9c841d8cf777457f8b3b655149be66e1.00f12acb.png"},767:function(e,t,n){e.exports=n.p+"assets/img/80ae445414ba455a908b59a41d4d0f15.de66e5fe.png"},768:function(e,t,n){e.exports=n.p+"assets/img/8fc199ef48134ffb8729cbaaa87a3ef7.c0cbaa24.png"},769:function(e,t,n){e.exports=n.p+"assets/img/93600b7652be47eb8219e387da208c7e.8757ee84.png"},770:function(e,t,n){e.exports=n.p+"assets/img/052c7867d675407698e4c5b9d5039b7c.abc34b06.png"},771:function(e,t,n){e.exports=n.p+"assets/img/72e5a470e2da4a72ab5c95269c4daf52.28d879df.png"},772:function(e,t,n){e.exports=n.p+"assets/img/1b5835b931c8487c97fc9e4b30206f8d.b961f772.png"},773:function(e,t,n){e.exports=n.p+"assets/img/229db4c25d6b49689d91aa18f5b63c16.f37dd158.png"},774:function(e,t,n){e.exports=n.p+"assets/img/046ca6d720784bf19195cc25329336b6.97bf57a0.png"},775:function(e,t,n){e.exports=n.p+"assets/img/399a225c6de74068aea746aab9c584f3.2040caee.png"},776:function(e,t,n){e.exports=n.p+"assets/img/7ce33c00406046a8899aac0386da10cf.5ff9ba9f.png"},777:function(e,t,n){e.exports=n.p+"assets/img/7ba5ebd9f04145a7bf555830a17996c6.ce792980.png"},778:function(e,t,n){e.exports=n.p+"assets/img/3f9131ca80db4ee0bc0894dca53ce469.d31d61dc.png"}}]);