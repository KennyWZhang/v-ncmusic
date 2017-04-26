import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from '@/page/index'
import list from '@/page/list'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
route.afterEach((from,to)=>{
    console.log(from.name)
})
export default route;
