<style lang="scss" scoped>
@import '../style/mixin.scss';

footer{
	height:.5rem;
	background:#fff;
	align-items: center;
	display: flex;
	position: absolute;
	z-index: 99;
	bottom: 0;
	width: 100%;
	background-color: #f7f7fa;
	.pic{
		margin-left:.04rem;
		height:.4rem;
		width:.4rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.desc{
		@include flex();
		padding-left:.1rem;
		p{
			font-size:.14rem;
		}
		span{
			font-size:.12rem;
			color:#999;
		}
	}
	.bar{
		i{
			padding-right:.1rem;
			font-size:.2rem;
		}
	}
}

</style>
<template>
	<footer class="tabbar" @click="$router.push({name:'player'})">	
		<div class="pic">
			<img :src="playInfo?playInfo.album.picUrl:'http://p4.music.126.net/qKhyHKOla4OE62iwLhsDgw==/107752139523148.jpg?param=177y177'" alt="">
		</div>
		<div class="desc">
			<p>{{playInfo?playInfo.name:'请选择要播放的音乐'}}</p>
			<span>{{playInfo.artists | artists}}</span>
		</div>
		<div class="bar">
			<i class="iconfont icon-zanting"></i>
			<i class="iconfont icon-zhengzaibofang"></i>
		</div>
		<audio :src="mp3Url"></audio>
	</footer>
</template>
<script>
import musicHeader from './music-header.vue'
import {mapState} from 'vuex'
import fetch from '../config/fetch'
export default{
	components:{
		musicHeader
	},
	props:{

	},
	data(){
		return{
			mp3Url:null,
		}
	},
	created(){
		// console.log(this.playInfo)
	},
	computed:{
		...mapState([
			'playInfo'
		])
	},
	watch:{
		playInfo:function(val){
			if(val){
				this.getMp3Url(this.playInfo.id)
				// console.log(val)
			}
		}
	},
	methods:{
		async getMp3Url(id){
			let re = await fetch('GET','/api/song/enhance/player/url',{ids:[id],'br':999000,'csrf_token':''});
			this.mp3Url = re;
		}
	}
}
</script>