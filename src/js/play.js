//点击导航栏，table选项卡跟着变化
function Table(){
    $(function(){
        $('#play>li').click(function (){ 
            var index=$(this).index();
            $('ul.nav-tabs>li').eq(index).addClass('active').siblings().removeClass('active');
        })
    })
   
}
Table();

//页面全部数据显示
function getDataAll(){
    var sql='select * from play';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       PageSize(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataAll();
//全部数据动态拼接
function getDataAll_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
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
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#play-all-show').html(str);
}

//真人CS显示
function getDataCS(){
    var sql='select * from play where title_type="cs"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataCS_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataCS();
//真人CS数据输出
function getDataCS_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}${obj[i].title_type}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}${obj[i].title_type}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#panel-453015').html(str);
}

//骑马显示
function getDataQM(){
    var sql='select * from play where title_type="qima"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataQM_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataQM();
//骑马数据输出
function getDataQM_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}${obj[i].title_type}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}${obj[i].title_type}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#panel-563016').html(str);
}

//室内休闲
function getDataSN(){
    var sql='select * from play where title_type="shinei"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataSN_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataSN();
//室内休闲数据输出
function getDataSN_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}${obj[i].title_type}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}${obj[i].title_type}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#panel-697993').html(str);
}

//室外拓展
function getDataSW(){
    var sql='select * from play where title_type="shinei"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataSW_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataSW();
//室外拓展数据输出
function getDataSW_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}${obj[i].title_type}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}${obj[i].title_type}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#panel-235015').html(str);
}
//球类
function getDataQN(){
    var sql='select * from play where title_type="qiulei"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataQN_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataQN();
//球类数据输出
function getDataQN_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <div class="col-md-3 col-sm-6 column">
            <div class="small-img">
                <img src="src/img/play/${obj[i].img}" >
            </div>
            <!-- 模态弹框 -->
            <div class="play-main-show-modal" >
                <h4>${obj[i].time}</h4>
                <hr/>
                <h2>${obj[i].title}</h2>
                <!-- 按钮触发模态框 -->
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal${obj[i].id}${obj[i].title_type}">
                    浏览
                </button>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal${obj[i].id}${obj[i].title_type}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="src/img/play/${obj[i].img}" class="big-img">
                                
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal -->
                </div>
            </div>
            <!-- 模态弹框 -->
        </div>
        `;
    }
    $('#panel-457016').html(str);
}
//全部显示分页
function PageSize(obj){
    //数据拼接
    getDataAll_input(obj);
    $(function () {
        tabPage({
            pageMain: '#play-all-show',
            pageNav: '#pageNav',
            pagePrev: '#prev',
            pageNext: '#next',
            curNum: 16, /*每页显示的条数*/
            activeClass: 'active', /*高亮显示的class*/
            ini: 0/*初始化显示的页面*/
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
            pageNav.find("a").each(function(){
                $(this).click(function () {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    $(this).addClass(tabPage.activeClass);
                    iNum = $(this).index();
                    $(pageMain).find(">div").hide();
                    for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                        $(pageMain).find(">div").eq(i).show()
                    }
                });
            })
            $(pageMain).find(">div").hide();
            /************首页的显示*********/
            for (var i = 0; i < curNum; i++) {
                $(pageMain).find(">div").eq(i).show()
            }
            /*下一页*/
            pageNext.click(function () {
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
            pagePrev.click(function () {
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