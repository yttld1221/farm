function isShow() {
    var winH = $(window).height(),//获取窗口高度
        scrollH = $(window).scrollTop(),//获取窗口滚动高度
        top_special = $(".lazy").offset().top,//获取元素距离窗口顶部偏移高度
        top_activity = $(".lazy-activity").offset().top,
        top_travel = $(".lazy-travel").offset().top,
        top_strategy = $("#index-strategy-top").offset().top;
    if (top_special < scrollH + winH) {
        $(".lazy img").show(1000);
    } else {
        $(".lazy img").hide();
    }
    if(top_activity < scrollH + winH){
        $(".lazy-activity img").slideDown(1000);
    } else{
        $(".lazy-activity img").slideUp();
    }
    if(top_travel < scrollH + winH){
        $(".lazy-travel img").fadeIn(1000);
    } else{
        $(".lazy-travel img").fadeOut();
    }
    if(top_strategy < scrollH + winH){
        $("#index-strategy-top").show(300);
    } else{
        $("#index-strategy-top").hide();
    }
}
$(function () {
    $(window).on('scroll', function () {//监听滚动事件
        isShow();
    })
}) 