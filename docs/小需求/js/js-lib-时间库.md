## 常见库

moment、dayjs、date-fns三个库都满足常见的需求，但是存在如下特点：

- moment 的功能强大但是体积也最大，moment.js 的体积为 280.9 kB ，day.js 体积为7K，date-fns由于是模块化加载，体积可以最小化；

- dayjs 和 moment 的接口几乎完全一致，相互切换的学习成本极低，date-fns接口风格差异较大；
-  如果考虑的兼容性，可以优先考虑dayjs，喜欢模块化的朋友可以考虑date-fns。

## Day.js

Day.js 是一个轻量的处理时间和日期的 JavaScript 库。 Day.js被设计为Moment.js的极简替代品。API和用法几乎完全一致，相互切换的学习成本极低。

（最新版本的 Chrome 开发者工具也开始建议用户更换 Moment.js 为同类更小的库。）

### 特点

- 和 Moment.js 相同的 API 和用法
- 不可变数据 (Immutable)
- 支持链式操作 (Chainable)
- 国际化 I18n
- 仅 2kb 大小的微型库
- 全浏览器兼容

### 使用方式

API地址：[day.js.org/docs/zh-CN/…](https://link.juejin.cn?target=https%3A%2F%2Fday.js.org%2Fdocs%2Fzh-CN%2Fparse%2Fparse)

```python
python 代码解读复制代码npm install dayjs    

import dayjs from 'dayjs'  

dayjs().format()
```

## moment.js

一个大而全的时间日期库，极大方便了我们在 JavaScript 中计算时间和日期，每周下载量超过 1200 万，已成功用于数百万个项目中。

### moment.js 两大问题：

### 1. 可变对象

Moment 对象是可变对象（mutable），简单点说，任何时间上的加减等计算都改变了其本身。这种设计让代码变的十分不可控，而且很容易带来各种隐蔽且难以调试的 bug。

### 2. 包体积过大

因为 Momnet.js 将全部的功能和所有支持的语言都打到一个包里，包的大小也是到了 280.9 kB 这样一个夸张的数字，而且对于 Tree shaking 无效。如果要使用时区相关的功能，包体积更是有 467.6 kB 的大小。简单点说，我们可能只需要一个 .format 格式化时间的方法，用户就需要加载数百 kB 的库。