;(function(){
    "use strict";

    // 详情页
    class Details{
        constructor(){
            this.headBox = document.querySelector(".main-head");
            this.smallImg = document.querySelector(".small-swiper ul");
            this.imgBox = document.querySelector(".imgBox");
            this.contBox = document.querySelector(".main-cont-r .contBox");
            this.btnBuy = document.getElementById("btn-buy");
            this.btnAdd = document.getElementById("btn-buy");
            this.getCookie();
            this.addEvent();
        }
        getCookie(){
            this.info = JSON.parse(getCookie("goodsInfo"));
            // console.log(this.info);
            this.display();
        }
        display(){
            let str = "";
            let str1 = "";
            let str2 = "";
            let str3 = "";
            // var [str,str1,str2] = "";
            str = `
                <a href="">${this.info.tag}</a>
                <i>&gt;</i>
                <a href="">${this.info.classify}</a>
                <i>&gt;</i>
                <span>${this.info.name}</span>
            `;                           
            for(let i=0;i<this.info.img.length;i++){
                str1 += `<li>
                            <img src="${this.info.img[i]}">
                        </li>
                        `;
                
            }
            str2 = `
                    <div class="sBox">
                        <img src="${this.info.oneimg}"/>
                        <span></span>
                    </div>
                    <div class="bBox">
                        <img src="${this.info.oneimg}">
                    </div>
                    `;
            str3 = `
                    <h3>${this.info.name}</h3>
                    <p>${this.info.description}</p>
                    <div class="price">
                        <b>${this.info.price}</b><span>&nbsp;${this.info.oprice}</span>
                        <a href=""><i></i><img src="images/qrcode.png" alt=""> 手机购买</a>
                    </div>
                    `;            
            this.headBox.innerHTML = str;
            this.smallImg.innerHTML = str1;
            this.imgBox.innerHTML = str2;
            this.contBox.innerHTML =str3;            
        }

        addEvent(){
            this.btnBuy.onclick = ()=>{
                // location.href = "shoppingCart.html";
            }
            this.btnAdd.onclick = ()=>{
                that.setCookie();
            }
        }

        setCookie(){
            this.goodsMsg = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : [] ;
            // console.log(this.goodsMsg);

            if(this.goodsMsg.length<1){
                console.log(this.goodsId)
                this.goodsMsg.push({
                    id:this.goodsId,
                    num:1
                })
            }else{
                var onoff = this.goodsMsg.some((val,idx)=>{
                    this.i = idx;
                    return val.id == this.goodsId;
                });
                if (onoff) {
                    this.goodsMsg[this.i].num++;                
                }else{
                    this.goodsMsg.push({
                        id:this.goodsId,
                        num:1
                    });
                }
            }
            setCookie("goodsCookie",JSON.stringify(this.goodsMsg));

        }
    }

    new Details();


    // 倒计时

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
            this.timer.innerHTML = str;
        }
    }

    clearInterval(t);
    var t = setInterval(()=>{
        new Timer({
            date1:"2019/12/12 11:59:59"            
        });
    },1000);






    // 选项卡
    class Tab{
        constructor(){
            this.tabA = document.querySelectorAll(".details-panel a");
            this.oli= document.querySelector(".details-cont li");
            this.img = ["images/shouhou1.jpg","images/details2.jpg"];
            this.init();
        }
        init(){
            
            for(let i=0;i<this.tabA.length;i++){
                this.tabA[i].index = i;
                this.tabA[i].onclick = ()=>{
                    for(let j=0;j<this.tabA.length;j++){
                        this.tabA[j].className = "";
                    }
                    this.tabA[i].className = "active";
                    this.display(i);
                }
            }
        }
        display(i){
            let str = "";
            str = `
            <img src="${this.img[i]}">
            `;
            this.oli.innerHTML = str;
            console.log(this.img[i])

        }
    }

    new Tab();

})();