<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './../style/mixin.scss';
.desc-head{
  .weui-media-box{
    align-items: flex-start;
    .weui-media-box__title{
      padding-top:.1rem;
    }
  }
  .weui-media-box__desc{
    @include disFlex();
    align-items: center;
    font-size:.12rem;
    padding-top:.1rem;
    .avatar{
      $width:0.2rem;
      @include wh($width,$width);
      overflow:hidden;
      border-radius: $width/2;
      img{
        width:100%;
        height:100%;
      }
    }
    span{
      padding-left: .04rem;
    }
  }
  .flex{
    text-align: center;
    z-index: 1;
    i{font-size:.2rem;}
    i,p{
      text-align:center;
      color:#000;
    }
  }
}
</style>

<template>
	<div class="parent-container">
    
    <music-header title="歌单" :contain="{back:true,search:true,select:true}"></music-header>
    <section class="second-container has-footbar" v-if="data">
      <header class="desc-head">  
        <div class="background" :style="'background-image:url('+ data.coverImgUrl +')'"></div>
        <div class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="data.coverImgUrl" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h3 class="weui-media-box__title">{{data.name}}</h3>
            <div class="weui-media-box__desc">
              <div class="avatar">
                <img :src="data.creator.avatarUrl" alt="">
              </div>
              <span>{{data.creator.nickname}}</span>
              <i class="iconfont icon-next"></i>
            </div>
          </div>
        </div>
        <div class="disFlex">
          <div class="flex">
            <i class="iconfont icon-tianjia"></i>
            <p>2123</p>
          </div>
          <div class="flex">
            <i class="iconfont icon-pinglun"></i>
            
          </div>
          <div class="flex">
            <i class="iconfont icon-fenxiang"></i>
            
          </div>
          <div class="flex">
            <i class="iconfont icon-xiazai"></i>
            
          </div>
        </div>
      </header>
      <section>
        <a href="javascript:void(0);" class="disFlex" v-for="x in data.tracks">
          <a class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" src="" alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">{{x.name}}</h4>
                <p class="weui-media-box__desc">{{x.artists | artists}}</p>
            </div>
          </a>
          <a class="weui-media-box flex">
            <i class="iconfont icon-section"></i>
          </a>
        </a>
      </section>
    </section>
    <music-footer></music-footer>

	</div>
</template>

<script>
import musicHeader from '../components/music-header.vue'
import musicFooter from '../components/music-footer.vue'

import fetch from '../config/fetch'
export default {
  components:{
    musicHeader,musicFooter
  },
  data () {
    return {
      id: this.$route.params.id,
      data:''
    }
  },
  created(){
    this.getData();
  },
  filters: {
    artists: function (value) {
      let string='';
      for(var x of value){
        string += x.name+',';
      }
      return string.substring(0,string.length-1);
    }
  },
  methods:{
    async getData(){
      let re = await fetch('GET','/api/playlist/detail',{id:this.id});
      this.data = re.result;
    },
  }
}
</script>