// 文本框点击变色
function ordercolor() {
    $('input').on('click', function() {
        $(this).parent('.us-item').addClass('input-on').siblings().removeClass('input-on');
    })
    $('select').on('click', function() {
        $(this).parent('.us-item').addClass('input-on').siblings().removeClass('input-on');
    })
    $('textarea').on('click', function() {
        $(this).parent('.us-item').addClass('input-on').siblings().removeClass('input-on');
    })
}
ordercolor();

//提交事件
function ordersubmit() {
    $('#orderbtn').on('click', function() {
        // 获取预约项目
        var make_name = $('select option:selected').text();
        // 获取姓名
        var name = $('input[type=text]').eq(0).val();
        // 获取联系方式
        var tel = $('input[type=text]').eq(1).val();
        // 获取人数
        var people_num = $('input[type=text]').eq(2).val();
        // 获取起始日期
        var start_time = $('.start_time').val();
        //获取终止时间
        var end_time = $('.end_time').val();
        // 时间换算
        var start_day = order_time(start_time);
        window.sessionStorage.setItem('start_day', start_day);
        var end_day = order_time(end_time);
        window.sessionStorage.setItem('end_day', end_day);
        // 其他留言
        var note = $('textarea').val();
        // 判断填写信息是否为空
        if (make_name != '' && name != '' && tel != '' && people_num != '' && start_time != '' && end_time != '') {
            // 判断预约是否成功
            var sql1 = 'SELECT * FROM make WHERE name="' + name + '" or tel="' + tel + '"';
            getPHP("src/php/query.php?sql=" + sql1).then(function(php1) {
                var obj = JSON.parse(php1);
                if (obj.length > 0) {

                    // 判断一人一号码
                    if ((obj[0].name == name && obj[0].tel != tel)) {

                        alert("游客" + obj[0].name + "，您已使用号码" + obj[0].tel + "预约成功，时间为 " + obj[0].start_day + ' 至 ' + obj[0].end_day + '！');
                        window.location.reload();

                    } else if ((obj[0].name != name && obj[0].tel == tel)) {

                        alert("号码" + obj[0].tel + "，已被游客" + obj[0].name + "进行预约，时间为 " + obj[0].start_day + ' 至 ' + obj[0].end_day + ' ！');
                        window.location.reload();
                    } else if ((obj[0].name == name && obj[0].tel == tel)) {
                        if (((obj[0].start_time >= start_day) && (obj[0].end_time <= end_day)) || ((obj[0].start_time <= start_day) && (obj[0].end_time >= end_day)) || ((obj[0].start_time <= start_day) && (obj[0].end_time >= start_day)) || ((obj[0].start_time <= end_day) && (obj[0].end_time >= end_day)) || ((obj[0].start_time >= start_day) && (obj[0].start_time >= end_day))) {
                            alert("游客" + obj[0].name + "，您的预约时间为 " + obj[0].start_day + ' 至 ' + obj[0].end_day + ',不得重复预约！');
                            window.location.reload();
                        } else {
                            var sql2 = 'UPDATE make SET make_name="' + make_name + '",people_num=' + people_num + ',start_time="' + start_day + '",end_time="' + end_day + '",note="' + note + '",start_day="' + start_time + '",end_day="' + end_time + '" WHERE name="' +
                                obj[0].name + '"';
                            getPHP("src/php/querya.php?sql=" + sql2).then(function(php2) {
                                alert("游客" + obj[0].name + "，您预约日期已失效,新的预约时间为 " + start_time + ' 至 ' + end_time + ' ,望您如期而至体验！');
                                window.location.reload();
                            });
                        }
                    }
                } else {
                    // 预约操作
                    var sql = 'INSERT INTO make(make_name,name,tel,people_num,start_time,end_time,note,start_day,end_day) VALUES("' + make_name + '","' + name + '","' + tel + '",' + people_num + ',"' + start_day + '","' + end_day + '","' + note + '","' + start_time + '","' + end_time + '")';
                    getPHP("src/php/querya.php?sql=" + sql).then(function(php) {
                        alert("恭喜游客" + name + ",您已预约成功！");
                        window.location.reload();
                    });
                }
            });
        } else {
            alert('预约信息不得为空,请重新填写。');
            window.location.reload();
        }
    })
}
ordersubmit();

// 预约起始时间换算
function order_time(order_time) {
    window.sessionStorage.setItem('order_time', order_time);
    var order_month = order_time.split('-')[1];
    var order_date = order_time.split('-')[2];
    return order_day(order_month, order_date);
}

// 换算成天数
function order_day(month, day) {
    var order_day;
    switch (month) {
        case '01':
            order_day = day;
            return order_day;
        case '02':
            order_day = 31 + parseInt(day);
            return order_day;
        case '03':
            order_day = 31 + 28 + parseInt(day);
            return order_day;
        case '04':
            order_day = 31 * 2 + 28 + parseInt(day);
            return order_day;
        case '05':
            order_day = 31 * 2 + 30 + 28 + parseInt(day);
            return order_day;
        case '06':
            order_day = 31 * 3 + 30 + 28 + parseInt(day);
            return order_day;
        case '07':
            order_day = 31 * 3 + 30 * 2 + 28 + parseInt(day);
            return order_day;
        case '08':
            order_day = 31 * 4 + 30 * 2 + 28 + parseInt(day);
            return order_day;
        case '09':
            order_day = 31 * 5 + 30 * 2 + 28 + parseInt(day);
            return order_day;
        case '10':
            order_day = 31 * 5 + 30 * 3 + 28 + parseInt(day);
            return order_day;
        case '11':
            order_day = 31 * 6 + 30 * 3 + 28 + parseInt(day);
            return order_day;
        case '12':
            order_day = 31 * 6 + 30 * 4 + 28 + parseInt(day);
            return order_day;
    }
}