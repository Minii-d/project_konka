;(function(){
    class Swiper{
        constructor(){
            this.aImg = document.querySelectorAll(".imgBox a");
            this.left = document.querySelector(".btns #left");
            this.right = document.querySelector(".btns #right");
            this.index = 0;
            this.iprev = this.aImg.length-1;
            console.log(this.left)
            this.addEvent();
        }
    
        addEvent(){
            this.left.onclick = ()=>{
                // this.changeIndexLeft();
                console.log(1);
            }
            this.right.onclick = ()=>{
                // this.changeIndexRight();
                console.log(2)
    
            }
        }
    }
    
    new Swiper();

})();