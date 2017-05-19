import fetch from '../config/fetch';
import {getUrl} from '../config/api';

export default {
	async sign({commit,state}) {
		let res = await fetch('GET','/api/point/dailyTask',{type:1});
		if(res.code==200){
			commit('SIGN_IN');
		}
	},
	async initLocal({commit,dispatch,state}){
		await commit('INIT_USERINFO');
		commit('INIT_PLAYINFO');
		// dispatch('initAudio',dom);
	},
	async initAudio({commit,state},dom){
		await commit('INIT_AUDIO',dom);
		try{
			dom.src = state.playInfo.mp3Url
		}catch(e){
			// throw new Error();
		}
	},
	async selectSong({commit,state},playInfo) {
		commit('RECORD_PLAYINFO',playInfo);
		let id = playInfo.id;
		let re = await getUrl(id);
		if(re.code==200) {
			state.musicDom.src = re.data[0].url;
		}
	},
	async play({commit,state}){
		if (state.playState==false){
      state.musicDom.play();
      commit('PLAY')
    }else {
      state.musicDom.pause();
      commit('PAUSE')
    }
	}
}