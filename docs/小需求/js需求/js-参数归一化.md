# 参数归一化

需求：将一下这些方法，进行归一化处理

```js
//2024-8-8 00:00:00
formate(new Date(),'datetime');

//2024-08-08
formate(new Date(),'date',true);

//2024-08-08 00:00:00
formate(new Date(),'datetime',true);

//2024年08月08日 00:00:00.000
formate(new Date(),'yyyy年MM月dd日 HH:mm:ss.ms',true);

formate(new Date('2022/1/1'),(dateInfo) => {
    const { year } = dateInfo;
    const thisYear = new Date().getFullYear();
    if(year < thisYear) {
        return `${thisYear - year}年前`;
    } else if (year > thisYear) {
        return `${year - thisYear}年后`;
    } else {
        return '今年';
    }
})
```

归一化函数编写

```js
function _formatNormalize(formatter){
    if(typeof formatter === 'function') {
        return formatter;
    }
    if(typeof formatter !== 'string') {
        throw new Error('formatter must be a string or a function');
    }
    if(formatter === 'date') {
        formatter = 'yyyy-MM-dd';
    }
    else if(formatter === 'datetime') {
        formatter = 'yyyy-MM-dd HH:mm:ss';
    }

    return (dateInfo)=>{
        const {yyyy, MM, dd, HH, mm, ss} = dateInfo;
        return formatter
            .replace(/yyyy/g, yyyy)
            .replace(/MM/g, MM)
            .replace(/dd/g, dd)
            .replace(/HH/g, HH)
            .replace(/mm/g, mm)
            .replace(/ss/g, ss);
    }
}


/**
 * 格式化一个日期
 * @param {Date} date 日期对象 
 */
function formate(date, formatter, isPad = false) {
    formatter = _formatNormalize(formatter);
    const dateInfo = {
        yyyy: date.getFullYear(),
        MM: (date.getMonth() + 1).toString().padStart(isPad ? 2 : 1, '0'),
        dd: date.getDate().toString().padStart(isPad ? 2 : 1, '0'),
        HH: date.getHours().toString().padStart(isPad ? 2 : 1, '0'),
        mm: date.getMinutes().toString().padStart(isPad ? 2 : 1, '0'),
        ss: date.getSeconds().toString().padStart(isPad ? 2 : 1, '0'),
    }
    return formatter(dateInfo)
}

var date = formate(new Date(), 'yyyy-MM-dd HH:mm:ss', true);
console.log(date);
```









