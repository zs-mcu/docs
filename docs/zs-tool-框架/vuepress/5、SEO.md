---
autoSort: 96
---

# 5、SEO

- 标题
- 描述信息
- 作者
- favicon
- keywords

[图标下载：https://favicon.io/](https://favicon.io/)

个人博客SEO属性设置

```js
module.exports = { 
    title: "小邵子",
    description: '小邵子的个人笔记',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '小邵子' }],
        ['meta', { name: 'keywords', content: '张邵,小邵子的 vuepress 个人博客' }]
    ],
}
```

