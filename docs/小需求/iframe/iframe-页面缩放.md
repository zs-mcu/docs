# 缩放

在屏幕尺寸更大的A系统中使用iframe嵌套B系统，需要等比例放大B系统页面填充iframe（缩小同理）。

```js
iframe{
    transform: scale(2, 2);
    width: 50%;
    height: 50%;
    transform-origin: left top;
}
```

其中scale(X,Y)的值与width、height这样确定：width = 100 / X，height = 100 / Y。