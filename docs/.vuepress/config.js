const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
  title: "小邵子",
  description: '小邵子的个人笔记',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '小邵子' }],
    ['meta', { name: 'keywords', content: '张邵,小邵子的 vuepress 个人博客' }],

    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  base: "/docs/",

  plugins: [
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
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about/' },
      { text: '关于我html', link: '/about.html', target: '_blank' },
      { text: 'google', link: 'https://google.com', target: '_self', rel: '' },
      {
        text: '关于我',
        ariaLabel: '关于我',
        items: [
          { text: 'about', link: '/about/' },
          { text: 'about.html', link: '/about.html' },
          {
            text: '关于我的一切',
            items: [
              { text: 'about', link: '/about/' },
              { text: 'about.html', link: '/about.html' },
            ]
          },
        ]
      },

    ],
    sidebar: {
      "/css/": [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      "/javascript/": [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ],
      '/': [
        ""
      ]
    },
    lastUpdated: '更新时间',
  },

}