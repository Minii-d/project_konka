;(function(){
    "use strict";
    class Menus{
        constructor(){
            this.aMenu = document.querySelectorAll(".ul1 .li1");
            // this.asubMenu = document.querySelectorAll(".li1 .sub-menu");
            // console.log(this.asubMenu);
            this.addEvent();
        }
        addEvent(){
            for(let i=0;i<this.aMenu.length;i++){
                this.aMenu[i].onmouseenter = ()=>{ 
                    this.display(i);                    
                }
                this.aMenu[i].onmouseleave = ()=>{
                    this.init(i);
                }
            }
        }
        display(i){
            this.aMenu[i].children[1].style.display = "flex";
        }
        init(i){
            this.aMenu[i].children[1].style.display = "none";
        }
    }

    new Menus();

})();