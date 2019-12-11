;(function(){
    // "use strict";

    
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