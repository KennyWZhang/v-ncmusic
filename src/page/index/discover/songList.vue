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
    color:#fff;
  }
  h3{
    font-size:14px;
  }
  p{
    color:#eee;
    font-size:12px;
    @include multiTextOverflow(1);
  }
}
.weui-media-box_appmsg{
  &:before{
    display:none;
  }
}
.weui-media-box_appmsg .weui-media-box__hd{
  @include wh(80px,80px)
}

.background{
  padding:10px 0;
  background-position: center center;
  filter: blur(20px);
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
      &:nth-child(2n+1){
        padding-right:1px;
      }
      img{
        width:100%;
        height:100%;
      }
    }
    .text{
      padding: 10px;
      p{
        @include multiTextOverflow(2);
        padding-right:20%;
      }
    }
  }
}
nav{
  padding:10px 0px;
  .btn{
    border:1px solid #999;
    border-radius:20px;
    padding:5px 20px;
  }
}
</style>

<template>
	<div class="second-container has-navbar" v-if="data.length > 0"  v-infiniteScroll="getData">
    <div class="inner-container">
		<header>
      <div class="background" :style="'background-image:url('+ data[0].coverImgUrl +')'"></div>
  		<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="data[0].coverImgUrl" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">精品歌单</h4>
          <h3 class="weui-media-box__title">{{data[0].name}}</h3>
          <p class="weui-media-box__desc">{{data[0].description}}</p>
        </div>
      </a>
		</header>
    <nav>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <span class="btn">全部歌单</span>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </nav>
    <transition name="showlist" v-if="data">
      <section>
        <div class="list">
          <div class="item" v-for="(x,index) in data">
            <div class="pic" :style="{'height':itemHeight+'px'}">
              <img :src="x.coverImgUrl" alt="">
            </div>
            <div class="text">
              <p>{{x.name}}</p>
            </div>
          </div>
        </div>
      </section>
    </transition>
    </div>
	</div>
</template>

<script>
import fetch from '../../../config/fetch'
export default {
  data () {
    return {
      data:[],
      offset:0,
      // listNode:null,
      itemHeight:window.innerWidth/2,
    }
  },
  created(){
    this.getData();
  },
  mounted(){

  },
  computed:{
  },
  methods:{
    async getData(){
      let re = await fetch('GET','/api/playlist/list',{offset:this.offset,limit:10,order:'hot'});
      this.data = this.data.concat(re.playlists);
      this.offset += 10;
    },
  }
}
</script>