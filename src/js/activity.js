//选项卡选择
function choosecard() {
    $('.dropdown-menu li').bind('click', function() {
        var index = $(this).index();
        $('.tabbable .nav-tabs li').eq(index).addClass('active').siblings().removeClass('active');
    })
}

choosecard();

// 获取活动方案套餐  ?sql=" + sql
function activity_play() {
    var sql = 'SELECT * FROM activity WHERE act_type="activity_play"';
    getPHP("src/php/query.php").then(function(php) {
        // var obj =JSON.parse(php);
        console.log()
        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += `   
            <li>
                <div>
                    <a class='activity_play' rel='${i}'  href="activity_detail.html?id=${obj[i].id}"><img class="${obj[i].id}" src="./src/img/activity/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='activity_play' rel='${i}'  href="activity_detail.html?id=${obj[i].id}">
                        <p class="${obj[i].id}">${obj[i].title}</p>
                    </a>
                    <div>${obj[i].intro}
                    </div>
                    <div>
                        <span>${obj[i].time}</span><i class="fa fa-eye fa"></i><span>${obj[i].num}</span><span></span><span></span>
                    </div>
                </div>
            </li>
            `;
        }
        $('#activity_play').html(str);
        activity_PageSize('#activity_play');
        //修改阅读量
        $('#activity_play a.activity_play').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
activity_play();

// 获取亲子活动套餐
function activity_parents() {
    var sql = 'SELECT * FROM activity WHERE act_type="activity_parents"';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);

        var str = '';
        for (var i = 0; i < obj.length; i++) {

            str += `   
            <li>
                <div>
                    <a class='activity_parents' rel='${i}'  href="activity_detail.html?id=${obj[i].id}"><img src="./src/img/activity/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='activity_parents' rel='${i}'  href="activity_detail.html?id=${obj[i].id}">
                        <p>${obj[i].title}</p>
                    </a>
                    <div>${obj[i].intro}
                    </div>
                    <div>
                        <span>${obj[i].time}</span><i class="fa fa-eye fa"></i><span>${obj[i].num}</span><span></span><span></span>
                    </div>
                </div>
            </li>
            `;
        }
        $('#activity_parents').html(str);
        activity_PageSize('#activity_parents');
        //修改阅读量
        $('#activity_parents a.activity_parents').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
activity_parents();

// 获取烤全羊套餐
function activity_barbecue() {
    var sql = 'SELECT * FROM activity WHERE act_type="activity_barbecue"';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        var str = '';
        for (var i = 0; i < obj.length; i++) {

            str += `   
            <li>
                <div>
                    <a class='activity_barbecue' rel='${i}'   href="activity_detail.html?id=${obj[i].id}"><img src="./src/img/activity/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='activity_barbecue' rel='${i}'   href="activity_detail.html?id=${obj[i].id}">
                        <p>${obj[i].title}</p>
                    </a>
                    <div>${obj[i].intro}
                    </div>
                    <div>
                        <span>${obj[i].time}</span><i class="fa fa-eye fa"></i><span>${obj[i].num}</span><span></span><span></span>
                    </div>
                </div>
            </li>
            `;
        }
        $('#activity_barbecue').html(str);
        activity_PageSize('#activity_barbecue');
        //修改阅读量
        $('#activity_parents a.activity_barbecue').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
activity_barbecue();

// 获取团队套餐
function activity_team() {
    var sql = 'SELECT * FROM activity WHERE act_type="activity_team"';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        var str = '';
        for (var i = 0; i < obj.length; i++) {

            str += `   
            <li>
                <div>
                    <a class='activity_team' rel='${i}'  href="activity_detail.html?id=${obj[i].id}"><img src="./src/img/activity/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='activity_team' rel='${i}'  href="activity_detail.html?id=${obj[i].id}">
                        <p>${obj[i].title}</p>
                    </a>
                    <div>${obj[i].intro}
                    </div>
                    <div>
                        <span>${obj[i].time}</span><i class="fa fa-eye fa"></i><span>${obj[i].num}</span><span></span><span></span>
                    </div>
                </div>
            </li>
            `;
        }
        $('#activity_team').html(str);
        activity_PageSize('#activity_team');
        //修改阅读量
        $('#activity_parents a.activity_team').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
activity_team();



//分页
function activity_PageSize(id) {
    $(function() {
        switch (id) {
            case '#activity_play':
                tabPage({
                    pageMain: id,
                    pageNav: '.pageNav1',
                    pagePrev: '.prev1',
                    pageNext: '.next1',
                    curNum: 4,
                    /*每页显示的条数*/
                    activeClass: 'active',
                    /*高亮显示的class*/
                    ini: 0 /*初始化显示的页面*/
                });
                break;
            case '#activity_parents':
                tabPage({
                    pageMain: id,
                    pageNav: '.pageNav2',
                    pagePrev: '.prev2',
                    pageNext: '.next2',
                    curNum: 4,
                    /*每页显示的条数*/
                    activeClass: 'active',
                    /*高亮显示的class*/
                    ini: 0 /*初始化显示的页面*/
                });
                break;
            case '#activity_barbecue':
                tabPage({
                    pageMain: id,
                    pageNav: '.pageNav3',
                    pagePrev: '.prev3',
                    pageNext: '.next3',
                    curNum: 4,
                    /*每页显示的条数*/
                    activeClass: 'active',
                    /*高亮显示的class*/
                    ini: 0 /*初始化显示的页面*/
                });
                break;
            case '#activity_team':
                tabPage({
                    pageMain: id,
                    pageNav: '.pageNav4',
                    pagePrev: '.prev4',
                    pageNext: '.next4',
                    curNum: 4,
                    /*每页显示的条数*/
                    activeClass: 'active',
                    /*高亮显示的class*/
                    ini: 0 /*初始化显示的页面*/
                });
                break;
        }

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
            var len = Math.ceil(pageMain.find(">li").length / curNum);
            /*计算总页数*/
            console.log(len);
            var pageList = '';
            /*生成页码*/
            var iNum = 0;
            /*当前的索引值*/
            for (var i = 0; i < len; i++) {
                pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
            }
            pageNav.html(pageList);
            /*头一页加高亮显示*/
            pageNav.find("a:first").addClass('page-on');

            /*******标签页的点击事件*******/
            pageNav.find("a").each(function() {
                $(this).click(function() {
                    pageNav.find("a").removeClass('page-on');
                    $(this).addClass('page-on');
                    iNum = $(this).index();
                    $(pageMain).find(">li").hide();
                    for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                        $(pageMain).find(">li").eq(i).show()
                    }
                });
            })
            $(pageMain).find(">li").hide();
            /************首页的显示*********/
            for (var i = 0; i < curNum; i++) {
                $(pageMain).find(">li").eq(i).show()
            }
            /*下一页*/
            pageNext.click(function() {
                $(pageMain).find(">li").hide();
                if (iNum == len - 1) {
                    alert('已经是最后一页');
                    for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                        $(pageMain).find('>li').eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass('page-on');
                    iNum++;
                    pageNav.find("a").eq(iNum).addClass('page-on');
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">li").eq(i).show()
                }
            });
            /*上一页*/
            pagePrev.click(function() {
                $(pageMain).find(">li").hide();
                if (iNum == 0) {
                    alert('当前是第一页');
                    for (var i = 0; i < curNum; i++) {
                        $(pageMain).find(">li").eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass('page-on');
                    iNum--;
                    pageNav.find("a").eq(iNum).addClass('page-on');
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">li").eq(i).show()
                }
            })
        }
    })
}

// 更改阅读数量
function updatenum(id, num) {
    var num = parseInt(num) + 1;
    var sql = 'UPDATE activity SET num =' + num + ' WHERE id =' + id;
    getPHP("src/php/querya.php?sql=" + sql).then(function(php) {})
}


//根据title查找
function activity_search() {
    $('.act_search').on('click', function() {
        var search_val = $('.search_val').val();
        window.sessionStorage.setItem('search', search_val);
        $(this).parent().attr('href', 'activity_search.html?title=' + search_val);
    })
}
activity_search();

//点击查找框变色
function input_color() {
    $('.search_val').on('focusin', function() {
        $('.search').css('border', '1px solid greenyellow');
    }).on('focusout', function() {
        $('.search').css('border', '1px solid gainsboro');
    })
}
input_color();

// 为您推荐
function each_item() {
    var sql = 'SELECT * FROM activity';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj =JSON.parse(php);
        var str = '';
        for (var i = Math.ceil(Math.random() * 12), j = 0; j < 4; i += 2, j++) {
            str += ` 
            <li><a href="activity_detail.html?id=${obj[i].id}" rel='${i}'>${obj[i].title}</a></li>
            `;
        }
        $('.echo_item').html(str);
        //修改阅读量
        $('.echo_item a').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
each_item();

//刷新页面依然在当前选项卡
function activity_reload() {
    $('#tabs ul li').on('click', function() {
        var tab_index = $(this).index();
        window.sessionStorage.setItem('tab_index', tab_index);
    })
    var activity_href = 'http://127.0.0.1/Demo_Farm/activity.html';
    var get_table_index = window.sessionStorage.getItem('tab_index');
    if (get_table_index != null) {
        if (window.location.href == activity_href) {
            $('#tabs ul li').eq(get_table_index).addClass('active').siblings().removeClass('active');
            $('.tab-content div.tab-pane').eq(get_table_index).addClass('active').siblings().removeClass('active');
        }
    }

}
activity_reload();
//
$.getJSON("http://132.232.114.138/dist/src/php/query.php", function (res) {
console.log(res+'ss')
})