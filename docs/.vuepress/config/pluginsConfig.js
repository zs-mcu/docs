const moment = require('moment');
moment.locale('zh-cn')


module.exports = [
      //最后更新时间
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            //return moment(timestamp).fromNow()
            return moment(timestamp).format("LLLL")
          }
        }
      ],
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: "网站有更新",
            buttonText: "获取最新"
          }
        }
      ],
      ['@vuepress/back-to-top'],
      [
        '@vuepress/google-analytics',
        {
          'ga': 'G-97XP980WZE' // UA-00000000-0
        }
      ]
]