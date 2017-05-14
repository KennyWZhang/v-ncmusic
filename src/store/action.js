import fetch from '../config/fetch';
export default {
	async sign({
		commit,
		state
	}) {
		let res = await fetch('GET','/api/point/dailyTask',{type:1});
		if(res.code==200){
			commit('SIGN_IN');
		}
	},
	async selectSong({
		commit,
		state
	},songInfo) {
		commit('RECORD_PLAYINFO',songInfo);
		//加载音乐资源
		// let res = await fetch('GET','/api/point/dailyTask',{type:1});
		// if(res.code==200){
		// 	commit('SIGN_IN');
		// }
	}
}