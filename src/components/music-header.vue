<style lang="scss" scoped>
@import '../style/mixin.scss';
nav.parent-nav{
	position:relative;
	top:0;
	left:0;
	width:100%;
	z-index: 100;
	background:$red;

}
.tab{
	height:.44rem;
	width:100%;
	position:relative;
	color:#fff;
}
.navbar{
	position:absolute;
	width:50%;
	left:50%;
	margin-left:-25%;
	height:100%;
	@include disFlex();
}
.navbar__item{
  @include flex();
	background:$red;
	height:100%;
	padding:0;
  text-align:center;
	.iconfont{
		color:#ddd;
		font-size:0.20rem;
		height: .44rem;	
   	line-height: .44rem; 
	}
  &.active{
    i{
      color:#fff;
    }
  }
}
.nav-right{
	position:absolute;
	right:0;
	height:.44rem;
	line-height:.44rem;
	i{
		color:#fff;
		font-size:.16rem;
		padding-right:.1rem;
	}
}
.nav-left{
	.title{
		font-size:.16rem;
		color:#fff;
		padding-left:.06rem;
	}
	@extend .nav-right;
	left:10px;
	right:inherit;
}
.weui-actionsheet{
	min-width:80%;
	width:auto;
	height:100%;
	overflow:hidden;
  transform: translateX(-100%);
  display:flex;
  flex-direction:column;
  &.weui-actionsheet_toggle {
      -webkit-transform: translate(0);
      transform: translate(0);
  }
	.weui-actionsheet__title{
		background-size:100% 100%;
		overflow:hidden;
		height:20%;
		.avatar{
			width:1rem;
			height:1rem;
			border-radius:.5rem;
		}
	}
	.weui-actionsheet__menu{
		flex:1;
		background:#efeff4;
		.weui-cell{
			background:#fcfcfd;
		}
	}
	.weui-actionsheet__action{
		justify-content:center;
		.weui-cell{
			padding:.1rem .2rem;;
		}
	}
	.weui-cell__bd{
		padding-left:.1rem;
	}
}
.gap{
	height:.1rem;
	line-height:.1rem;
}
</style>
<template>
	<nav class="parent-nav">
		<div class="tab">
			<div class="nav-left">
	    	<i class="iconfont icon-list" v-if="contain.menu==true" @click="showMenu=!showMenu"></i>
	    	<i class="iconfont icon-fanhui" v-if="contain.back==true" @click="$router.back()"></i>
	    	<span class="title">{{title}}</span>
			</div>
	    <div class="navbar" v-if="contain.navbar==true">
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='my'}" @click="$router.push({name:'my'})">
          <i class="iconfont icon-yinle"></i>
        </div>
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='discover'}" @click="$router.push({name:'discover'})">
          <i class="iconfont icon-yunyinyue"></i>
        </div>
        <div class="navbar__item" :class="{'active':$route.matched[1].name=='friends'}" @click="$router.push({name:'friends'})">
          <i class="iconfont icon-haoyou"></i>
	        </div>
	    </div>
	    <div class="nav-right">
	    	<i class="iconfont icon-chaxun" v-if="contain.search==true"></i>
	    	<i class="iconfont icon-section" v-if="contain.select==true"></i>
	    </div>
		</div>
		<div class="menu">
      <div class="weui-mask" v-show="showMenu" :style="{opacity:Number(showMenu)}" @click="showMenu=!showMenu"></div>
      <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle':showMenu}">
          <div class="weui-actionsheet__title" :style="userInfo&&'background-image:url('+userInfo.profile.backgroundUrl+')'">
              <div class="avatar" v-if="userInfo">
              	<img :src="userInfo.profile.avatarUrl" alt="">
              </div>
          </div>
          <div class="weui-actionsheet__menu">
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-xiaoxi"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>我的消息</p>
                  </div>
              </a>
              <div class="gap"></div>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-friend"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>我的好友</p>
                  </div>
              </a>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-fujin"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>附近的人</p>
                  </div>
              </a>
              <div class="gap"></div>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-huanfu"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>个性皮肤</p>
                  </div>
              </a>
              <a class="weui-cell weui-cell_access">
                  <div class="weui-cell__hd">
                    <i class="iconfont icon-yunpan"></i>
                  </div>
                  <div class="weui-cell__bd">
                      <p>音乐云盘</p>
                  </div>
              </a>
          </div>
          <div class="weui-actionsheet__action disFlex">
						<a class="weui-cell weui-cell_access">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-night"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>夜间模式</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-shezhi1"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>设置</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access" @click="logout()" v-if="userInfo">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-tuichu"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>退出</p>
						    </div>
						</a>
						<a class="weui-cell weui-cell_access" @click="$router.push({name:'login'})" v-if="!userInfo">
						    <div class="weui-cell__hd">
						      <i class="iconfont icon-erji"></i>
						    </div>
						    <div class="weui-cell__bd">
						        <p>登录</p>
						    </div>
						</a>
          </div>
      </div>
  </div>
	</nav>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default{
	props:{
		contain:{
			type:Object,
			default:()=>{
				return{
					navbar:false,
					back:true,
					menu:false,
					search:false,
					select:false
				}
			}
		},
		title:{
			type:String,
			default:'',
		}
	},
	data(){
		return{
			showMenu:false,
		}
	},
	computed: {
	    ...mapState([
	        'userInfo',
	    ]),
	},
	methods:{
		...mapMutations([
		    'OUT_LOGIN',
		]),
		async logout(){
			this.OUT_LOGIN();
			this.showMenu = false;
			this.$toast('退出成功');
		}
	}
}
</script>