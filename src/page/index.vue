<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../style/mixin.scss';

</style>

<template>
	<div class="parent-container">
		<music-header :contain="{navbar:true,menu:true,search:true}"></music-header>

		<section class="second-container has-footbar">
   		<transition name="router-slide" mode="out-in">
				<router-view></router-view>
			</transition>
		</section>

		<music-footer></music-footer>
	</div>
</template>

<script>
const crypto = require('crypto')
import musicHeader from '../components/music-header.vue'
import musicFooter from '../components/music-footer.vue'
import fetch from '../config/fetch'
export default {
	components:{
		musicFooter,musicHeader
	},
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  	// console.log(this.$route.matched[0].name)
	  const md5sum = crypto.createHash('md5')
	  md5sum.update('9909090')
		let a = fetch('GET','/api/login/cellphone',{phone:'18825188840',password:md5sum.digest('hex'),rememberLogin:true});
		console.log(a)
  }
}
</script>
