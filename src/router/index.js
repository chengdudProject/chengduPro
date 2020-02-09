import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import search from '@/view/search'
import searchContent from '@/view/searchContent'
import contentRead from '@/view/contentRead'
import mindMapping from '@/view/mindMapping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchContent',
      name: 'searchContent',
      component: searchContent
    },
    {
      path: '/contentRead',
      name: 'contentRead',
      component: contentRead
    },
    {
      path: '/mindMapping',
      name: 'mindMapping',
      component: mindMapping
    }
  ]
})
