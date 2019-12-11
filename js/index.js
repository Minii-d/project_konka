;(function(){
    "use strict";

    class IndexGoods{
        constructor(){
            //商品数据接口
            this.url = "http://localhost/project_konka/data/goods.json";
            this.tvGoods = document.querySelector(".product-tv ul");    
            this.iceboxGoods = document.querySelector(".product-icebox ul");   
            this.load();
            this.starGoods = document.querySelector(".star-product ul"); 

        }
        load(){
            var that = this;
            // 开启ajax,接收后端数据，并解析
            ajaxGet(this.url,function(res){
                // console.log(res);//拿到数据第一时间查看什么格式，再解析
                that.res = JSON.parse(res);
                // that.display();
                that.displayTv();               
                that.displayIcebox();               

            });
        }
        displayTv(){
            var type;            
            let goodsArr = [];
            var arr1 = [];
            var arr2 = [];
            for(var j=0;j<this.res.length;j++){
                if(this.res[j].tag=="tv"){
                    arr1.push(this.res[j]);
                    goodsArr = arr1;
                }
            }
            console.log(goodsArr)
            var str = "";
            for(let i=0;i<goodsArr.length;i++){
                str += `<li>
                <a href="">
                <img src="${this.res[i].img}" title="${this.res[i].name}">
                <h4>${this.res[i].name}</h4>
                <h5>${this.res[i].description}</h5>
                <p>${this.res[i].price}&nbsp;<span>&nbsp;${this.res[i].oprice}</span></p>
                </a>
                </li>`;
            }
                this.tvGoods.innerHTML = str;
        }

        displayIcebox(){
            var type;
            let goodsArr = [];
            var arr1 = [];
            var arr2 = [];
            for(var j=0;j<this.res.length;j++){
                if(this.res[j].tag=="icebox"){
                    arr2.push(this.res[j]);
                    goodsArr = arr2; 
                }
            }
            console.log(goodsArr)
            var str = "";
            for(let i=0;i<goodsArr.length;i++){
                str += `<li>
                <a href="">
                <img src="${this.res[i].img}" title="${this.res[i].name}">
                <h4>${this.res[i].name}</h4>
                <h5>${this.res[i].description}</h5>
                <p>${this.res[i].price}&nbsp;<span>&nbsp;${this.res[i].oprice}</span></p>
                </a>
                </li>`;
            }
            this.iceboxGoods.innerHTML = str; 
        }
    }



    new IndexGoods();



// 二级菜单
    class Menus{
        constructor(){
            this.aMenu = document.querySelectorAll(".ul1 .li1");
            // this.asubMenu = document.querySelectorAll(".li1 .sub-menu");
            // console.log(this.asubMenu);
            this.addEvent();
        }
        addEvent(){
            for(let i=0;i<this.aMenu.length;i++){
                this.aMenu[i].onmouseenter = ()=>{ 
                    this.display(i);                    
                }
                this.aMenu[i].onmouseleave = ()=>{
                    this.init(i);
                }
            }
        }
        display(i){
            this.aMenu[i].children[1].style.display = "flex";
        }
        init(i){
            this.aMenu[i].children[1].style.display = "none";
        }
    }
    new Menus();

})();