<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import './../../../style/mixin.scss';
.showlist-enter-active, .showlist-leave-active {
  transition: all .3s;
  transform: translateY(0);
}
.showlist-enter, .showlist-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}
header{
  position:relative;
  h4,h3{
    color:#eee;
  }
  h3{
    font-size:14px;
  }
}
.weui-media-box_appmsg .weui-media-box__hd{
  @include wh(80px,80px)
}

.background{
  padding:10px 0;
  background-position: center center;
  filter: blur(10px);
  position:absolute;
  width:100%;
  top:0;
  left:0;
  height:100%;
}
.list{
  @include disFlex();
  flex-wrap:wrap;
  .item{
    width:50%;
    .pic{
      width:100%;
      height:50px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
}
</style>

<template>
	<div class="">
		<header>
      <div class="background" :style="'background-image:url('+ data[0].coverImgUrl +')'"></div>
  		<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="data[0].coverImgUrl" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">精品歌单</h4>
          <h3 class="weui-media-box__title">标题一</h3>
          <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
        </div>
      </a>
		</header>
    <transition name="showlist" v-if="data">
      <section>
        <div class="list">
          <div class="item" v-for="(x,index) in data">
            <div class="pic" :style="{'height':itemHeight+'px'}">
              <img :src="x.coverImgUrl" alt="">
            </div>
            <p></p>
          </div>
        </div>
      </section>
    </transition>
	</div>
</template>

<script>
import fetch from '../../../config/fetch'
export default {
  data () {
    return {
      data:null,
      itemHeight:window.innerWidth/2
    }
  },
  created(){
    this.getData();
  },
  methods:{
    async getData(){
      let a = await fetch('GET','/api/playlist/list',{offset:0,limit:10,order:'hot'});
      this.data = a.playlists;
    }
  }
}
</script>