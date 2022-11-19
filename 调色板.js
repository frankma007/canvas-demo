window.onload=function(){
    var cnv =$$("canvas")
    var cxt =cnv.getContext("2d");
    

    // arcToFn(cxt)
     createRoundedRect(cxt, 70, 60, 10, 30, 30) 
     cxt.fillStyle = "HotPink";
     cxt.fill();

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
// 调色板
function colors(cxt){
    for(var i =0; i<6;i++){
        for(var j=0;j<6;j++){
            cxt.fillStyle = `rgb(${Math.floor(255 - 42.4*i)},${Math.floor(255 - 42.4*j)},0)`
            debugger
            cxt.fillRect(j*25,i*25,25,25)
        }

    }
}
// 渐变调色板
function jianban(cxt,cnv){


    // cxt.beginPath();
    var r = 255, g = 0, b = 0;
    for (i = 0; i < 150; i++) {
        if (i < 25) {
            g += 10;
        } else if (i > 25 && i < 50) {
            r -= 10;
        } else if (i > 50 && i < 75) {
            g -= 10;
            b += 10;
        } else if (i >= 75 && i < 100) {
            r += 10;
        } else {
            b -= 10;
        }
        cxt.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        cxt.fillRect(3 * i, 0, 3, cnv.height);
}
}
//绘制曲线
function quxian(cxt){

// 半圆
    cxt.beginPath();
    cxt.arc(80,80,50,0,180*Math.PI/180,true)
    cxt.closePath();
    cxt.strokeStyle="hotpink"
    cxt.stroke();
    // 整圆
    cxt.beginPath();
    cxt.arc(120,80,50,0,360*Math.PI/180,true)
    cxt.closePath();
    cxt.strokeStyle="hotpink"
    cxt.stroke();
    //弧度
    cxt.beginPath();
    cxt.arc(70,70,50,0,-90*Math.PI/180,true)
    cxt.closePath();
    cxt.strokeStyle="hotpink"
    cxt.stroke();
    cxt.fillStyle="black"
    cxt.fill()
    

}
//填充圆弧测试
function fillCirl(cxt){
    cxt.beginPath();
    cxt.arc(80,80,50,0,190*Math.PI/180,true)
    cxt.closePath();
    cxt.strokeStyle="hotpink"
    cxt.stroke();
    cxt.fillStyle="black"
    cxt.fill()
    cxt.beginPath();
    //整圆
    cxt.arc(120,90,50,0,360*Math.PI/180,true)
    cxt.closePath();
    cxt.strokeStyle="hotpink"
    cxt.stroke();
    cxt.fillStyle="green"
    cxt.fill()
    // 绘制弧度
    cxt.beginPath();
    //整圆
    cxt.arc(120,120,50,0,-60*Math.PI/180,true)
    cxt.closePath();
    cxt.stroke();
}
function arcToFn(cxt){
    cxt.moveTo(20,20)
    cxt.lineTo(70,20)
    cxt.arcTo(120,20,120,70,50)
    cxt.lineTo(120,120)

    cxt.stroke();

}
//圆角矩形
function arcToFn(cxt){
    cxt.moveTo(60,20)
    cxt.lineTo(160,20)
    cxt.arcTo(180,20,180,40,20)
    cxt.lineTo(180,110)
    cxt.arcTo(180,130,160,130,20)
    cxt.lineTo(60,130)
    // cxt.lineTo(40,130)

    cxt.arcTo(40,130,40,110,20)
    cxt.lineTo(40,110)
    cxt.lineTo(40,40)
    cxt.arcTo(40,20,60,20,20)




    cxt.stroke();

}

 /*
         * createRoundedRect()用于绘制圆角矩形
         * width、height：分别表示长和宽
         * r：表示圆角半径
         * offsetX、offsetY：分别表示左上角顶点坐标
         */
 function createRoundedRect(cxt, width, height, r, offsetX, offsetY) {
    cxt.beginPath();
    cxt.moveTo(offsetX + r, offsetY);
    cxt.lineTo(offsetX + width - r, offsetY);
    cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
    cxt.lineTo(offsetX + width, offsetY + height - r);
    cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);
    cxt.lineTo(offsetX + r, offsetY + height);
    cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);
    cxt.lineTo(offsetX, offsetY + r);
    cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
    cxt.closePath();
}