<style lang="scss" scoped>
@import '../style/mixin.scss';

footer{
	height:.5rem;
	background:#fff;
	align-items: center;
	display: flex;
	position: absolute;
	z-index: 500;
	bottom: 0;
	width: 100%;
	background-color: #f7f7fa;
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
	<footer class="tabbar">	
		<div class="pic">
			<img src="" alt="">
		</div>
		<div class="desc">
			<p>sf</p>
			<span>dfdf</span>
		</div>
		<div class="bar">
			<i class="iconfont icon-zanting"></i>
			<i class="iconfont icon-zhengzaibofang"></i>
		</div>
	</footer>
</template>
<script>

export default{
	props:{

	},
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>