# js美化输出

[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#%E8%AF%AD%E6%B3%95)  JSON.stringify()

<div id="appid" style="width: 100%; height: 400px">
<iframe style="height: 100%;width: 100%;"
x-frame-options='allow-from uri'
src="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#%E8%AF%AD%E6%B3%95" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

```js
const people = [
    { name: 'Alice', age: 30, sex: 'female' },
    { name: 'Bob', age: 25, sex: 'male' },
    { name: 'Charlie', age: 30, sex: 'male' },
    { name: 'Diana', age: 25, sex: 'female' },
    { name: 'Eva', age: 25, sex: 'female' },
    { name: 'Frank', age: 25, sex: 'male' },
    { name: 'Grace', age: 20, sex: 'female' }
];

var jsonstr = JSON.stringify(people,null,2);

```

> ```
> [
>   {
>     "name": "Alice",
>     "age": 30,
>     "sex": "female"
>   },
>   {
>     "name": "Bob",
>     "age": 25,
>     "sex": "male"
>   },
>   {
>     "name": "Charlie",
>     "age": 30,
>     "sex": "male"
>   },
>   {
>     "name": "Diana",
>     "age": 25,
>     "sex": "female"
>   },
>   {
>     "name": "Eva",
>     "age": 25,
>     "sex": "female"
>   },
>   {
>     "name": "Frank",
>     "age": 25,
>     "sex": "male"
>   },
>   {
>     "name": "Grace",
>     "age": 20,
>     "sex": "female"
>   }
> ]
> ```









