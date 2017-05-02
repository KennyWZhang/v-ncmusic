let BaseApiUrl;
if (location.host.indexOf('localhost')>-1){
    BaseApiUrl = '';
}else{
    BaseApiUrl = 'http://music.163.com';
}
export {
    BaseApiUrl,
}