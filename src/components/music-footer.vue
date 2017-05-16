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
			padding-right:.16rem;
			font-size:.24rem;
		}
	}
}

</style>
<template>
	<footer class="tabbar">	
		<div class="pic"  @click="playInfo&&$router.push({name:'player'})">
			<img :src="playInfo?playInfo.album.picUrl:'http://p4.music.126.net/qKhyHKOla4OE62iwLhsDgw==/107752139523148.jpg?param=177y177'" alt="">
		</div>
		<div class="desc" @click="playInfo&&$router.push({name:'player'})">
			<p>{{playInfo?playInfo.name:'请选择要播放的音乐'}}</p>
			<span v-if="playInfo">{{playInfo.artists | artists}}</span>
		</div>
		<div class="bar">
			<i class="iconfont icon-zanting" v-show="isPlay==false" @click="isPlay=!isPlay"></i>
			<i class="iconfont icon-bofang" v-show="isPlay==true" @click="isPlay=!isPlay"></i>
			<i class="iconfont icon-zhengzaibofang"></i>
		</div>
		<audio :src="playInfo.mp3Url" autoplay="autoplay" ref="player"></audio>
	</footer>
</template>
<script>
import Encrypt from '../config/crypto.js';
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
			isPlay:true,
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
		// playInfo:function(val){
		// 	if(val){
		// 		this.getMp3Url(this.playInfo.id)
		// 		// console.log(val)
		// 	}
		// },
		isPlay:function(val){
			if(val==true){
				this.$refs.player.play();
			}else{
				this.$refs.player.pause();
			}
		}
	},
	methods:{
		// async getMp3Url(id){
		// 	let data = {'ids':[id],'br':999000,'csrf_token':''};
  // 		const cryptoreq = Encrypt(data);
		// 	let re = await fetch('POST','/api/song/enhance/player/url',{params:cryptoreq.params,encSecKey:cryptoreq.encSecKey});
		// 	this.mp3Url = re;
		// },
	}
}
</script>