import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
import RegisterLayout from '@/layout/RegisterLayout'
import EmptyLayout from "../layout/EmptyLayout";


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomePage'),
      meta: {
        title: '首页'
      },
      children: []
    }
  ]
});
