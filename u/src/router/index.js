import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Loge from '@/components/loge'
import Zc from '@/components/zc'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Loge',
      name: 'Loge',
      components:{a: Loge}
    },
    {
      path: '/Zc',
      name: 'Zc',
      components:{b: Zc}
    }
  ]
})
