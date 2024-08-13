# stringify对Date格式化

```js
function dateFormat(date, fmt) {
    if (null == date || undefined == date) return '';
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Date.prototype.toJSON = function () { return dateFormat(this,'yyyy-MM-dd')}
var data = new Date()
JSON.stringify(data)
```

归一化格式化时间函数

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



