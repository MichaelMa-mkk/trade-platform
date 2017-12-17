import Vue from 'vue'
import Router from 'vue-router'

import GoodList from './Good/GoodList'
import GoodDetail from './Good/GoodDetail'
import User from './User/User'
import Login from '@/components/User/Login'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以去掉url中的"#/"
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {
        name: 'GoodIndex'
      }
    },
    GoodList,
    ...GoodDetail,
    User,
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
