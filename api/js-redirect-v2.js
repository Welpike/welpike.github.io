// Welpike - welpike.github.io

var params = location.search.substring(1);

if(params == ""){
    var url = encodeURIComponent("https://welpike.github.io");
    var delay = 2;
}else{
    params = params.split('&');
    var url = params[0];
    var delay = params[1];
    url = url.substring(url.indexOf("=")+1, url.length);
    delay = delay.substring(delay.indexOf("=")+1, delay.length);
}

if(!delay){
    delay = 2;
}

url = decodeURIComponent(url);

setTimeout("window.location.replace(url)", delay + '000');
