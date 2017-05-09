const INIT_USERINFO = 'INIT_USERINFO';
const RECORD_USERINFO = 'RECORD_USERINFO';
const OUT_LOGIN = 'OUT_LOGIN';

export default {
	//网页初始化时从本地缓存获取购物车数据
	[INIT_USERINFO](state) {
		let userInfo = Storage.get('userInfo');
		if (userInfo) {
			state.userInfo = userInfo;
		}
	},
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.islogin = true;
	},
	//退出登录
	[OUT_LOGIN](state) {
		state.userInfo = null;
		state.islogin = false;
	},
}
