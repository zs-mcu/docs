const moment = require('moment');
moment.locale('zh-cn')

const secret = require("./secret")


module.exports = {
  "vuepress-plugin-auto-sidebar": {
    sort: {
      // 更多选项: 
      // `asc`、`desc`、`created_time_asc`、`created_time_desc`  | custom
      // 在使用 created_time_asc 和 created_time_desc 必须使用 git (opens new window)跟踪文件。
      // 自定义排序  mode: "custom"  fn: sortFn
      mode: "desc",
      //README文件一直在前面
      readmeFirstForce: true
      //所有文件会根据 autoSort 的大小进行排序，数值大的在前，数值小的在后，负数值会排在不具有 autoSort 属性的文件后。
    },
    sidebarDepth: 3,
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
    selector: 'img.zoom-custom-imgs',
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
