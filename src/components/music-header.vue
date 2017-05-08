<style lang="scss" scoped>
@import '../style/mixin.scss';
nav.parent-nav{
	position:relative;
	top:0;
	left:0;
	width:100%;
	z-index: 100;
}
.tab{
	background:$red;
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
		font-size:.18rem;
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
</style>
<template>
	<nav class="parent-nav">
		<div class="tab">
			<div class="nav-left">
	    	<i class="iconfont icon-list" v-if="contain.menu==true"></i>
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
	</nav>
</template>
<script>

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

		}
	},
	methods:{

	}
}
</script>