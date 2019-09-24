//页面数据显示
function getData(){
    farming_id=location.href.split('=')[1];
    var sql='select * from farming where id='+farming_id+'';
    getPHP("src/php/query.php?sql="+sql).then(function(php) {
       var obj= JSON.parse(php);
       getData_input(obj);
    }, function(error) {
        console.error('出错了', error);
    });
}
getData();
//数据显示
function getData_input(obj) {
    console.log(obj)
    var str = "";
    str = `
    <p>
        <img src="src/img/farming/${obj[0].img}" align="right" hspace="20" vspace="20" title="${obj[0].title}">
        ${obj[0].intro}
    </p>
    `;
    $("#farming-show").html(str);
}