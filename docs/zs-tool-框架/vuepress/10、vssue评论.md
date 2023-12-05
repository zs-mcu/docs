---
autoSort: 91
title: '10、vssue评论'
---

## vssue使用

https://vssue.js.org/



![image-20231205134741213](./images/image-20231205134741213.png)

![image-20231205134830769](./images/image-20231205134830769.png)

![image-20231205134852123](./images/image-20231205134852123.png)



按照文档 [https://vssue.js.org/zh/guide/github.html](https://vssue.js.org/zh/guide/github.html) 操作

### 1、创建 OAuth application

[https://github.com/settings/applications/new](https://github.com/settings/applications/new)

![image-20231205135403723](./images/image-20231205135403723.png)

### 2、安装插件

![image-20231205135616537](./images/image-20231205135616537.png)

```powershell
yarn add @vssue/vuepress-plugin-vssue

# 这里安装的是v4后面配置时需要注意
yarn add @vssue/api-github-v4
```



### 3、插件使用

```js
'@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',//这里需要加-v4来使用v4版本的api

    // 其他的 Vssue 配置
    //GitHub账号名称
    owner: 'zs-mcu',
    //仓库名称
    repo: 'docs',
    //Oauth信息
    clientId: '09b48aa193526adeb1a8',
    clientSecret: 'e3bfa36d814f2a4cc89ebefbb42858d714b4091e',
  },
```

不然会出现下面提示

![image-20231205143246003](./images/image-20231205143246003.png)

正确的配置的启动效果是这样

![image-20231205143411343](./images/image-20231205143411343.png)





![image-20231205135959741](./images/image-20231205135959741.png)

填入配置项中

![image-20231205140802058](./images/image-20231205140802058.png)

![image-20231205141142926](./images/image-20231205141142926.png)









### 4、测试验证



![image-20231205143508511](./images/image-20231205143508511.png)

![image-20231205144109917](./images/image-20231205144109917.png)

![image-20231205144051449](./images/image-20231205144051449.png)





### 优化1、自动创建issues

![image-20231205144428757](./images/image-20231205144428757.png)

![image-20231205145455153](./images/image-20231205145455153.png)

设置中文显示

![image-20231205145508510](./images/image-20231205145508510.png)



### 优化2、全局引入

需要修改默认主体

> 创建js文件继承原有主题

![image-20231205151507287](./images/image-20231205151507287.png)

> 文件覆盖约定

![image-20231205145644633](./images/image-20231205145644633.png)



> 从官网复制出文件，以及文件所需的工具类

![image-20231205151735766](./images/image-20231205151735766.png)



> 修改测试

![image-20231205150844705](./images/image-20231205150844705.png)

![image-20231205150822770](./images/image-20231205150822770.png)



> 将vssue组件添加到页面底部的插槽中

![image-20231205151907774](./images/image-20231205151907774.png)



> 修改为正式环境地址，发布测试

![image-20231205152219466](./images/image-20231205152219466.png)