# v-ncmusic 
> 一个基于vue2的网易云音乐移动web版

> a vue project base on Vue && 163music API

> API来自网易云音乐官方，感谢[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)的整理

##歌单列表
<br><img width="300" src="https://github.com/ron0115/v-ncmusic/blob/master/screenshots/songlist1.png">

##歌单详情
<br><img width="300" src="https://github.com/ron0115/v-ncmusic/blob/master/screenshots/albumDetail.png">


- before May ——搭建项目框架，主要是fetch封装与vue-router的配置。
- 0501-0506 ——搭建Sass的开发环境，编写主框架的样式
- 0506 —— 更新songList与无限滚动指令。
- 0507 —— debounce完善infiniteScroll指令
- 0508 —— 歌单页（专辑页）的样式开发。

> 计划：
1.决定不再混入框架的样式,故计划删除weui。

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
