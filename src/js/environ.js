// environ页面PHP连接
function EnrGetData() {
    var sql = 'select * from environ';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        PageSize(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
EnrGetData();
//动态拼接
function EnrSlice(obj) {
    var str = '';
    for (let i = 0; i < obj.length; i++) {
        str += `
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/environ/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="enr-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/environ/${obj[i].img}" class="big-img">
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#pageMain').html(str);
}
// 分页
function PageSize(obj) {
    EnrSlice(obj);
    $(function() {
        tabPage({
            pageMain: '#pageMain',
            pageNav: '#pageNav',
            pagePrev: '#prev',
            pageNext: '#next',
            curNum: 16,
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