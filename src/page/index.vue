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

.weui-tab{
	background:$red;
	height:0.5rem;
	position:relative;
	color:#fff;
}
.weui-navbar{
	width:50%;
	left:50%;
	margin-left:-25%;
	height:100%;
}
.weui-navbar__item{
	background:$red;
	height:100%;
	padding:0;
	.iconfont{
		color:#fff;
		font-size:0.2rem;
		height: .5rem;	
   	line-height: .5rem; 
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
			<div class="weui-tab">
				<div class="nav-left">
		    	<i class="iconfont icon-list"></i>
					
				</div>
		    <div class="weui-navbar">
		        <div class="weui-navbar__item weui-bar__item_on" @click="$router.push({path:'index/my'})">
	            <i class="iconfont icon-yinle"></i>
		        </div>
	        <div class="weui-navbar__item">
            <i class="iconfont icon-yunyinyue"></i>
	        </div>
	        <div class="weui-navbar__item">
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
  name: 'index',
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
