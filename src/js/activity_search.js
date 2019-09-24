// 获取查找信息
function activity_sea() {
    var title = window.sessionStorage.getItem('search');
    var sql = "SELECT * FROM activity WHERE title LIKE '%" + title + "%'";
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += `   
            <li>
                <div>
                    <a class='activity_search_info' rel='${i}'  href="activity_detail.html?id=${obj[i].id}"><img class="${obj[i].id}" src="./src/img/activity/${obj[i].img}" ></a>
                </div>
                <div>
                    <a class='activity_search_info' rel='${i}'  href="activity_detail.html?id=${obj[i].id}">
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
        $('#activity_search_info').html(str);
        sea_activity_PageSize('#activity_search_info');
        //修改阅读量
        $('#activity_search_info a.activity_search_info').on('click', function() {
            var index = $(this).attr('href').split('=')[1];
            var num = obj[$(this).attr('rel')].num;
            var key_num = window.sessionStorage.getItem('act_num' + index);
            if (key_num == null) {
                sea_updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
        window.sessionStorage.removeItem('search');
    });
}
activity_sea();


//分页
function sea_activity_PageSize(id) {
    $(function() {
        tabPage({
            pageMain: id,
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
function sea_updatenum(id, num) {
    var num = parseInt(num) + 1;
    var sql = 'UPDATE activity SET num =' + num + ' WHERE id =' + id;
    getPHP("src/php/querya.php?sql=" + sql).then(function(php) {})
}


//根据title查找
function sea_activity_search() {
    $('.act_search').on('click', function() {
        var search_val = $('.search_val').val();
        window.sessionStorage.setItem('search', search_val);
        $(this).parent().attr('href', 'activity_search.html?title=' + search_val);
    })
}
sea_activity_search();

//点击查找框变色
function sea_input_color() {
    $('.search_val').on('focusin', function() {
        $('.search').css('border', '1px solid greenyellow');
    }).on('focusout', function() {
        $('.search').css('border', '1px solid gainsboro');
    })
}
sea_input_color();


// 为您推荐
function sea_each_item() {
    var sql = 'SELECT * FROM activity';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
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
                sea_updatenum(index, num);
                window.sessionStorage.setItem('act_num' + index, num);
            }
        })
    });
}
sea_each_item();