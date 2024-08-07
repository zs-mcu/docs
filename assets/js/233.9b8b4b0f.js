(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1435:function(e,t,r){"use strict";r.r(t);var a=r(4),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"响应状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码"}},[e._v("#")]),e._v(" 响应状态码")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E4%BF%A1%E6%81%AF%E5%93%8D%E5%BA%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("信息响应"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("100")]),e._v("–"),t("code",[e._v("199")]),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E6%88%90%E5%8A%9F%E5%93%8D%E5%BA%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("成功响应"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("200")]),e._v("–"),t("code",[e._v("299")]),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E9%87%8D%E5%AE%9A%E5%90%91%E6%B6%88%E6%81%AF",target:"_blank",rel:"noopener noreferrer"}},[e._v("重定向消息"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("300")]),e._v("–"),t("code",[e._v("399")]),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%94%99%E8%AF%AF%E5%93%8D%E5%BA%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("客户端错误响应"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("400")]),e._v("–"),t("code",[e._v("499")]),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%94%99%E8%AF%AF%E5%93%8D%E5%BA%94",target:"_blank",rel:"noopener noreferrer"}},[e._v("服务端错误响应"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("500")]),e._v("–"),t("code",[e._v("599")]),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"成功响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成功响应"}},[e._v("#")]),e._v(" 成功响应")]),e._v(" "),t("h3",{attrs:{id:"_200-ok"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok"}},[e._v("#")]),e._v(" 200 ok")]),e._v(" "),t("p",[e._v("请求成功。成功的含义取决于 HTTP 方法：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("GET")]),e._v(": 资源已被提取并在消息正文中传输。")]),e._v(" "),t("li",[t("code",[e._v("HEAD")]),e._v(": 实体标头位于消息正文中。")]),e._v(" "),t("li",[t("code",[e._v("PUT")]),e._v(" or "),t("code",[e._v("POST")]),e._v(": 描述动作结果的资源在消息体中传输。")]),e._v(" "),t("li",[t("code",[e._v("TRACE")]),e._v(": 消息正文包含服务器收到的请求消息。")])]),e._v(" "),t("h3",{attrs:{id:"_304-not-modified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified"}},[e._v("#")]),e._v(" 304  Not Modified")]),e._v(" "),t("p",[e._v("这是用于缓存的目的。它告诉客户端响应还没有被修改，因此客户端可以继续使用相同的缓存版本的响应。")]),e._v(" "),t("h2",{attrs:{id:"客户端错误响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端错误响应"}},[e._v("#")]),e._v(" 客户端错误响应")]),e._v(" "),t("h3",{attrs:{id:"_401-unauthorized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized"}},[e._v("#")]),e._v(" 401 Unauthorized")]),e._v(" "),t("p",[e._v('虽然 HTTP 标准指定了"unauthorized"，但从语义上来说，这个响应意味着"unauthenticated"。也就是说，客户端必须对自身进行身份验证才能获得请求的响应。')]),e._v(" "),t("h3",{attrs:{id:"_403-forbidden"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden"}},[e._v("#")]),e._v(" 403 Forbidden")]),e._v(" "),t("p",[e._v("客户端没有访问内容的权限；也就是说，它是未经授权的，因此服务器拒绝提供请求的资源。与 "),t("code",[e._v("401 Unauthorized")]),e._v(" 不同，服务器知道客户端的身份。")]),e._v(" "),t("h3",{attrs:{id:"_404-not-found"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found"}},[e._v("#")]),e._v(" 404 Not Found")]),e._v(" "),t("p",[e._v("服务器找不到请求的资源。在浏览器中，这意味着无法识别 URL。在 API 中，这也可能意味着端点有效，但资源本身不存在。服务器也可以发送此响应，而不是 "),t("code",[e._v("403 Forbidden")]),e._v("，以向未经授权的客户端隐藏资源的存在。这个响应代码可能是最广为人知的，因为它经常出现在网络上。")]),e._v(" "),t("h2",{attrs:{id:"服务端错误响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端错误响应"}},[e._v("#")]),e._v(" 服务端错误响应")]),e._v(" "),t("h3",{attrs:{id:"_500-internal-server-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error"}},[e._v("#")]),e._v(" 500 Internal Server Error")]),e._v(" "),t("p",[e._v("服务器遇到了不知道如何处理的情况。")]),e._v(" "),t("h3",{attrs:{id:"_502-bad-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_502-bad-gateway"}},[e._v("#")]),e._v(" 502 Bad Gateway")]),e._v(" "),t("p",[e._v("此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。")])])}),[],!1,null,null,null);t.default=_.exports}}]);