//获取用户案例
function user_info() {
    var user_username = window.sessionStorage.getItem('username');
    console.log(user_username);
    var sql = 'SELECT * FROM travel WHERE username="' + user_username + '"';
    getPHP("src/php/query.php?sql=" + sql).then(function(php) {
        var obj = JSON.parse(php);
        console.log(obj.length)

        var str = '';
        for (var i = 0; i < obj.length; i++) {
            str += `   
            <tr>
                <td>${i+1}</td>
                <td>${obj[i].title}</td>
                <td>${obj[i].time}</td>
                <td>${obj[i].num}</td>
                <td><input id='${obj[i].id}' type="button" value="删除"></td>
            </tr>
            `;
        }
        $('.user-table').append(str);
        $('td input[type=button]').on('click', function() {
            var delid = $(this).attr('id');
            var delsql = 'DELETE FROM travel WHERE id=' + delid;
            getPHP("src/php/querya.php?sql=" + delsql).then(function(php) {
                window.location.reload();
            })
        })
    });
}
user_info();

// 右侧用心中心显示
function user_display() {
    var user_name = window.sessionStorage.getItem('username');
    $('#usr_name').text(user_name);
    // 修改密码
    $('#user_update').on('click', function() {
            var new_pass = prompt('请输入新密码');
            if (new_pass != null && new_pass != '') {
                var upsql = 'UPDATE user SET password = "' + new_pass + '" WHERE username="' + user_name + '"';
                getPHP("src/php/querya.php?sql=" + upsql).then(function(php) {
                    alert('修改成功');
                    window.location.href = 'http://127.0.0.1/Demo_Farm/login.html';
                })
            } else {
                alert('密码不得为空');
                $('#user_update').click();
            }
        })
        // 退出
    $('#user_exit').on('click', function() {
        window.sessionStorage.removeItem('username');
        window.location.href = 'http://127.0.0.1/FARM/travel.html';
    })
}
user_display();