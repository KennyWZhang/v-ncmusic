let BaseApiUrl;
if (location.host.indexOf('localhost')>-1){
    BaseApiUrl = 'http://localhost:3000';
}else{
    BaseApiUrl = 'http://xx.xx.com/api.php';
}
export {
    BaseApiUrl,
}