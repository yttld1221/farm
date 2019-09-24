// php请求接口
const getPHP = function(url) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
        if (this.readyState !== 4) {
            return;
        }
        if (this.status === 200) {
            resolve(this.response);
        } else {
            reject(new Error(this.statusText));
        }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "php";
        client.setRequestHeader("Accept", "application/php");
        client.send();
    });
    return promise;
    };