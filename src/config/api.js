import fetch from './fetch'
const API = 'https://api.imjad.cn/cloudmusic/';
const _API = 'http://musicapi.duapp.com/api.php';

//取得音乐地址
export let getUrl = (id) => fetch('GET',API, {
	type:'song',
	br:128000,
	id:id
})

//推荐歌单
export let getSongList= (offset) => fetch('GET',_API,{
	offset:offset,
	limit:10,
	type:'topPlayList',
	cat:'全部'
});

//歌单详情
export let getAlbumDetail = (id) => fetch('GET',API,{
	type:'playlist',
	id:id,
})