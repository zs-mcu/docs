module.exports = {
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

    ]
  }
}