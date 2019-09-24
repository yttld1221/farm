//点击导航栏，table选项卡跟着变化
function IntroTable(){
    $(function(){
        $('#introduction>li').click(function (){ 
            var index=$(this).index();
            $('ul.nav-tabs>li').eq(index).addClass('active').siblings().removeClass('active');
        })
    })
   
}
IntroTable();