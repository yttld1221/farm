//点击导航栏，table选项卡跟着变化
function Table(){
    $(function(){
        $('#farming>li').click(function (){ 
            var index=$(this).index();
            $('ul.nav-tabs>li').eq(index).addClass('active').siblings().removeClass('active');
        })
    })
   
}
Table();

//页面全部数据显示
function getDataAll(){
    var sql='select * from farming';
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
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-main-show').html(str);
}

//本地鸡养殖
function getDataBDJ(){
    var sql='select * from farming where title_type="本地鸡养殖"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataBDJ_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataBDJ();
//本地鸡养殖数据输出
function getDataBDJ_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-bdj-show').html(str);
}

//无害菜园显示
function getDataCY(){
    var sql='select * from farming where title_type="无害菜园"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataCY_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataCY();
//无害菜园输出
function getDataCY_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-cy-show').html(str);
}

//特色芦花鸡
function getDataLHJ(){
    var sql='select * from farming where title_type="特色芦花鸡"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataLHJ_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataLHJ();
//特色芦花鸡数据输出
function getDataLHJ_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-lhj-show').html(str);
}

//农村水鸭
function getDataSY(){
    var sql='select * from farming where title_type="农村水鸭"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataSY_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataSY();
//农村水鸭数据输出
function getDataSY_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-sy-show').html(str);
}
//本地土猪
function getDataTZ(){
    var sql='select * from farming where title_type="本地土猪"';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getDataTZ_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getDataTZ();
//本地土猪输出
function getDataTZ_input(obj){
    var str='';
    for(let i=0;i<obj.length;i++){
        str+=`
        <a href="farming_show.html?id=${obj[i].id}"><img src="src/img/farming/${obj[i].img}" alt="" title="${obj[i].title}"></a>
        `;
    }
    $('#farming-tz-show').html(str);
}
//全部显示分页
function PageSize(obj){
    //数据拼接
    getDataAll_input(obj);
    $(function () {
        tabPage({
            pageMain: '#farming-main-show',
            pageNav: '#pageNav',
            pagePrev: '#prev',
            pageNext: '#next',
            curNum: 8, /*每页显示的条数*/
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
            var len = Math.ceil(pageMain.find(">a").length / curNum);
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
            pageNav.find("a:first").addClass(tabPage.activeClass);
            /*******标签页的点击事件*******/
            pageNav.find("a").each(function(){
                $(this).click(function () {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    $(this).addClass(tabPage.activeClass);
                    iNum = $(this).index();
                    $(pageMain).find(">a").hide();
                    for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                        $(pageMain).find(">a").eq(i).show()
                    }
                });
            })
            $(pageMain).find(">a").hide();
            /************首页的显示*********/
            for (var i = 0; i < curNum; i++) {
                $(pageMain).find(">a").eq(i).show()
            }
            /*下一页*/
            pageNext.click(function () {
                $(pageMain).find(">a").hide();
                if (iNum == len - 1) {
                    alert('已经是最后一页');
                    for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                        $(pageMain).find('>a').eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    iNum++;
                    pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">a").eq(i).show()
                }
            });
            /*上一页*/
            pagePrev.click(function () {
                $(pageMain).find(">a").hide();
                if (iNum == 0) {
                    alert('当前是第一页');
                    for (var i = 0; i < curNum; i++) {
                        $(pageMain).find(">a").eq(i).show()
                    }
                    return false;
                } else {
                    pageNav.find("a").removeClass(tabPage.activeClass);
                    iNum--;
                    pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                    $(pageMain).find(">a").eq(i).show()
                }
            })
        }
    })
}