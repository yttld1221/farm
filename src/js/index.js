// 主页活动套餐
function indexActivity(){
    var sql = "select * from activity limit 4";
    getPHP("src/php/query.php?sql="+sql).then(function (php) {
        var obj = JSON.parse(php);
        indexActivity_input(obj);
    }, function (error) {
        console.error('出错了', error);
    });
}
//活动套餐输出
function indexActivity_input(obj){
    var str="";
    for (var i=0;i<obj.length;i++) {
         str+=`
            <div class="col-md-3 col-sm-6 column">
                <div class="activity-box">
                    <a href="activity_detail.html?id=${obj[i].id}" class="lazy-activity">
                        <div><img src="./src/img/activity/${obj[i].img}" alt=""></div>
                        <h3>${obj[i].title}</h3>
                    </a>
                </div>
            </div>
            `
    }
        $("#index-activity").html(str);
}
indexActivity();
//主页游客体验
function indexTravel(){
    var sql = "select * from travel limit 4";
    getPHP("src/php/query.php?sql="+sql).then(function (php) {
        var obj = JSON.parse(php);
        indexTravel_input(obj);
    }, function (error) {
        console.error('出错了', error);
    });
}
//游客体验输出
function indexTravel_input(obj){
    var str="";
    for (var i=0;i<obj.length;i++) {
         str+=`
            <div class="col-md-3 col-sm-6 column">
                <div class="travel-box">
                    <a href="travel_Detail.html?id=${obj[i].id}" class="lazy-travel">
                        <div>
                            <img src="./src/img/travel/${obj[i].img}" alt="">
                            <div class="show-title">
                                <h3>${obj[i].title}</h3>
                                <p>${obj[i].intro}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            `
    }
        $("#index-travel").html(str);
}
indexTravel();
//游玩攻略
function indexStrategy(){
    var sql = "select * from strategy limit 4";
    getPHP("src/php/query.php?sql="+sql).then(function (php) {
        var obj = JSON.parse(php);
        indexStrategy_input(obj);
    }, function (error) {
        console.error('出错了', error);
    });
}
//游玩攻略输出
function indexStrategy_input(obj){
    var str="";
    for (var i=0;i<obj.length;i++) {
         str+=`
            <div class="col-md-6 col-xs-12 column strategy-show">
                <div class="strategy-left">
                    <a href="strategy_detail.html?id=${obj[i].id}" class="lazy-strategy">
                        <img src="./src/img/strategy/${obj[i].img}" alt="">
                    </a>
                </div>
                <div class="strategy-right">
                    <h4><a href="strategy_detail.html?id=${obj[i].id}">${obj[i].title}</a></h4>
                    <p>${obj[i].intro}</p>
                    <div class="strategy-right-bottom"><span>${obj[i].time}</span><span><i class="fa fa-eye fa-fw"></i>${obj[i].num}</span></div>
                </div>
            </div>
            `
    }
        $("#index-strategy-top").html(str);
}
indexStrategy();
