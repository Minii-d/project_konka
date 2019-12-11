;(function(){
    "use strict";

    class Register{
        constructor(){
            this.user = document.getElementById("user");
            this.psd = document.getElementById("pass");
            this.reg = document.getElementById("login-btn");
            this.login = document.getElementById("goLogin");
            // this.span = document.querySelector(".register span");
            // 绑定事件
            this.addEvent();
        }
        addEvent(){
            // 点击注册按钮，保存输入框内的值
            this.reg.onclick = ()=>{
                this.u = this.user.value;
                this.p = this.psd.value;
                //将获取到的值，存入cookie
                this.setUserInfo();
            }
            // 点击登陆按钮跳转 
            this.login.onclick = function(){
            location.href = "login.html";
            }
        }
        setUserInfo(){
            // 首先确定以什么样的格式保存到cookie中，[{user:"a",psp:"123",onoff:1},{},{},...]，onoff存储客户状态，0表示没登录，1表示登录
            // 获取cookie,初始可能为空，做默认处理
            this.info = getCookie("userInfo") ? JSON.parse(getCookie("userInfo")) : [];

            // 判断客户是否第一个客户，如果数据的长度为0，代表是第一个用户    
                if(this.info.length === 0){
                    this.info.push({
                        user:this.u,
                        psd:this.p,
                        onoff:0
                    })
                    // this.success();                    
                    
                }else{
                    // 如果长度大于0，则非第一个用户
                    //（利用some遍历，并记实录有和没有的状态,返回true和false）
                    var type = this.info.some((val)=>{
                        return val.user == this.u;
                    });
                    if(type){
                        // 不重名就直接注册
                    }else{
                        this.info.push({
                            user:this.u,
                            psd:this.p,
                            onoff:0
                        })                        
                        // this.success();
                    }
                }
            // 最后将cookie设置回去
            setCookie("userInfo",JSON.stringify(this.info));
        }
        // 注册成功，成功跳转的功能
        // success(){
            // this.span.innerHTML = "注册成功，5秒后<a href='login.html'>跳转</a>"
            // setTimeout(() => {
            //     location.href = "login.html";
            // }, 5000);
        // }
    }
    new Register();



})();