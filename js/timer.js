;(function(){
    "use strict";
    class Timer{
        constructor(options){
            this.now = new Date();
            this.date1 = new Date(options.date1) || new Date();
            this.timer = document.querySelector(".gifts .timer");
            this.show();
            this.display();         
        }
        show(){
            let n = Math.floor(this.date1.getTime()-this.now.getTime());
            if(n>=0){
                    this.seconds = Math.floor(n / 1000 % 60);
                    this.minutes = Math.floor(n / 1000 / 60 % 60);
                    this.hours = Math.floor(n / 1000 / 60 / 60 %24);
                    this.days = Math.floor(n / 1000 / 60 / 60 / 24);
                    
            }else{
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
                this.days = 0;  
                clearInterval(t);
            }
            // console.log(this.seconds);
                this.display();
        }
        display(){
            let str = "";
            str = ` <s>
                        <span>${this.days}天</span>
                        <span>${this.hours}时</span>
                        <span>${this.minutes}分</span>
                        <span>${this.seconds}秒 后结束</span>       
                    </s>`;
                    console.log(this.timer)
            this.timer.innerHTML = str;
        }
    }

    clearInterval(t);
    var t = setInterval(()=>{
        new Timer({
            date1:"2019/12/10 11:48:59"            
        });
    },1000);



})();