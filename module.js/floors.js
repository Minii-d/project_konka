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

    
    onscroll = ()=>{
        if($("html").scrollTop()>300){
            $("#sidebar").fadeIn(500);
        }
        if($("html").scrollTop()<300){
            $("#sidebar").fadeOut(500);
        }
    }
    

})();