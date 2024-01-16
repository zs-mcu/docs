"use strict";

const moment = require('moment');
moment.locale('zh-cn')

const secret = require("./secret")

const pinyin = require("../public/js/pinyin_getFirstLetterList") 

// import { getFirstLetterList } from "../public/js/pinyin_getFirstLetterList.js";


// 判断字符串是否全是中文
function isAllChinese(str) {
  return /^[\u4E00-\u9FA5]+$/.test(str)
}
// 判断字符是否为中文
function isChinese(char) {
  return /^[\u4E00-\u9FA5]$/.test(char)
}
const sortFn = (Afile, Bfile) => {
  let a=Afile.filename
  let b=Bfile.filename
  // 数字排在字符串前面
  if (typeof a === 'number' && typeof b === 'string') {
    return -1
  }
  if (typeof a === 'string' && typeof b === 'number') {
    return 1
  }


  // 当存在非数字时
  if (isNaN(a) || isNaN(b)) {
    // 全汉字的排在非全汉字的后面
    if (isAllChinese(a) && !isAllChinese(b)) {
      return 1
    }

    if (!isAllChinese(a) && isAllChinese(b)) {
      return -1
    }
    

    // 存在非数字的数据时，都转为字符串进行比较
    a = a.toString()
    b = b.toString()

    let result = 0
    // 依次比较两个字符串的各项字符
    for (let index = 0; index < ((a.length - b.length) ? b.length : a.length); index++) {
      // 汉字排在非汉字的后面
      if (!isChinese(a[index]) && isChinese(b[index])) {
        result = -1
      }
      if (isChinese(a[index]) && !isChinese(b[index])) {
        result = 1
      }
      if (a[index] && b[index] &&  a[index].match(/^\d+$/) && b[index].match(/^\d+$/)) {
        let anum_str=""
        let bnum_str=""
        for (let i = index; i < a.length; i++) {
          if(a[i].match(/^\d+$/)){
            anum_str+=a[i]
          } else {
            break;
          }      
        }
        for (let i = index; i < b.length; i++) {
          if(b[i].match(/^\d+$/)){
            bnum_str+=b[i]
          } else {
            break;
          }
        }
        result = +anum_str - +bnum_str;
      }else{
        // 若两个汉字进行比较，则比较他们的拼音首字母
        if (isChinese(a[index]) && isChinese(b[index])) {
          let pinyinA = pinyin.getFirstLetterList(a[index]).toString()
          let pinyinB = pinyin.getFirstLetterList(b[index]).toString()
          result = pinyinA.localeCompare(pinyinB, 'zh-Hans-CN', { sensitivity: 'accent' })
        }
      }
      // 若已经比较出结果，则跳出循环，不再继续比较剩余字符
      if (result !== 0) {
        break
      }
    }
    // 只要有一个无法转换为数字——转换为字符串进行比较——先按字符排序，然后按照数字排序
    let num =  result || a.toString().localeCompare(b.toString(), 'zh-Hans-CN', { sensitivity: 'accent' })
    return num
  }else{
    // 都能转换为数字——转换为数字进行比较——从小到大排序
    return Number(a) - Number(b)
  }
}

module.exports = {
  "vuepress-plugin-auto-sidebar": {
    sort: {
      // 更多选项: 
      // `asc`、`desc`、`created_time_asc`、`created_time_desc`  | custom
      // 在使用 created_time_asc 和 created_time_desc 必须使用 git (opens new window)跟踪文件。
      // 自定义排序  mode: "custom"  fn: sortFn
      mode: "custom",
      //README文件一直在前面
      readmeFirstForce: true,
      //所有文件会根据 autoSort 的大小进行排序，数值大的在前，数值小的在后，负数值会排在不具有 autoSort 属性的文件后。
      fn: sortFn
    },
    sidebarDepth: 1,
    collapse: {
      open: true
    },
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'zs-mcu',
    repo: 'docs',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
    locale: 'zh'
  },
  //最后更新时间
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      //return moment(timestamp).fromNow()
      return moment(timestamp).format("LLLL")
    }
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "网站有更新",
      buttonText: "获取最新"
    }
  },
  '@vuepress/back-to-top': {},
  '@vuepress/google-analytics': {
    'ga': secret.ga
  },
  '@vuepress/medium-zoom': {
    // selector: 'img.zoom-custom-imgs',
    selector: 'img',
  },
  //全文搜索插件，说是不太友好
  'fulltext-search':{},
  // 对中文不友好
  //'flexsearch': {},


  "vuepress-plugin-code-copy": {},
  // "vuepress-plugin-side-anchor": {},
  "vuepress-plugin-right-anchor": {
    expand: {
      showDepth: 6,
      trigger: 'click',
      clickModeDefaultOpen: true
    },
  },
}