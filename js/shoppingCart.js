;(function(){
    "use strict";

    class Cart{
        constructor(){
            this.url ="http://localhost/project_konka/data/goods.json";
            this.tbody = document.querySelector("tbody");
            this.sumNum = document.querySelector(".finally span");
            this.sumPrice = document.querySelector(".finally em");
            this.amountBtn = document.querySelector(".amount");

            this.oneNum = document.querySelector(".change-number #one");

            
            // console.log(this.sumNum);
            this.ajaxLoad();
            // console.log(this.sumPrice);

        }

        ajaxLoad(){
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res);
                // console.log(this.res);
                this.getCookie();                
            });
        }

        getCookie(){
            this.goodsMsg = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : [];
            
            this.display();
        }

        display(){
        //    console.log(this.goodsMsg);
            let str = "";
            let sum = 0;
            let oneSum = 0;
            for(let i=0;i<this.goodsMsg.length;i++){
                for(let j=0;j<this.res.length;j++){
                    if(this.goodsMsg[i].id == this.res[j].Id){
                        // 单个总计金额
                        this.total = parseFloat((this.res[j].price).slice(1));
                        sum += this.total;
                        oneSum += parseFloat(this.oneNum.value);
                        // console.log(oneSum);
                        // console.log(this.total);
                        // console.log(sum);
                      
                        str +=`<tr index="${this.goodsMsg[i].id}"  align="center">
                                    <td><input type="checkbox"></td class="checkbox">
                                    <td class="details">
                                        <a href="" class="img">
                                            <img src="${this.res[j].oneimg}"/>
                                        </a>
                                        <div class="cont">
                                            <h5><a href="">${this.res[j].name}</a></h5>
                                            <h6>${this.res[j].classify}</h6>
                                            <p>${this.res[j].description}</p>
                                        </div>
                                    </td>
                                    <td class="unit-price">${this.res[j].price}</td>
                                    <td class="change-number">
                                        <div class="box">
                                            
                                            <input type="number" id="" value="1">
                                            
                                        </div>
                                    </td>
                                    <td class="all-price">${this.total}</td>
                                    <td class="delete">删除</td>
                                </tr>`;
                    }
                }
            }            
            this.tbody.innerHTML = str; 
            this.sumPrice.innerHTML = "￥" +  sum.toFixed(2);
            this.sumNum.innerHTML = this.total;
            this.sumNum.innerHTML = oneSum;

            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.tbody.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "delete"){
                    that.id = target.parentNode.getAttribute("index"); 
                    target.parentNode.remove();
                    that.changeCookie();                    
                }
            })
        }
        changeCookie(){
            for(var i=0;i<this.goodsMsg.length;i++){
                // 判断点击的id和cookie的id是否一致
                this.id = this.goodsMsg[i].id;
                this.goodsMsg.splice(i,1);   
                break;
            }
            setCookie("goodsCookie",JSON.stringify(this.goodsMsg));
        }
    }
    
    new Cart();


})();