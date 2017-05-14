<style lang="scss" scoped>
@import './../style/mixin.scss';
.router-up-enter-active, .router-up-leave-active {
    transition: all .4s;
    opacity:0;
}
.router-up-enter, .router-up-leave-active {
    transform: translate3d(0, 100%, 0);
    opacity:1;
}
section{
	padding-top:0.4rem;
	padding-bottom:0.3rem;
	.weui-cell__hd{
		padding-right:.1rem;
	}
}
.weui-btn{
	border-radius:.2rem;
	margin:0 .1rem;
}
</style>
<template>
  <transition name="router-up" mode="out-in">
    <div>
      <div class="blur-background" :style="playInfo&&'background-image:url('+playInfo.album.picUrl+')'">
        <div class="weui-mask"></div>
      </div>
      <music-header :title="playInfo.name" :desc="playInfo.artists | artists" :contain="{share:true,back:true}" class="transparent-nav"></music-header>
    </div>
  </transition>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
import musicHeader from '../components/music-header.vue'
import fetch from '../config/fetch'
export default {
  components:{
    musicHeader
  },
  data () {
    return {

    }
  },
  computed:{
    ...mapState([
      'playInfo'
    ])
  },
  watch:{
    playInfo:function(val){
      if(val){
        this.playInfo = val;
      }
    }
  },
  created(){

  },
  filters: {

  },
  methods:{
  	...mapMutations([
  	    'INIT_PLAYINFO',
  	]),
  }
}
</script>