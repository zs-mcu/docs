# iframe简单使用

### 1.iframe简单使用

`<iframe>` 标签规定一个内联框架。

一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。

```html
<iframe width=420 height=330 frameborder=0 scrolling=auto src=URL></iframe>
```

*   width插入页的宽；
*   height插入页的高；
*   scrolling 是否显示页面滚动条（可选的参数为auto、yes、no，如果省略这个参数，则默认为auto）；
*   frameborder 边框大小；

**注意：URL建议用绝对路径**

```html
<iframe width=0 height=0 frameborder=0 scrolling=auto src=WWW .webjx.com></iframe>
```

如果一个页面里面有框架，点页面里的连接，要求在这个`<iframe>` 里打开。在`<iframe >`中规定name

```html
<iframe name=**  ></iframe>
```

然后在修改默认打开模式，：网页head中加上`<a href=URL target=**>`或部分连接的目标框架设为（\*\*）

要插入一个页面。要求只拿中间一部分。其他的都不要。

代码：

```html
<iframe name=123  align=middle marginwidth=0 marginheight=0 vspace=-170 hspace=0 src="http://www.webjx.com/"  frameborder=no scrolling=no  width=776  height=2500></iframe>
```

控制插入页被框架覆盖的深度 `marginwidth=0 marginheight=0；`控制框架覆盖上部分的深度 `vspace=-170`

scrolling滚动条要否（auto、yes、no） frameborder框架的边框大小，width=776 height=2500此框架的大小。

### 2.获取iframe

常用获取元素的方法，dom ,jQ等;

```js
var ifr = document.getElementById(‘mainIframe0’)
```

### 3.获取iframe 元素值

```js
ifr.contentWindow
```

拿到的是window 对象

```js
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window,
…}
```

`ifr.contentWindow.`值 定义的全局变量。

### 4.iframe获取父页面的信息：

获取父页面元素的值：

```js
jquery方式：$("#auditDate",parent.document).val();

js方式：parent.document.getElementById(“auditDate”).value;
```

本文转自 [http://t.csdnimg.cn/gAroq](http://t.csdnimg.cn/gAroq)，如有侵权，请联系删除。