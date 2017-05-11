import fetch from '../config/fetch';
export default {
	async sign({
		commit,
		state
	}) {
		let res = await fetch('POST','/api/point/dailyTask',{type:0});
		if(res.code==200){
			commit('SIGN_IN');
		}
	}
}