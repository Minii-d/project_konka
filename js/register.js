;(function(){
    "use strict";

    class Register{
        constructor(){
            this.user = document.getElementById("user");
            this.psd = document.getElementById("pass");
            this.psd2 = document.getElementById("pass2");
            this.reg = document.getElementById("login-btn");
            this.login = document.getElementById("goLogin");
            this.span = document.querySelector(".promptInfo");
            this.checkbox = document.getElementById("checkbox")
            // 绑定事件
            this.addEvent();
        }
        addEvent(){
            // 点击注册按钮，保存输入框内的值
            
            this.reg.onclick = ()=>{                
                if(this.uType && this.pType && this.p2Type){
                    this.u = this.user.value;
                    this.p = this.psd.value; 
                }else{
                    this.span.innerHTML = "您输入的信息有误";
                    return;
                }

                //将获取到的值，存入cookie
                this.setUserInfo();
  
            }

            // 点击登陆按钮跳转 
            this.login.onclick = ()=>{
                location.href = "login.html";
            }

            // 表单失去焦点验证
            this.user.onblur = ()=>{
                this.user.style.borderColor = "#ddd";
                this.userTest(); 
            }
            this.psd.onblur = ()=>{                
                this.psd.style.borderColor = "#ddd";
                this.passTest();
            }
            this.psd2.onblur = ()=>{
                this.psd2.style.borderColor = "#ddd";
                this.psd.style.borderColor = "#ddd";
                this.pass2Test();
            }
        }

        // 正则
        
        userTest(){
            if (this.user.value == 0) {
                // this.span.innerHTML = "用户名不能为空";
                this.user.style.borderColor = " #ed1c24";
                this.uType = false;
                return;
            }
            let userReg = /^[\u2E80-\u9FFF\w\-]{2,6}$/;
            if (userReg.test(this.user.value)) {
                this.uType = true;
            } else {
                this.user.style.borderColor = " #ed1c24";
                this.uType = false;
            }
        }

        passTest(){
            if (this.psd.value == 0) {
                this.psd.style.borderColor = " #ed1c24";
                this.pType = false;
                return;
            }
            let psdReg = /^[\da-z]{4,16}$/;
            if (psdReg.test(this.psd.value)){
                this.pType = true;
            } else {
                this.psd.style.borderColor = " #ed1c24";
                this.pType = false;
            }
            if (this.psd.value == this.psd2.value) {
                // this.psd2.nextElementSibling.innerHTML = "一致";
                this.psd2.style.borderColor = "#ddd";
                this.p2Tpye = true;
            } else {
                // this.psd2.nextElementSibling.innerHTML = "不一致";
                this.psd.style.borderColor = " #ed1c24";
                this.p2Type = false;
            }

        }

        pass2Test(){
            if(this.psd2.value == ""){
                this.psd2.style.borderColor = " #ed1c24";
                this.p2Type = false;
                return;
            }
            if (this.psd2.value == this.psd.value) {

                this.p2Type = true;
            } else {
                this.psd2.style.borderColor = " #ed1c24";
                this.p2Type = false;
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
                    this.success();                    
                    
                }else{
                    // 如果长度大于0，则非第一个用户
                    var type = this.info.some((val)=>{
                        return val.user == this.u;
                    });
                    if(type){
                        this.span.innerHTML = "用户名重复了";
                    }else{
                        this.info.push({
                            user:this.u,
                            psd:this.p,
                            onoff:0
                        })                        
                        this.success();
                    }
                }
            setCookie("userInfo",JSON.stringify(this.info));
        }
        // 注册成功，成功跳转的功能
        success(){
            location.href = "login.html";
            // this.span.innerHTML = "注册成功，5秒后<a href=''>跳转</a>"
            // setTimeout(() => {
            //     location.href = "index.html";
            // }, 5000);
        }
    }
    new Register();



})();