// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './config/preload'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.directive('infiniteScroll', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding,vnode) {
    // 聚焦元素

    el.addEventListener('scroll',function(e){
    	// let parentNode = el;
    	let childNode = el.childNodes[0];

    	let childHeight = childNode.clientHeight;
    	let parentHeight = el.clientHeight;
    	let scrollTop = el.scrollTop;
    	//滚动到底部执行加载方法
    	if(childHeight - scrollTop + childNode.offsetTop-1 <= parentHeight){
    	  binding.value();
    	}
    })
    
  },
  update:function(el){

  }
})
