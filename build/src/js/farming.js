"use strict";function Table(){$(function(){$("#farming>li").click(function(){var t=$(this).index();$("ul.nav-tabs>li").eq(t).addClass("active").siblings().removeClass("active")})})}function getDataAll(){getPHP("src/php/query.php?sql=select * from farming").then(function(t){PageSize(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataAll_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-main-show").html(a)}function getDataBDJ(){getPHP('src/php/query.php?sql=select * from farming where title_type="本地鸡养殖"').then(function(t){getDataBDJ_input(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataBDJ_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-bdj-show").html(a)}function getDataCY(){getPHP('src/php/query.php?sql=select * from farming where title_type="无害菜园"').then(function(t){getDataCY_input(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataCY_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-cy-show").html(a)}function getDataLHJ(){getPHP('src/php/query.php?sql=select * from farming where title_type="特色芦花鸡"').then(function(t){getDataLHJ_input(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataLHJ_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-lhj-show").html(a)}function getDataSY(){getPHP('src/php/query.php?sql=select * from farming where title_type="农村水鸭"').then(function(t){getDataSY_input(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataSY_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-sy-show").html(a)}function getDataTZ(){getPHP('src/php/query.php?sql=select * from farming where title_type="本地土猪"').then(function(t){getDataTZ_input(JSON.parse(t))},function(t){console.error("出错了",t)})}function getDataTZ_input(t){for(var a="",i=0;i<t.length;i++)a+='\n        <a href="farming_show.html?id='+t[i].id+'"><img src="src/img/farming/'+t[i].img+'" alt="" title="'+t[i].title+'"></a>\n        ';$("#farming-tz-show").html(a)}function PageSize(t){getDataAll_input(t),$(function(){!function(a){var i=$(a.pageMain),e=$(a.pageNav),t=$(a.pagePrev),n=$(a.pageNext),r=a.curNum,s=Math.ceil(i.find(">a").length/r);console.log(s);for(var f="",l=0,o=0;o<s;o++)f+='<a href="javascript:;">'+(o+1)+"</a>";e.html(f),e.find("a:first").addClass(a.activeClass),e.find("a").each(function(){$(this).click(function(){e.find("a").removeClass(a.activeClass),$(this).addClass(a.activeClass),l=$(this).index(),$(i).find(">a").hide();for(var t=($(this).html()-1)*r;t<$(this).html()*r;t++)$(i).find(">a").eq(t).show()})}),$(i).find(">a").hide();for(var o=0;o<r;o++)$(i).find(">a").eq(o).show();n.click(function(){if($(i).find(">a").hide(),l==s-1){alert("已经是最后一页");for(var t=(s-1)*r;t<s*r;t++)$(i).find(">a").eq(t).show();return!1}e.find("a").removeClass(a.activeClass),l++,e.find("a").eq(l).addClass(a.activeClass);for(var t=l*r;t<(l+1)*r;t++)$(i).find(">a").eq(t).show()}),t.click(function(){if($(i).find(">a").hide(),0==l){alert("当前是第一页");for(var t=0;t<r;t++)$(i).find(">a").eq(t).show();return!1}e.find("a").removeClass(a.activeClass),l--,e.find("a").eq(l).addClass(a.activeClass);for(var t=l*r;t<(l+1)*r;t++)$(i).find(">a").eq(t).show()})}({pageMain:"#farming-main-show",pageNav:"#pageNav",pagePrev:"#prev",pageNext:"#next",curNum:8,activeClass:"active",ini:0})})}Table(),getDataAll(),getDataBDJ(),getDataCY(),getDataLHJ(),getDataSY(),getDataTZ();