

# js分组

## 需求

对数组自定义分组

## 最佳实践

```js
// 待分组数组
const people = [
    { name: 'Alice', age: 30, sex: 'female' },
    { name: 'Bob', age: 25, sex: 'male' },
    { name: 'Charlie', age: 30, sex: 'male' },
    { name: 'Diana', age: 25, sex: 'female' },
    { name: 'Eva', age: 25, sex: 'female' },
    { name: 'Frank', age: 25, sex: 'male' },
    { name: 'Grace', age: 20, sex: 'female' }
];


//最佳实践：分组函数
function groupBy(arr, generateKey) {
    //参数归一化：类型为String
    if (typeof generateKey === 'string') {
        const propName = generateKey;
        generateKey = (item) => item[propName];
    }
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        const key = generateKey(arr[i], i, arr)
        if (result[key]) {
            result[key].push(arr[i]);
        } else {
            result[key] = [arr[i]];
        }
    }
    return result;
}

console.log(groupBy(people, 'sex'))
console.log(groupBy(people, (p) => p.age))
console.log(groupBy(people, (p) => `${p.sex}-${p.age}`))
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(groupBy(arr, (n) => (n % 2 === 0 ? '偶' : '奇')));

```

## 一代：

```js
//初版函数
const result = {}
for (let i = 0; i < people.length; i++) {
    const key = people[i].sex;
    if (result[key]) {
        result[key].push(people[i]);
    } else {
        result[key] = [people[i]];
    }
}
console.log(result)
```

## 二代：封装函数

```js

//函数封装
function groupBy(arr, propName) {
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i][propName];
        if (result[key]) {
            result[key].push(arr[i]);
        } else {
            result[key] = [arr[i]];
        }
    }
    return result;
}
console.log(groupBy(people, "sex"))
```

