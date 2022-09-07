// Welpike - welpike.github.io
function redirect(url,delay){
    url = new URL(url);
    setTimeout("document.location.replace(url)", delay + '000');
}