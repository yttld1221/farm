"use strict";function choosecard(){$(".dropdown-menu li").bind("click",function(){var i=$(this).index();$(".tabbable .nav-tabs li").eq(i).addClass("active").siblings().removeClass("active")})}function activity_play(){getPHP("src/php/query.php").then(function(i){console.log();for(var t="",a=0;a<obj.length;a++)t+="   \n            <li>\n                <div>\n                    <a class='activity_play' rel='"+a+"'  href=\"activity_detail.html?id="+obj[a].id+'"><img class="'+obj[a].id+'" src="./src/img/activity/'+obj[a].img+"\" ></a>\n                </div>\n                <div>\n                    <a class='activity_play' rel='"+a+"'  href=\"activity_detail.html?id="+obj[a].id+'">\n                        <p class="'+obj[a].id+'">'+obj[a].title+"</p>\n                    </a>\n                    <div>"+obj[a].intro+"\n                    </div>\n                    <div>\n                        <span>"+obj[a].time+'</span><i class="fa fa-eye fa"></i><span>'+obj[a].num+"</span><span></span><span></span>\n                    </div>\n                </div>\n            </li>\n            ";$("#activity_play").html(t),activity_PageSize("#activity_play"),$("#activity_play a.activity_play").on("click",function(){var i=$(this).attr("href").split("=")[1],t=obj[$(this).attr("rel")].num;null==window.sessionStorage.getItem("act_num"+i)&&(updatenum(i,t),window.sessionStorage.setItem("act_num"+i,t))})})}function activity_parents(){getPHP('src/php/query.php?sql=SELECT * FROM activity WHERE act_type="activity_parents"').then(function(i){for(var a=JSON.parse(i),t="",e=0;e<a.length;e++)t+="   \n            <li>\n                <div>\n                    <a class='activity_parents' rel='"+e+"'  href=\"activity_detail.html?id="+a[e].id+'"><img src="./src/img/activity/'+a[e].img+"\" ></a>\n                </div>\n                <div>\n                    <a class='activity_parents' rel='"+e+"'  href=\"activity_detail.html?id="+a[e].id+'">\n                        <p>'+a[e].title+"</p>\n                    </a>\n                    <div>"+a[e].intro+"\n                    </div>\n                    <div>\n                        <span>"+a[e].time+'</span><i class="fa fa-eye fa"></i><span>'+a[e].num+"</span><span></span><span></span>\n                    </div>\n                </div>\n            </li>\n            ";$("#activity_parents").html(t),activity_PageSize("#activity_parents"),$("#activity_parents a.activity_parents").on("click",function(){var i=$(this).attr("href").split("=")[1],t=a[$(this).attr("rel")].num;null==window.sessionStorage.getItem("act_num"+i)&&(updatenum(i,t),window.sessionStorage.setItem("act_num"+i,t))})})}function activity_barbecue(){getPHP('src/php/query.php?sql=SELECT * FROM activity WHERE act_type="activity_barbecue"').then(function(i){for(var a=JSON.parse(i),t="",e=0;e<a.length;e++)t+="   \n            <li>\n                <div>\n                    <a class='activity_barbecue' rel='"+e+"'   href=\"activity_detail.html?id="+a[e].id+'"><img src="./src/img/activity/'+a[e].img+"\" ></a>\n                </div>\n                <div>\n                    <a class='activity_barbecue' rel='"+e+"'   href=\"activity_detail.html?id="+a[e].id+'">\n                        <p>'+a[e].title+"</p>\n                    </a>\n                    <div>"+a[e].intro+"\n                    </div>\n                    <div>\n                        <span>"+a[e].time+'</span><i class="fa fa-eye fa"></i><span>'+a[e].num+"</span><span></span><span></span>\n                    </div>\n                </div>\n            </li>\n            ";$("#activity_barbecue").html(t),activity_PageSize("#activity_barbecue"),$("#activity_parents a.activity_barbecue").on("click",function(){var i=$(this).attr("href").split("=")[1],t=a[$(this).attr("rel")].num;null==window.sessionStorage.getItem("act_num"+i)&&(updatenum(i,t),window.sessionStorage.setItem("act_num"+i,t))})})}function activity_team(){getPHP('src/php/query.php?sql=SELECT * FROM activity WHERE act_type="activity_team"').then(function(i){for(var a=JSON.parse(i),t="",e=0;e<a.length;e++)t+="   \n            <li>\n                <div>\n                    <a class='activity_team' rel='"+e+"'  href=\"activity_detail.html?id="+a[e].id+'"><img src="./src/img/activity/'+a[e].img+"\" ></a>\n                </div>\n                <div>\n                    <a class='activity_team' rel='"+e+"'  href=\"activity_detail.html?id="+a[e].id+'">\n                        <p>'+a[e].title+"</p>\n                    </a>\n                    <div>"+a[e].intro+"\n                    </div>\n                    <div>\n                        <span>"+a[e].time+'</span><i class="fa fa-eye fa"></i><span>'+a[e].num+"</span><span></span><span></span>\n                    </div>\n                </div>\n            </li>\n            ";$("#activity_team").html(t),activity_PageSize("#activity_team"),$("#activity_parents a.activity_team").on("click",function(){var i=$(this).attr("href").split("=")[1],t=a[$(this).attr("rel")].num;null==window.sessionStorage.getItem("act_num"+i)&&(updatenum(i,t),window.sessionStorage.setItem("act_num"+i,t))})})}function activity_PageSize(t){$(function(){switch(t){case"#activity_play":i({pageMain:t,pageNav:".pageNav1",pagePrev:".prev1",pageNext:".next1",curNum:4,activeClass:"active",ini:0});break;case"#activity_parents":i({pageMain:t,pageNav:".pageNav2",pagePrev:".prev2",pageNext:".next2",curNum:4,activeClass:"active",ini:0});break;case"#activity_barbecue":i({pageMain:t,pageNav:".pageNav3",pagePrev:".prev3",pageNext:".next3",curNum:4,activeClass:"active",ini:0});break;case"#activity_team":i({pageMain:t,pageNav:".pageNav4",pagePrev:".prev4",pageNext:".next4",curNum:4,activeClass:"active",ini:0})}function i(i){var t=$(i.pageMain),a=$(i.pageNav),e=$(i.pagePrev),n=$(i.pageNext),s=i.curNum,c=Math.ceil(t.find(">li").length/s);console.log(c);for(var r="",l=0,o=0;o<c;o++)r+='<a href="javascript:;">'+(o+1)+"</a>";a.html(r),a.find("a:first").addClass("page-on"),a.find("a").each(function(){$(this).click(function(){a.find("a").removeClass("page-on"),$(this).addClass("page-on"),l=$(this).index(),$(t).find(">li").hide();for(var i=($(this).html()-1)*s;i<$(this).html()*s;i++)$(t).find(">li").eq(i).show()})}),$(t).find(">li").hide();for(o=0;o<s;o++)$(t).find(">li").eq(o).show();n.click(function(){if($(t).find(">li").hide(),l==c-1){alert("已经是最后一页");for(var i=(c-1)*s;i<c*s;i++)$(t).find(">li").eq(i).show();return!1}a.find("a").removeClass("page-on"),l++,a.find("a").eq(l).addClass("page-on");for(i=l*s;i<(l+1)*s;i++)$(t).find(">li").eq(i).show()}),e.click(function(){if($(t).find(">li").hide(),0==l){alert("当前是第一页");for(var i=0;i<s;i++)$(t).find(">li").eq(i).show();return!1}a.find("a").removeClass("page-on"),l--,a.find("a").eq(l).addClass("page-on");for(i=l*s;i<(l+1)*s;i++)$(t).find(">li").eq(i).show()})}})}function updatenum(i,t){t=parseInt(t)+1;getPHP("src/php/querya.php?sql="+("UPDATE activity SET num ="+t+" WHERE id ="+i)).then(function(i){})}function activity_search(){$(".act_search").on("click",function(){var i=$(".search_val").val();window.sessionStorage.setItem("search",i),$(this).parent().attr("href","activity_search.html?title="+i)})}function input_color(){$(".search_val").on("focusin",function(){$(".search").css("border","1px solid greenyellow")}).on("focusout",function(){$(".search").css("border","1px solid gainsboro")})}function each_item(){getPHP("src/php/query.php?sql=SELECT * FROM activity").then(function(i){for(var a=JSON.parse(i),t="",e=Math.ceil(12*Math.random()),n=0;n<4;e+=2,n++)t+=' \n            <li><a href="activity_detail.html?id='+a[e].id+"\" rel='"+e+"'>"+a[e].title+"</a></li>\n            ";$(".echo_item").html(t),$(".echo_item a").on("click",function(){var i=$(this).attr("href").split("=")[1],t=a[$(this).attr("rel")].num;null==window.sessionStorage.getItem("act_num"+i)&&(updatenum(i,t),window.sessionStorage.setItem("act_num"+i,t))})})}function activity_reload(){$("#tabs ul li").on("click",function(){var i=$(this).index();window.sessionStorage.setItem("tab_index",i)});var i=window.sessionStorage.getItem("tab_index");null!=i&&"http://127.0.0.1/Demo_Farm/activity.html"==window.location.href&&($("#tabs ul li").eq(i).addClass("active").siblings().removeClass("active"),$(".tab-content div.tab-pane").eq(i).addClass("active").siblings().removeClass("active"))}choosecard(),activity_play(),activity_parents(),activity_barbecue(),activity_team(),activity_search(),input_color(),each_item(),activity_reload(),$.getJSON("http://132.232.114.138/dist/src/php/query.php",function(i){console.log(i+"ss")});