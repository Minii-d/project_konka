;(function(){
    "use strict";
    // 楼层
    $("#sidebar").find("li").click(function(){
        var i = $(this).index();
        var t = $(".floor").eq(i).offset().top;
        $("html").animate({
            scrollTop:t
        })
    })

    // 二级菜单
    class Menus{
        constructor(){
            var oul = document.querySelector(".ul1");
            var ali1 = document.querySelectorAll(".menus .li1");
            var asubMenu = document.querySelectorAll(".li1 .sub-menu");
            // console.log(oul);
            
            
        }
    }

    new Menus;



})();
