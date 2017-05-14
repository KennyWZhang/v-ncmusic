<style>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
<template>
  <transition name="router-fade" mode="out-in">
	  <div id="app">
	    <router-view></router-view>
	  </div>
  </transition>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'app',
  data(){
    return{

    }
  },
  methods:{
    ...mapMutations([
        'INIT_USERINFO','INIT_PLAYINFO'
    ]),
  },
  created(){
    this.INIT_USERINFO();
    this.INIT_PLAYINFO();
  }
}
</script>
<style lang='scss'>
  @import 'style/common.scss';
  @import url('http://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css');
  @import url('http://at.alicdn.com/t/font_pwvrh2eklceuerk9.css')
</style>

