const navConfig = require('./navConfig')
const sidebarConfig = require('./sidebarConfig')

const nav = require("../public/js/nav.js");
module.exports = {
  //logo: '/assets/img/logo.png',
  nav: nav,
  sidebar: sidebarConfig ,
  lastUpdated: '更新时间',
}