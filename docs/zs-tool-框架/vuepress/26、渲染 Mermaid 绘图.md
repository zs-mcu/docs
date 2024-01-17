# 26、渲染 Mermaid 绘图

https://www.techgrow.cn/posts/bc19d204.html

本文将介绍 VuePress 如何渲染 Mermaid 绘图，适用于 VuePress 1.x 与 VuePress 2.x。

VuePress 1.x 可以直接安装第三方插件 [vuepress-plugin-mermaidjs](https://github.com/eFrane/vuepress-plugin-mermaidjs) 来渲染 Mermaid 绘图，插件的详细文档可看 [这里](https://vuepress-plugin-mermaidjs.efrane.com/)。

### 安装插件

安装插件时必须指定具体的版本号，否则默认会安装最新版本的插件，最新版本不兼容 VuePres 1.x。

```
yarn add vuepress-plugin-mermaidjs@1.9.1 -D
```

### 配置插件

编辑 VuePress 1.x 的 `.vuepress/config.js` 配置文件，新增 `mermaidjs` 插件，如下所示：

```
module.exports = {
    plugins: [
        'vuepress-plugin-mermaidjs'
    ]
}
```

