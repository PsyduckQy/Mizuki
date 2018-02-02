import Vue from 'vue'
import Router from 'vue-router'
import Path from 'path'

const views = () => import('@/pages/views')
const index = () => import('@/pages/index')
const collect = () => import('@/pages/collect')
const mymanage = () => import('@/pages/mymanage')
const personaldata = () => import('@/pages/personaldata')
const PhotosView = () => import('@/pages/PhotosView')
const drop = () => import('@/pages/404')
const cache = () => import('@/pages/cache')
Vue.use(Router)
/**
 * 路由配置
 *
 * @param {String} title 页面标题
 * @param {Bollen} requireAuth 页面是否需要登录
 * @param {Bollen} navBar 是否显示底部 TAB
 */
export default new Router({
  base: Path.join(__dirname),
  mode: 'history', // 去除路由上面的##号
  routes: [
    {
      path: '/',
      component: views,
      children: [
        { path: '/', name: 'index', meta: { title: '首页', navBar: true }, component: index },
        { path: '/PhotosView', name: 'PhotosView', meta: { title: '图片集合', navBar: false }, component: PhotosView }
      ]
    },
    {
      path: '/collect',
      component: views,
      children: [
        { path: '/collect', name: 'collect', meta: { title: '收藏', navBar: false }, component: collect }
      ]
    },
    {
      path: '/mymanage',
      component: views,
      children: [
        { path: '/mymanage', name: 'mymanage', meta: { title: '个人中心', navBar: true }, component: mymanage },
        { path: '/personaldata', name: 'personaldata', meta: { title: '个人资料', navBar: false }, component: personaldata },
        { path: '/cache', name: 'cache', meta: { title: '离线缓存', navBar: false }, component: cache }
      ]
    },
    {
      path: '/404',
      component: views,
      children: [
        { path: '/404', name: 'drop', meta: { title: '页面找不到了', navBar: false }, component: drop }
      ]
    }
  ]
})
