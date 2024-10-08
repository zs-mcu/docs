module.exports = [
  ['link', {rel: 'icon', href: '/favicon.ico'}],
  ['meta', {name: 'author', content: '小邵子'}],
  ['meta', {name: 'keywords', content: '张邵,小邵子的 vuepress 个人博客'}],

  ['link', {rel: 'manifest', href: '/manifest.json'}],
  ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
  ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
  ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
  ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
  ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ["script", {charset: "utf-8", src: "/js/custom.js"}],//加载右侧菜单栏图片
  [
    "script",
    {},
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b2140ca1d9ce57e6aac1a7709f5f5fe7";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `
  ],
]