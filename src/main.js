// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import vueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
// 解决手机端按钮点击延迟300ms
fastclick.attach(document.body)
Vue.use(vueLazyLoad, {
	loading: require('common/images/default.png')
})
// https://c.y.qq.com/splcloud/fcgi-bin/p.fcg?g_tk=5381&format=jsonp&jsonpCallback=jsonp1

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
