import Vue from 'vue'
import Router from 'vue-router'
import Colors from '@/components/colors/Colors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'colors',
      component: Colors
    },
    {
      path: '/*',
      redirect: {
        name: 'colors'
      }
    }
  ]
})
