//ajaxGet方式封装
function ajaxGet(url,cb,data){
    data = data || {};
    var str = "";
    for(var i in data){
        str += i + "=" + data[i] + "&";
    }
    var d = new Date();
    url += "?" + str + "__dd=" + d.getTime();

    var xhr = new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            cb(xhr.responseText);
        }
    }
    xhr.send();
}

//ajaxPost方式封装
function ajaxPost(url,cb,data){
    data = data || {};
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    str = str.slice(0,str.length-1);

    var ajax = new XMLHttpRequest();
    ajax.open("post",url,true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            cb(ajax.responseText);
        }
    }

    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(str);
}

// jsonp解决跨域问题的封装
function jsonp(url,cb,data){
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    url += "?" + str;

    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    window[data[data.cloneName]] = function(res){   
        cb(res);
    }
}