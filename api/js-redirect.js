// Welpike - welpike.github.io
var param = location.search.substring(1);if(param == ""){param = encodeURIComponent("https://welpike.github.io");}var url = param.substring(param.indexOf("=")+1, param.length);var delay = 2;url = decodeURIComponent(url);setTimeout("window.location.replace(url)", delay + '000');
