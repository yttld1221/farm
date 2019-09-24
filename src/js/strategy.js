// 获取数据库信息
function strategy_info() {
    var sql = 'SELECT * FROM strategy';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += `   
            <li>
                <div>
                    <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}"><img class="${obj[i].id}" src="./src/img/strategy/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}">
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
        $('#strategy_info').html(str);
        strategy_PageSize();
        //修改阅读量
        $('a.strategy_info').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('str_num' + index);
            if (key_num == null) {
                strategy_updatenum(index, num);
                window.sessionStorage.setItem('str_num' + index, num);
            }
        })
    });
}


//分页
function strategy_PageSize() {
    $(function() {
        tabPage({
            pageMain: '#strategy_info',
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
function strategy_updatenum(id, num) {
    var num = parseInt(num) + 1;
    var sql = 'UPDATE strategy SET num =' + num + ' WHERE id =' + id;
    getPHP("src/php/querya.php?sql=" + sql).then(function(php) {})
}


//根据title查找
function strategy_search() {
    $('.act_search').on('click', function() {
        var search_val;
        if (window.sessionStorage.getItem('str_search') != null) {
            search_val = window.sessionStorage.getItem('str_search');
        } else {
            search_val = $('.search_val').val();
            window.sessionStorage.setItem('str_search', search_val);
        }
        var sql = "SELECT * FROM strategy WHERE title LIKE '%" + search_val + "%'";
        getPHP("src/php/query.php?sql=" + sql).then(function(php) {
            var obj = JSON.parse(php);
            var str = '';
            for (var i = 0; i < obj.length; i++) {
                str += `   
            <li>
                <div>
                    <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}"><img class="${obj[i].id}" src="./src/img/strategy/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}">
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
            $('#strategy_info').html(str);
            strategy_PageSize('#strategy_info');
            //修改阅读量
            $('a.strategy_info').on('click', function() {
                var index = $(this).attr('href').split('=')[1];
                var num = obj[$(this).attr('rel')].num;
                var key_num = window.sessionStorage.getItem('str_num' + index);
                if (key_num == null) {
                    strategy_updatenum(index, num);
                    window.sessionStorage.setItem('str_num' + index, num);
                }
            })
        });
    })
}
strategy_search();

//点击查找框变色
function strategy_input_color() {
    $('.search_val').on('focusin', function() {
        $('.search').css('border', '1px solid greenyellow');
    }).on('focusout', function() {
        $('.search').css('border', '1px solid gainsboro');
    })
}
strategy_input_color();


// 为您推荐
function strategy_each_item() {
    var sql = 'SELECT * FROM strategy';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        var str = '';
        for (var i = 0; i < 3; i++) {
            str += ` 
            <li><a href="strategy_detail.html?id=${obj[i].id}" rel='${i}'>${obj[i].title}</a></li>
            `;
        }
        $('.echo_item').html(str);
        //修改阅读量
        $('.echo_item a').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('str_num' + index);
            if (key_num == null) {
                strategy_updatenum(index, num);
                window.sessionStorage.setItem('str_num' + index, num);
            }
        })
    });
}
strategy_each_item();

// 获取搜索信息
function str_sea() {
    var title = window.sessionStorage.getItem('str_search');
    console.log(title);
    var sql = "SELECT * FROM strategy WHERE title LIKE '%" + title + "%'";
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        console.log(obj);
        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += `   
        <li>
            <div>
                <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}"><img class="${obj[i].id}" src="./src/img/strategy/${obj[i].img}" ></a>
            </div>
            <div>
                <a class='strategy_info' rel='${i}'  href="strategy_detail.html?id=${obj[i].id}">
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
        $('#strategy_info').html(str);
        strategy_PageSize('#strategy_info');
        //修改阅读量
        $('a.strategy_info').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('str_num' + index);
            if (key_num == null) {
                strategy_updatenum(index, num);
                window.sessionStorage.setItem('str_num' + index, num);
            }
        })

    });
}



//清楚索引
function clear_str() {
    $('#nav-uli a').on('click', function() {
        window.sessionStorage.removeItem('str_search');
    })
}
clear_str();

//判断显示
function str_display() {
    var str_search = window.sessionStorage.getItem('str_search');
    if (str_search != null) {
        str_sea();
    } else {
        strategy_info();
    }
}
str_display();