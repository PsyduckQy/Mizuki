// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/reset.less'
import FastClick from 'fastclick'
// 支持低版本的浏览器
import 'babel-polyfill'
// 加载MuseUI和样式
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条CSS

import VueParticles from 'vue-particles'
Vue.use(MuseUI)
Vue.use(VueParticles)

import * as fundebug from 'fundebug-javascript'
fundebug.apikey = '3684c14fde4436f512378e7b504e870dc79c8ff4be27c6cf811165c4d4ea9681'

// FunDebug
Vue.config.errorHandler = function (err, vm, info) {
  var componentName = (vm) => {
    if (vm.$root === vm) return 'root'
    var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name
    return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '')
  }
  var propsData = vm.$options.propsData

  fundebug.notifyError(err, {
    metaData: {
      componentName: componentName,
      propsData: propsData,
      info: info
    }
  })
}

/**
 * 消除物理点击和 click 移动浏览器上的事件触发之间的300毫秒延迟
 */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
// 取消苹果alert显示页面的URL
window.alert = function (name) {
  var iframe = document.createElement('IFRAME')
  iframe.style.display = 'none'
  iframe.setAttribute('src', 'data:text/plain,')
  document.documentElement.appendChild(iframe)
  window.frames[0].window.alert(name)
  iframe.parentNode.removeChild(iframe)
}
Vue.config.productionTip = false
/* 全局钩子 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) document.title = to.meta.title
  NProgress.done()
  next()
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#main')
