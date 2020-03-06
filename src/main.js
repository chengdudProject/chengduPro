// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/css/swiper.css'
import echarts from 'echarts'
// import VueTaskNode from 'vue-task-node'
// import 'vue-task-node/dist/css/vnode.css'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.prototype.bus = new Vue()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
