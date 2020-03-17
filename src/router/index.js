import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/view/HelloWorld'
// import search from '@/view/search'
// import searchContent from '@/view/searchContent'
// import contentRead from '@/view/contentRead'
// import mindMapping from '@/view/mindMapping'
// import relationNetwork from '@/view/relationNetwork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=> import('@/view/HelloWorld')
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('@/view/search')
    },
    {
      path: '/searchContent/:searchVal',
      name: 'searchContent',
      component: ()=> import('@/view/searchContent')
    },
    {
      path: '/contentRead',
      name: 'contentRead',
      component: ()=> import('@/view/contentRead')
    },
    {
      path: '/mindMapping',
      name: 'mindMapping',
      component: ()=> import('@/view/mindMapping')
    },
    {
      path: '/relationNetwork',
      name: 'relationNetwork',
      component: ()=> import('@/view/relationNetwork')
    }
  ]
})
