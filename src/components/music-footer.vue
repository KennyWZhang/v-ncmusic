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
			@include multiTextOverflow(1);
		}
		span{
			font-size:.12rem;
			color:#999;
			@include multiTextOverflow(1);
			
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
			<img :src="playInfo?playInfo.al.picUrl:'../../../static/img/default_cover.png'" alt="">
		</div>
		<div class="desc" @click="playInfo&&$router.push({name:'player'})">
			<p>{{playInfo?playInfo.name:'请选择要播放的音乐'}}</p>
			<span v-if="playInfo">{{playInfo.ar | artists}}</span>
		</div>
		<div class="bar">
			<i class="iconfont" :class="playState?'icon-bofang':'icon-zanting'" @click="play"></i>
			<i class="iconfont icon-zhengzaibofang"></i>
		</div>
	</footer>
</template>
<script>
import Encrypt from '../config/crypto.js';
import musicHeader from './music-header.vue'
import {mapState,mapActions} from 'vuex'
import fetch from '../config/fetch'
export default{
	components:{
		musicHeader
	},
	props:{

	},
	data(){
		return{

		}
	},
	created(){
		// console.log(this.playInfo)
	},
	computed:{
		...mapState([
			'playInfo','playState'
		])
	},
	watch:{

	},
	methods:{
		...mapActions([
			'play'
		])
		// async getMp3Url(id){
		// 	let data = {'ids':[id],'br':999000,'csrf_token':''};
  // 		const cryptoreq = Encrypt(data);
		// 	let re = await fetch('POST','/api/song/enhance/player/url',{params:cryptoreq.params,encSecKey:cryptoreq.encSecKey});
		// 	this.mp3Url = re;
		// },
	}
}
</script>