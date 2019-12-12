;(function(){
    "use strict";

    class GoodsList{
        constructor(){
            this.url = "http://localhost/project_konka/data/goods.json";
            this.goodsBox = document.querySelector(".goods-list ul");
            this.load();
            this.getCookie();
            this.addEvent();

        }

        load(){
            var that = this;
            ajaxGet(this.url,function(res){
                that.res = JSON.parse(res);                
                // console.log(that.res);
                that.getMsg();
                that.display();
            });
        }
        getCookie(){
            this.goodsS = JSON.parse(getCookie("goodsSear"));
        }
        
        getMsg(){
            // console.log(this.res);
            this.goodsArr = [];
            for(let i=0;i<this.res.length;i++){
                if(this.res[i].name.includes(this.goodsS)){
                    this.goodsArr.push(this.res[i]);
                    
                }
            }
            // console.log(this.goodsArr)
            
        }

        display(){
            let str = "";
            for(let i=0;i<this.goodsArr.length;i++){
                str += `
                <li>
                    <a class="abox" index="${this.goodsArr[i].Id}">
                            <img src="${this.goodsArr[i].oneimg}" title="${this.goodsArr[i].name}" index="${this.goodsArr[i].Id}">
                            <h4>${this.goodsArr[i].name}</h4>
                            <h5>${this.goodsArr[i].description}</h5>
                            <p>${this.goodsArr[i].price}</p>
                            <em class="addCar">加入购物车</em>
                        </a>
                    </li>
                    `
            }
            
            this.goodsBox.innerHTML = str;
        }

        addEvent(){
            let that = this;
            this.goodsBox.addEventListener("click",function(eve){
                let e = eve || window.event;
                let target = e.target || e.srcElement;
                if(target.className == "addCar"){
                    that.goodsId = target.parentNode.getAttribute("index");
                    that.setCookie();
                }

                console.log(target.tagName)
                if(target.tagName == "IMG"){
                    that.index = target.parentNode.getAttribute("index");
                    that.setCookie2();
                    location.href = "goodsDetails.html";
                }
            });            
            
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

        // 保存当前点击的信息
        setCookie2(){
            for(let i=0;i<this.res.length;i++){
                if(this.index == this.res[i].Id){
                    setCookie("goodsInfo",JSON.stringify(this.res[i]));
                    console.log(this.res[i]); 
                }
            }
        }
    }


    new GoodsList();
    


})();