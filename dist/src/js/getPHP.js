"use strict";var getPHP=function(n){return new Promise(function(e,t){var s=new XMLHttpRequest;s.open("GET",n),s.onreadystatechange=function(){4===this.readyState&&(200===this.status?e(this.response):t(new Error(this.statusText)))},s.responseType="php",s.setRequestHeader("Accept","application/php"),s.send()})};