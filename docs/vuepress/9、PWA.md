![image-20231123184339739](/vuepress/image-20231123184339739.png)



![image-20231123185119618](/vuepress/image-20231123185119618.png)

使用babel 的插件形式

```js
   [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ]
```

![image-20231123185428090](/vuepress/image-20231123185428090.png)

[提供 Manifest 和 icons](https://manifest-gen.netlify.app/)

![image-20231123185857343](/vuepress/image-20231123185857343.png)

拷贝到public目录下

![image-20231123190229429](/vuepress/image-20231123190229429.png)



发布后出现 service workers

![image-20231123191921627](/vuepress/image-20231123191921627.png)





![image-20231123193858012](/vuepress/image-20231123193858012.png)