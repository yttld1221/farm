"use strict";function sharecolor(){$("input").on("click",function(){$(this).parent(".us-item").addClass("input-on").siblings().removeClass("input-on")}),$("select").on("click",function(){$(this).parent(".us-item").addClass("input-on").siblings().removeClass("input-on")}),$("textarea").on("click",function(){$(this).parent(".us-item").addClass("input-on").siblings().removeClass("input-on")})}function share_info(){$("#share_btn").on("click",function(){var t=$("#share_title").val(),e=$("#share_content").val(),n=$("#share_file").val().split("th\\")[1],i=new Date,s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),a=window.sessionStorage.getItem("username");getPHP("src/php/querya.php?sql="+('INSERT INTO travel(title,time,num,username,intro,img) VALUES("'+t+'","'+s+'",0,"'+a+'","'+e+'","'+n+'")')).then(function(t){alert("分享成功"),window.location.href="http://127.0.0.1/Demo_Farm/travel.html"})})}sharecolor(),share_info();