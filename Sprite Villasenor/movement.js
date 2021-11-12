var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var img = [];
img.length = 15;


for(var i = 1 ; i < img.length ; i++){
    img[i] = new Image();
    img[i].src = 'Run (' + i.toString() + ').png';
}
var i = 1;
setInterval(function(){
    i++;
    if( i >= 10){
        i = 1;
    }
    c.drawImage(img[i],300,350,200,200);
    c.clearRect(300,350,200,200);
    c.drawImage(img[i],300,350,200,200);
},100)
