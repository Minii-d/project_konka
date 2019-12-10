;(function(){
    class Swiper{
        constructor(){
            this.a = document.querySelectorAll(".imgBox a");
            this.left = document.querySelector(".btns .left");
            this.right = document.querySelector(".btns .right");
            this.index = 0;
            // console.log(this.left)
            this.iprev = this.a.length-1;
            this.addEvent();
        }
    
        addEvent(){
            this.left.onclick = ()=>{
                this.changeIndexLeft();
            }
            this.right.onclick = ()=>{
                this.changeIndexRight();
    
            }
        }
        changeIndexLeft(){
            if (this.index == 0) {
                this.index = this.a.length-1;
                this.iprev = 0;
            } else {
                this.iprev = this.index;
                this.index--;
            }
            this.setActive(-1);
        }
        changeIndexRight(){
            if (this.index == this.a.length-1) {
                this.index = 0;
                this.iprev = this.a.length-1;
            } else {
                this.iprev = this.index;
                this.index++;
                this.setActive(1);
            }
        }
        setActive(type){
        this.a[this.iprev].style.left = 0;
        move(this.a[this.iprev],{left:-this.a[0].offsetWidth*type});
        this.a[this.index].style.left = this.a[0].offsetWidth*type + "px";
        move(this.a[this.index],{left:0});
        }
    }
    
    new Swiper();

  //运动  
 function move (ele,data,cb){
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var onoff = true;
        for(var i in data){
            var distanceNow = parseInt(getStyle(ele,i));
            var speed = (data[i] - distanceNow) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (distanceNow != data[i]) {
                onoff = false;
            }
            ele.style[i] = distanceNow + speed + "px";
        }
        if (onoff) {
            clearInterval(ele.t);
            cb && cb();
        }
    }, 30);
}
//获取元素
function getStyle(ele,attr){
    if (getComputedStyle) {
        return getComputedStyle(ele,false)[attr];   
    } else {
        return ele.currentStyle[attr];
    }
}

})();