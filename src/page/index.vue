<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../style/mixin.scss';
.router-index-enter-active, .router-index-leave-active {
    transition: all .4s;
}
.router-index-enter, .router-index-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}

.tab{
	background:$red;
	height:0.5rem;
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
		font-size:0.24rem;
		height: .5rem;	
   	line-height: .5rem; 
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
	height:.5rem;
	line-height:.5rem;
	padding-right:10px;
	i{color:#fff;}
}
.nav-left{
	@extend .nav-right;
	left:10px;
}


</style>

<template>
	<div class="">
		<header>
			<div class="tab">
				<div class="nav-left">
		    	<i class="iconfont icon-list"></i>
					
				</div>
		    <div class="navbar">
	        <div class="navbar__item" :class="{'active':$route.name=='my'}" @click="$router.push({name:'my'})">
            <i class="iconfont icon-yinle"></i>
	        </div>
	        <div class="navbar__item" :class="{'active':$route.name=='news'}" @click="$router.push({name:'news'})">
            <i class="iconfont icon-yunyinyue"></i>
	        </div>
	        <div class="navbar__item" :class="{'active':$route.name=='friends'}" @click="$router.push({path:'friends'})">
            <i class="iconfont icon-haoyou"></i>
 	        </div>

		    </div>
		    <div class="nav-right">
		    	<i class="iconfont icon-chaxun"></i>
		    </div>
			</div>
		</header>
		<section>
     	<transition name="router-index" mode="out-in">
				<router-view></router-view>
			</transition>
		</section>
		<footer>
			
		</footer>
	</div>
</template>

<script>
import fetch from '../config/fetch'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	let a = fetch('GET','/api/artist/albums/166009',{id:166009,offset:0,total:true,limit:5});
  	console.log(a)
  }
}
</script>
