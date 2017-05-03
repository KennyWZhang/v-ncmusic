import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path:'',
      redirect:'/index'
    },
    {
      path: '/index',name: 'index',
      component: resolve => require(['../page/index.vue'], resolve),
      children:[{
        path:'my',
        component:resolve => require(['../page/index/my.vue'], resolve)
      },{
        path:'news',
        component:resolve => require(['../page/index/news.vue'], resolve)
      },{
        path:'friends',
        component:resolve => require(['../page/index/friends.vue'], resolve)
      }]
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['../page/list.vue'], resolve),
    }
  ]
})
route.afterEach((from,to)=>{
    console.log(from.name)
})
export default route;
