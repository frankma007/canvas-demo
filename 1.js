window.onload=function(){
    var cnv =$$("canvas")
    var cxt =cnv.getContext("2d");
    // cxt.moveTo(50,50);
    // cxt.lineTo(100,50)
    // cxt.lineTo(50,100);

    // cxt.lineTo(100,100)
    cxt.strokeStyle ="#ff0000"
    // cxt.moveTo(50,100);
    // cxt.lineTo(100,100);
    // cxt.lineTo(100,50);
    // cxt.lineTo(100,50);
    // cxt.lineTo(50,50);

    // cxt.lineTo(50,100);
   /*  cxt.strokeRect(50,50,100,100)
   
    cxt.fillStyle="#ffe8e8"
    cxt.fillRect(50,50,100,100)
    cxt.fillStyle="rgba(0,0,255,.3)"
    cxt.fillRect(30,30,100,100) */

    // cxt.stroke()
    // var str =`canvas的宽度为${cnv.width},高度为${cnv.height}`
    // alert(str)
    /* cxt.rect(20,20,100,100)
    cxt.stroke()
    cxt.clearRect(20,20,100,100) */
    // 画箭头
/* cxt.moveTo(40,60);
cxt.lineTo(100,60);
cxt.lineTo(100,30);
cxt.lineTo(150,75);
cxt.lineTo(100,120);
cxt.lineTo(100,90);
cxt.lineTo(40,90);
cxt.lineTo(40,60);
cxt.stroke() */
// 正多边形
/* createPolygon(cxt,4,100,75,50)
cxt.fillStyle ="hotpink"
cxt.fill() */

fivePolygon(cxt)


    var btn =$$("btn")
    btn.onclick=function(){
        cxt.clearRect(0,0,cnv.width,cnv.height)
    }
}
function $$(id){
    return document.getElementById(id)
}
//正多边形
function createPolygon(cxt,n,dx,dy,size){
    cxt.beginPath()
    var degree=(2*Math.PI)/n
    for(var i=0; i<n;i++){
        var x = Math.cos(i*degree)
        var y =Math.sin(i*degree)
        cxt.lineTo(x*size+dx,y*size+dy)
    }
    cxt.closePath()

}
//正五角星
function fivePolygon(cxt){
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 100,
                   -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 100);
        cxt.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 100,
                   -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 100);
    }
    cxt.closePath();
    cxt.stroke();
}