;(function(){
    "use strict";

    class Login{
        constructor(){
            this.user = document.getElementById("user");
            this.psd = document.getElementById("pass");
            this.reg = document.getElementById("goReg");
            this.login = document.getElementById("login-btn");  
            this.addEvent();
        }
        addEvent(){            
            this.login.onclick = ()=>{
                this.u = this.user.value;
                this.p = this.psd.value;
                this.getUserInfo();
            }
            // 点击注册按钮跳转
            this.reg.onclick = function(){
                console.log(this.reg)

                location.href = "register.html";
            }
        }
        getUserInfo(){
            this.info = getCookie("userInfo") ? JSON.parse(getCookie("userInfo")) : [];
            // 有昵称不存在type为0，登录成功1，登录失败2情况，不能用some，使用for循环遍历
            var type = 0;
            for(var i=0;i<this.info.length;i++){
                // 昵称、密码都相等
                if(this.info[i].user == this.u && this.info[i].psd == this.p){
                    location.href = "index.html";
                    this.info[i].onoff = 1;
                    setCookie("userInfo",JSON.stringify(this.info));
                    type = 1;
                    
                // 昵称相同，密码不相同
                }else if(this.info[i].user == this.u && this.info[i].psd != this.p){
                    this.span.innerHTML = "密码错误";
                    this.info[i].onoff = 0;
                    type = 2;
                }
            }
            if (type == 0) {
                this.span.innerHTML = "昵称不存在，<a href='register.html'>去注册</a>";
                            
            }
            
        }
    }
    new Login();



})();