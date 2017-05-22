# v-ncmusic 

> 一个基于vue2的网易云音乐移动web版

> a vue project base on Vue && 163music API

## 在线版

<a href="http://c.damaiplus.com/tn/web/bull-backup/dist/#/index/discover/songList" target="_blank">预览地址</a>

## 歌单列表
<br><img width="300" src="https://github.com/ron0115/v-ncmusic/blob/master/screenshots/songlist1.png">

## 歌单详情
<br><img width="300" src="https://github.com/ron0115/v-ncmusic/blob/master/screenshots/albumDetail.png">

## 工具&技能
`vue` + `vuex`+ `vue-router` 

`sass` + `weui` 纯css 并没有用到现成的一些开源组件库。

`http-proxy-middleware` 伪造请求头


## 目前实现功能

### 歌单
- [x] 精品歌单
- [x] 歌单详情

### 用户
- [x] 登录 （仅dev环境可用）

### 播放音乐
- [x] 本地缓存播放状态
- [x] 播放
- [x] 暂停

### 歌单
- [x] 播放



## TODO
### 音乐播放
- [x] 上一曲
- [x] 下一曲
- [x] 进度控制
- [x] 音量控制

### 音乐搜索
输入搜索关键词，`回车键`搜索，或者点击`放大镜`图标
- [x] 单曲(单击或双击歌曲添加至音乐播放列表，部分音乐会存在版权问题无法播放)
- [x] 歌手
- [x] 专辑
- [x] MV
- [x] 歌单(左键点击进入歌单列表)
- [x] 主播电台 (单期节目部分单击或双击歌曲添加至音乐播放列表，目前不存在版权问题)
- [x] 用户

### 播放列表
- [x] 切歌(单击切歌)
- [x] 删歌(鼠标悬浮在要删除的歌曲上，点击右侧小X)
- [x] 清空播放列表
- [x] 本地缓存播放列表


## 一些注意事项
项目中使用了官方的接口，需要使用`http-proxy-middleware`进行转发，开发环境下需要在`config/index.js`中的`dev`中添加下列配置即可，注意：使用官方api的功能线上不可用，如登录功能。
```
proxyTable: {
  '/api': {
      target: 'http://music.163.com',
      changeOrigin: true,
      headers: {
          Referer: 'http://music.163.com/'
      }
  }
}
```


## RECENT

- before May ——搭建项目框架，主要是fetch封装与vue-router的配置。
- 0501-0506 ——搭建Sass的开发环境，编写主框架的样式
- 0506 —— 更新songList与无限滚动指令。
- 0507 —— debounce完善infiniteScroll指令
- 0508 —— 歌单页（专辑页）的样式开发。
- 0522 —— 一直没有时间更新文档，增加了v-loading,v-infiniteScroll 组件，增加生产环境的api地址（感谢各位大牛的贡献）。对VUEX进行大幅度的修改。



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


> 前期开发的API来自网易云音乐官方，感谢[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)的整理

> 后期统一替换为线上环境的API，感谢[journey-ad](https://github.com/journey-ad),[java Swing](https://github.com/javaSwing/MusicAPI),提供在线的API地址供使用。
