// 文本框点击变色
function sharecolor() {
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
sharecolor();

// 插入数据
function share_info() {
    $('#share_btn').on('click', function() {
        //获取title
        var share_title = $('#share_title').val();
        var share_content = $('#share_content').val();
        var share_file = $('#share_file').val().split('th\\')[1];
        var date = new Date();
        var share_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        var share_num = 0;
        var share_username = window.sessionStorage.getItem('username');
        var sql = 'INSERT INTO travel(title,time,num,username,intro,img) VALUES("' + share_title + '","' + share_date + '",' + share_num + ',"' + share_username + '","' + share_content + '","' +
            share_file + '")';
        getPHP("src/php/querya.php?sql=" + sql).then(function(php) {
            alert('分享成功');
            window.location.href = 'http://127.0.0.1/Demo_Farm/travel.html';
        })
    })
}
share_info();