<template>
  <div class="hello">
    {{msg}}
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
  	let a = fetch('GET','/top_artists?offset=0&limit=30');
  	console.log(a)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
