// 设置cookie
function setCookie(key,val,data){
    data = data || {};  
    var e = "";
    if(data.expires){
        var d = new Date();
        d.setDate(d.getDate()+data.expires);
        e = ";expires=" + d;
    }
    var p = "";
    if(data.path){
        p = ";path=" + data.path;
    }
   document.cookie = key +"="+ val + e + p; 
}    

// 删除coolie
function removeCookie(key,data){
    data = data || {};
    setCookie(key,null,{ 
        expires:-1,    
        path:data.path   
    });
}

// 获取cookie
function getCookie(key){
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}
