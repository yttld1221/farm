"use strict";function Nav(){$(window).on("mousewheel",function(){$(document).scroll(function(){0<$(document).scrollTop()?$("#nav").addClass("navbar-fixed-top"):$("#nav").animate().removeClass("navbar-fixed-top")})})}function toTOP(){$(function(){$("#toTop").hide(),$(window).on("mousewheel",function(){$(document).scroll(function(){200<$(document).scrollTop()?$("#toTop").show():$("#toTop").hide()})}),$("#toTop").click(function(){return $("body,html").animate({scrollTop:0},500),!1})})}function closenav(){$(document).ready(function(){$(document).off("click.bs.dropdown.data-api"),$("li.dropdown").mouseover(function(){$(this).addClass("open")}).mouseout(function(){$(this).removeClass("open")})})}function JumpIntro(){$(function(){$("#introduction>li").on("click",function(){var o=$(this).index();window.sessionStorage.setItem("index",o)})})}function JumpOther(){var o=window.sessionStorage.getItem("index");$(function(){null!=o&&($("ul.nav-tabs>li").eq(o).addClass("active").siblings().removeClass("active"),$("#myTabContent>div").eq(o).addClass("active").siblings().removeClass("active"),window.sessionStorage.removeItem("index"))})}function jumpactivity(){$(function(){$(".jumpa li a").on("click",function(){var o=$(this).parent().index();window.sessionStorage.setItem("index_act",o)})})}function jumpother(){$(function(){var o=window.sessionStorage.getItem("index_act");null!=o&&($("#tabs .nav-tabs li").eq(o).addClass("active").siblings().removeClass("active"),console.log(o),$(".tab-content div.tab-pane").eq(o).addClass("active").siblings().removeClass("active"),window.sessionStorage.removeItem("index_act"))}),$(function(){"http://127.0.0.1/Demo_Farm/activity.html"!=window.location.href&&window.sessionStorage.removeItem("tab_index")})}Nav(),toTOP(),closenav(),JumpIntro(),JumpOther(),jumpactivity(),jumpother();