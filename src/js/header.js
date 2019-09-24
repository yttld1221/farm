//导航栏操控制
function Nav() {
    $(window).on('mousewheel', function() {
        $(document).scroll(function() {
            //获取滚动条滚动的高度
            var scroltop = $(document).scrollTop();
            if (scroltop > 0) {
                $('#nav').addClass('navbar-fixed-top');
            } else {
                $('#nav').animate().removeClass('navbar-fixed-top');
            }
        })
    })
}
Nav();
//返回顶部
function toTOP() {
    $(function() {
        //隐藏返回顶部按钮
        $('#toTop').hide();
        $(window).on('mousewheel', function() {
            $(document).scroll(function() {
                //获取滚动条滚动的高度
                var scroltop = $(document).scrollTop();
                //滚动的高度>200,显示按钮
                if (scroltop > 200) {
                    $('#toTop').show();
                } else {
                    //否则隐藏
                    $('#toTop').hide();
                }
            })
        });
        //当点击跳转按钮后，回到页面顶部位置
        $("#toTop").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    })
}
toTOP();

function closenav() {
    //关闭bootstrap导航栏点击事件
    $(document).ready(function() {
        $(document).off('click.bs.dropdown.data-api');
        dropdownOpen(); //调用
    });
    //  鼠标划过就展开子菜单，免得需要点击才能展开
    function dropdownOpen() {
        var $dropdownLi = $('li.dropdown');
        $dropdownLi.mouseover(function() {
            $(this).addClass('open');
        }).mouseout(function() {
            $(this).removeClass('open');
        });
    }
}
closenav();


//点击农庄简介的导航栏的获取下标并跳转
function JumpIntro() {
    $(function() {
        $('#introduction>li').on('click', function() {
            var index = $(this).index();
            window.sessionStorage.setItem("index", index);
        })
    })
}
//其他页面跳转introduction页面
function JumpOther() {
    var index = window.sessionStorage.getItem('index');
    $(function() {
        if (index != null) {
            $('ul.nav-tabs>li').eq(index).addClass('active').siblings().removeClass('active');
            $('#myTabContent>div').eq(index).addClass('active').siblings().removeClass('active');
            window.sessionStorage.removeItem('index');
        }
    });
}
JumpIntro();
JumpOther();


// 跳转activity.html的选项卡
function jumpactivity() {
    $(function() {
        $('.jumpa li a').on('click', function() {
            var index = $(this).parent().index();
            window.sessionStorage.setItem('index_act', index);
        })
    })
}
jumpactivity();

//其他页面跳转到activity接收
function jumpother() {
    $(function() {
        var index = window.sessionStorage.getItem('index_act');
        if (index != null) {
            $('#tabs .nav-tabs li').eq(index).addClass('active').siblings().removeClass('active');
            console.log(index);
            $('.tab-content div.tab-pane').eq(index).addClass('active').siblings().removeClass('active');
            window.sessionStorage.removeItem('index_act');
        }
    })
    $(
        function() {
            var activity_href = 'http://127.0.0.1/Demo_Farm/activity.html';
            if (window.location.href != activity_href) {
                window.sessionStorage.removeItem('tab_index');
            }
        })
}
jumpother();