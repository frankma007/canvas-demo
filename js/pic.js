let imgs =document.getElementsByTagName('img')
//节流函数
 // 函数节流
 function lazyload(fn) {
    let timer = null
    return function () {
        // let context = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this)
                timer = null
            }, 600)
        }
    }
}
fn()
window.onscroll=lazyload(fn)
function fn() {
    //获取视口高度距离
    let  clientH =window.innerHeight|| document.documentElement.clientHeight
    //获取视口的滚动条距离顶部的距离
    let scrollTop = window.pageYoffset|| document.documentElement.scrollTop
    console.log(clientH,scrollTop)
    for(let i =0;i<imgs.length;i++){
        let imgTop =imgs[i].offsetTop
        let x = clientH + scrollTop - imgTop
        if(x >0){
          imgs[i].src=  imgs[i].getAttribute('data-url')
        }

    }
}
 