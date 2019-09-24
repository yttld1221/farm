// 更改阅读数量
function str_dea_updatenum(id, num) {
    var num = parseInt(num) + 1;
    var sql = 'UPDATE strategy SET num =' + num + ' WHERE id =' + id;
    getPHP("src/php/querya.php?sql=" + sql).then(function(php) {})
}

//根据title查找
function str_dea_search() {
    $('.act_search').on('click', function() {
        var search_val = $('.search_val').val();
        window.sessionStorage.setItem('str_search', search_val);
        $(this).parent().attr('href', 'strategy.html?title=' + search_val);
    })
}
str_dea_search();

//点击查找框变色
function str_dea_input_color() {
    $('.search_val').on('focusin', function() {
        $('.search').css('border', '1px solid greenyellow');
    }).on('focusout', function() {
        $('.search').css('border', '1px solid gainsboro');
    })
}
str_dea_input_color();


// 为您推荐
function str_dea_each_item() {
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
                str_dea_updatenum(index, num);
                window.sessionStorage.setItem('str_num' + index, num);
            }
        })
    });
}
str_dea_each_item();

// 显示详细信息
function str_detail_info() {
    var id = window.location.href.split('=')[1];
    var sql = 'SELECT * FROM strategy where id=' + id;
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        console.log(obj)
        $('head title').text(obj[0].title + '详情页面');
        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += ` 
            <p>${obj[i].title}</p>
            <div class="str_time">
                <span>${obj[i].time}</span><i class="fa fa-eye fa"></i><span>${obj[i].num}</span>
            </div>
            <hr>
            <div class="str_content">
                <img src="./src/img/${obj[i].img}" alt="">
                <div class="str_text">
                ${obj[i].intro}
                </div>
            </div>
            <hr>
            `;
        }
        $('.str_con').html(str);
    });
}
str_detail_info();