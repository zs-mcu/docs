# stringify 搞砸了我的日期时间对象？

```js
{ 
    id: 1533,
    story_type_id: 1,
    content_id: 470,
    created_at: Sun, 05 Feb 2012 07:02:43 GMT,
    updated_at: Sun, 05 Feb 2012 07:02:43 GMT,
    type_name: 'post' 
}
```

我有一个 JSON 对象，上面有“日期时间”字段。这是完美的。但是当我将它字符串化(我想将它存储在缓存中)时，我得到了这种格式:

```js
"created_at":"2012-02-05T07:02:43.000Z"
```

这会导致问题，因为当我想要 JSON.parse 时，它突然不再是日期时间格式并且与我的其他格式不兼容。

我该怎么做才能解决这个问题？在我的整个应用程序中，到处都是“created_at”。我不想手动更改每一个。



**最佳答案**

实际上可以修改将 Date 对象序列化为 JSON 的方式。结合 reviver 功能，可以创建一个双向解决方案，该解决方案将自动处理序列化，并且可以轻松地用于反序列化。

首先像这样修改序列化:

```js
Date.prototype.toJSON = function() { return "{timestamp}+" . this.getTime() }
```

这会将 Date 对象的表示更改为带有前缀作为标记的 UNIX 时间戳:

```js
> json = JSON.stringify({test:new Date()});
"{"test":"{timestamp}1380164268633"}"
```

然后你可以创建一个 reviver 函数，它会自动过滤掉这些值:

```js
function json_deserialize_helper(key,value) {
  if ( typeof value === 'string' ) {
    var regexp;
    regexp = /^{timestamp}(\d*)$/.exec(value);
    if ( regexp ) {
      return new Date(+regexp[1]);
    }
  }
  return value;
}
```

(来源:此代码基本上是从相关问题中的此答案复制而来:[https://stackoverflow.com/a/14509447/2572897](javascript:void()))

现在有了这个设置，我们之前的结果的反序列化将再次产生一个 Date 对象:

```js
> JSON.parse(json, json_deserialize_helper);
Object {test: Thu Sep 26 2013 04:57:48 GMT+0200 (CEST)}
```

或者您可以选择不修改序列化，而是使用正则表达式来捕获标准序列化格式:

```js
function json_deserialize_helper(key,value) {
  if ( typeof value === 'string' ) {
    var regexp;
    regexp = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.exec(value);
    if ( regexp ) {
      return new Date(value);
    }
  }
  return value;
}
```

例子:

```js
> json = JSON.stringify({test:new Date()})
"{"test":"2013-09-26T03:05:26.563Z"}"
> JSON.parse(json, json_deserialize_helper)
Object {test: Thu Sep 26 2013 05:05:26 GMT+0200 (CEST)
```

https://stackoverflow.com/questions/9194372/

