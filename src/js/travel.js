// travel页面左边PHP连接 
function TraLeftGetData() {
    var title=sessionStorage.getItem('str_search');
    if(title==null){
        const sql = 'SELECT * FROM travel ORDER BY id DESC';
        getPHP("src/php/query.php?sql=" + sql).then(function(php) {
            const obj = JSON.parse(php);
            PageSize(obj);
        }, function(error) {
            console.error('出错了', error);
        });
    }else{
        const sql = "SELECT * FROM travel WHERE title LIKE '%" + title + "%'";
        getPHP("src/php/query.php?sql=" + sql).then(function(php) {
            const obj = JSON.parse(php);
            PageSize(obj);
        }, function(error) {
            console.error('出错了', error);
        });
    }
}
TraLeftGetData();
//动态拼接
function LeftSlice(obj) {
    var str = '';
    for (let i = 0; i < obj.length; i++) {
        str += `
        <div class="row clearfix TextBox">
            <!-- 图片 -->
            <div class="col-md-3 column TextBox-img">
                <a href='travel_Detail.html?id=${obj[i].id}'><img class="img" src="src/img/travel/${obj[i].img}"/></a>
            </div>
            <!-- 文章 -->
            <div class="col-md-9 column TextBox-text">
                <!-- 标题 -->
                <h3>	
                    <a href='travel_Detail.html?id=${obj[i].id}'>${obj[i].title}</a>
                </h3>
                <!-- 描述 -->
                <p>
                ${obj[i].intro}
                </p>
                <!-- 浏览数量 -->
                <ul class="list-unstyled">
                    <li>
                    ${obj[i].time}
                    </li>
                    <li>
                    ${obj[i].username}
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-eye-open lookNum">${obj[i].num}</span>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
    $('#pageMain').html(str);
    Look();
}
// 分页
function PageSize(obj) {
    LeftSlice(obj);
    $(function() {
        tabPage({
            pageMain: '#pageMain',
            pageNav: '#pageNav',
            pagePrev: '#prev',
            pageNext: '#next',
            curNum: 4,
            /*每页显示的条数*/
            activeClass: 'active',
            /*高亮显示的class*/
            ini: 0 /*初始化显示的页面*/
        });

        function tabPage(tabPage) {
            var pageMain = $(tabPage.pageMain);
            /*获取内容列表*/
            var pageNav = $(tabPage.pageNav);
            /*获取分页*/
            var pagePrev = $(tabPage.pagePrev);
            /*上一页*/
            var pageNext = $(tabPage.pageNext);
            /*下一页*/
            var curNum = tabPage.curNum;
            /*每页显示数*/
            var len = Math.ceil(pageMain.find(">div").length / curNum);
            /*计算总页数*/
            // console.log(len);
            var pageList = '';
            /*生成页码*/
            var iNum = 0;
            /*当前的索引值*/
            for (var i = 0; i < len; i++) {
                pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
            }
            pageNav.html(pageList);
            /*头一页加高亮显示*/
            pageNav.find("a:first").addClass(tabPage.activeClass);
            /*******标签页的点击事件*******/
            pageNav.find("a").each(function() {
                $(this).click(function() {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    $(this).addClass(tabPage.activeClass);
                    iNum = $(this).index();
                    $(pageMain).find(">div").hide();
                    for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                        $(pageMain).find(">div").eq(i).show();
                    }
                });
            })
            $(pageMain).find(">div").hide();
            /************首页的显示*********/
            for (var i = 0; i < curNum; i++) {
                $(pageMain).find(">div").eq(i).show()
            }
            /*下一页*/
            pageNext.click(function() {
                $(pageMain).find(">div").hide();
                if (iNum == len - 1) {
                    alert('已经是最后一页');
                    for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                        $(pageMain).find('>div').eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    iNum++;
                    pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">div").eq(i).show()
                }
            });
            /*上一页*/
            pagePrev.click(function() {
                $(pageMain).find(">div").hide();
                if (iNum == 0) {
                    alert('当前是第一页');
                    for (var i = 0; i < curNum; i++) {
                        $(pageMain).find(">div").eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    iNum--;
                    pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">div").eq(i).show()
                }
            })
        }
    })
}
//浏览量计数
function Look() {
    var img = $('.TextBox-img img');
    var title = $('.TextBox-text h3');
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function() {
            var lookNum = $('.lookNum').eq(i).text();
            lookNum++;
            var id = img[i].parentNode.href.split('=')[1];
            upData(lookNum, id);
            TraLeftGetData();
        };
        title[i].onclick = function() {
            var lookNum = $('.lookNum').eq(i).text();
            lookNum++;
            var id = title[i].children[0].href.split('=')[1];
            upData(lookNum, id);
            TraLeftGetData();
        }
    };
}
//ajax传值
const upData = function(lookNum, id) {
    $.ajax({
        type: "POST",
        url: "src/php/updata.php",
        data: {
            'lookNum': lookNum,
            'id': id
        },
        dataType: 'text',
        success: function(data) {
            console.log(data);
        },
        error: function() {
            console.log('error');
        }
    });
}
//travel页面右边PHP连接
function TraRightGetData() {
    var sql = 'SELECT * FROM travel ORDER BY num DESC LIMIT 3';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        RightSlice(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
TraRightGetData();
// 右边推荐文章拼接
function RightSlice(obj) {
    var str = '';
    for (let i = 0; i < obj.length; i++) {
        str += `
        <li>
            <a href="travel_Detail.html?id=${obj[i].id}">${obj[i].title}</a>
        </li>
        `;
    }
    $('.recommend .list-unstyled').html(str);
}
//点击分享弹出登录框
function Share() {
    $(function() {
        $('#shareBtn').on('click', function() {
            if ($('#username').text() == '未登录') {
                const con = confirm("您还未登陆账号！\n请先登陆！");
                if (con) {
                    location.href = 'login.html';
                } else {
                    return false;
                }
            } else {
                location.href = 'share.html';
            }
        })
    })
}
Share();
/*如果未登录，点击头像跳转至login;
如果登录，点击跳转至user;
*/
function User(){
    $(function(){
        $('img.img-circle').on('click',function(){
           if($('#username').text()=='未登录'){
                $(this).parent().attr('href','login.html');
           }else{
                $(this).parent().attr('href','user.html');
           }
        });
        $('#username').on('click',function(){
            if($(this).text()=='未登录'){
                 $(this).parent().attr('href','login.html');
            }else{
                 $(this).parent().attr('href','user.html');
            }
        });
    })
}
User();
//如果登录显示用户名
function UsernameShow(){
    $(function(){
        if(sessionStorage.getItem('username')!=null){
            $('#username').text(sessionStorage.getItem('username'));
            $('#username').css({
                color:'#77d1ad',
                fontSize:'18px'
            });
            $('#logout').show();
        }else{
            $('#username').text('未登录');
            $('#logout').hide();
        }
    });
}
UsernameShow();
//点击注销
function Logout(){
    $(function(){
        $('#logout').on('click',function(){
            sessionStorage.removeItem('username');
            $('#username').text('未登录');
            $('#username').css({
                color: '#a94442',
                fontSize:'15px'
            });
            $(this).hide();
        })
    });
}
Logout();
// 获取搜索信息
function tra_sea() {
    $(function(){
        var title = window.sessionStorage.getItem('str_search');
        var sql = "SELECT * FROM travel WHERE title LIKE '%" + title + "%'";
        getPHP("src/php/query.php?sql=" + sql).then(function(php) {
            var obj = JSON.parse(php);
            PageSize(obj);
        }, function(error) {
            console.error('出错了', error);
        });
    })
}
//清除title索引
function  ClearTitle() {
    $(function(){
        $('#nav a').click(function(){
            window.sessionStorage.removeItem('str_search');
        })
    })
}
ClearTitle();