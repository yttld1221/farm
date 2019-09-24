//前端验证
function Check(){
    //登录验证
    $(function(){
       //获取焦点
        var tips=$('.tips');
        var input=document.getElementsByTagName('input');
        for(let i=0;i<input.length-1;i++){
            input[i].onfocus=function(){
                tips[i].style.display='none';
                input[i].value='';
            }
        }
         //用户名验证
        $("input[name='username']").blur(function() { //失去焦点
            var nmNum=$(this).val();
            var re=/^\w{6,10}$/g;
            var rez=re.test(nmNum);
            if (rez==true) {
                tips[0].style.display='block';
                tips[0].innerHTML = '格式正确';
                $(this).addClass('right');
            }else if (nmNum=='') {
                tips[0].style.display='block';
                tips[0].innerHTML = '用户名不能为空';
            }else{
                tips[0].style.display='block';    
                tips[0].innerHTML = '用户名长度在6~10个字符以内';
            }
        });
        
         //密码验证
         $("input[name='password']").blur(function() {
             var pw1Num=$(this).val();
             var re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,20}$/g;  //密码必须有大小写字母和数字且6-20位
             var rez=re.test(pw1Num);
             if (rez==true) {
                 tips[1].style.display='block';
                 tips[1].innerHTML = '格式正确';
                 $(this).addClass('right');
             }else if(pw1Num==''){
                 tips[1].style.display='block';
                 tips[1].innerHTML = '密码不能为空';            
             }else{
                 tips[1].style.display='block';
                 tips[1].innerHTML = '请输入6-20位密码(必须有大小写及数字)';  
            }
        });

        //确认密码验证
        $("input[name='confirm_password']").blur(function() {
            if ($(this).val()== $("input[name='password']").val() && $(this).val()!='') {
                tips[2].style.display='block';
                tips[2].innerHTML = '两次输入一致';
                $(this).addClass('right');
            }else if ($(this).val()=='') {
                tips[2].style.display='block';
                tips[2].innerHTML = '不能为空';
            }else{
                tips[2].style.display='block';
                tips[2].innerHTML = '两次输入不一致';
            } 
        });

        //验证手机号
        $("input[name='tel']").blur(function() {
            var phNumber = $(this).val();
            var re = /^1[34578]\d{9}$/g;
            var wrResult = re.test(phNumber);
            if(wrResult == true && phNumber.length == 11) {
                tips[3].style.display = 'block';
                tips[3].innerHTML = '格式正确';
                $(this).addClass('right');
            } else if(phNumber == '') {
                tips[3].style.display = 'block';
                tips[3].innerHTML = '手机号不能为空';
            } else {
                tips[3].style.display = 'block';
                tips[3].innerHTML = '请输入正确的手机号';
            }
        });

        //验证邮箱
        $("input[name='email']").blur(function() {
            var yxads = $(this).val();
            var reg = /^\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/g;
            var yxResult = reg.test(yxads);
            if(yxResult == true) {
                tips[4].style.display = 'block';
                tips[4].innerHTML = '格式正确';
                $(this).addClass('right');
            } else if(yxads == '') {
                tips[4].style.display = 'block';
                tips[4].innerHTML = '请输入邮箱地址';
            } else {
                tips[4].style.display = 'block';
                tips[4].innerHTML = '格式不正确';
            }
        });

        //登录提交
        $('#logSubmit').click(function(){
            if($('.right').length==2){
                // console.log('ok')
                $('#loginForm').attr('action','src/php/login.php');
            }
        })

        //注册提交
        $('#resSubmit').click(function(){
            if($('.right').length==5){
                // console.log('ok')
                $('#registerForm').attr('action','src/php/register.php');
            }
        })
    })
	
}
Check();