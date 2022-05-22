window.onload = function() {
    //var url = "a.jpg".split(',');
    var url=[];
    url[0] = '01.png';
    url[1] = '02.png';
    url[2] = '03.png';
    url[3] = '04.png';
    url[4] = '05.png';
    url[5] = '06.png';
    url[6] = '07.png';

    var n = Math.floor(Math.random()*url.length);
    var elm = document.getElementById("container");
    elm.style.backgroundImage = 'url(./photo/' + url[n] + ')';
}
