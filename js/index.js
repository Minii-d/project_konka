;(function(){
    "use strict";

// 渲染页面
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

            });
        }
        displayTv(){
            var type;            
            var str = "";
            for(var i=0;i<8;i++){
                str += `<li>
                            <a href="">
                            <img src="${this.res[i].oneimg}" title="${this.res[i].name}">
                            <h4>${this.res[i].name}</h4>
                            <h5>${this.res[i].description}</h5>
                            <p>${this.res[i].price}&nbsp;<span>&nbsp;${this.res[i].oprice}</span></p>
                            </a>
                        </li>`;    
            }

            this.tvGoods.innerHTML = str;
            this.iceboxGoods.innerHTML = str;
        }  

    }

    new IndexGoods();


// 搜索
    class Search{
        constructor(){
            this.url = "http://localhost/project_konka/data/goods.json";
            this.txt = document.querySelector(".header-search #search");
            this.list = document.querySelector(".header-search .list");
            this.sbtn = document.querySelector(".header-search .s-btn");
            this.addEvent();
        }

        addEvent(){
            // 下拉菜单
            this.txt.onclick = (eve) =>{
                this.list.style.display = "block";
                let e = eve || window.event;
                e.stopPropagation();
            }  

            document.onclick = (eve) =>{
                this.list.style.display = "none";
            } 

            // 跳转存cookie
            this.sbtn.onclick = ()=>{
                // console.log(this);
                this.val = this.txt.value;
                this.setCookie();
                location.href = "goodsList.html";
            }     
        }
        setCookie(){
            setCookie("goodsSear",JSON.stringify(this.val));
        }

        // load(){
        //     var that = this;
        //     ajaxGet(this.url,function(res){
        //         that.res = res;                
        //         // console.log(that.res);
        //     });
            
        //     this.getMsg();
        // }
        // getMsg(){
        //     console.log(this.res)
        //     for(let i=0;i<this.res.length;i++){
        //         console.log(this.res[i].name)
        //     }
            // this.res.includes(this.val);
            
        // }
  

    }

    new Search();



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


    
    //楼层
    
    $("#sidebar").find("li").click(function(){
        var i = $(this).index();
        var t = $(".floor").eq(i).offset().top;
        $("html").animate({
            scrollTop:t
        })
    })

    
    onscroll = ()=>{
        if($("html").scrollTop()>300){
            $("#sidebar").fadeIn(500);
        }
        if($("html").scrollTop()<300){
            $("#sidebar").fadeOut(500);
        }
    }



    //轮播图
    ;(function(){
        "use strict";   
        
        $(".swiper").banner({
            items:$(".swiper").find("a img"),
            left:$(".swiper").find(".left"),
            right:$(".swiper").find(".right"),
            list:true,  //小切换按钮
            index:0,    //默认索引
            autoPlay:true,   //是否自动播放
            delayTime:2000,     //每张页面停留时间
            moveTime:2000    //图片切换的速度
        })
    
    })();

})();