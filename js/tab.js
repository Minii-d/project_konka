;(function(){
    "use strict";

    

    class Tab{
        constructor(){
            this.tabA = document.querySelectorAll(".details-panel a");
            this.oli= document.querySelector(".details-cont li");
            this.img = ["images/shouhou1.jpg","images/details2.jpg"];
            this.init();
        }
        init(){
            
            for(let i=0;i<this.tabA.length;i++){
                this.tabA[i].index = i;
                this.tabA[i].onclick = ()=>{
                    for(let j=0;j<this.tabA.length;j++){
                        this.tabA[j].className = "";
                    }
                    this.tabA[i].className = "active";
                    this.display(i);
                }
            }
        }
        display(i){
            let str = "";
            str = `
            <img src="${this.img[i]}">
            `;
            this.oli.innerHTML = str;
            console.log(this.img[i])

        }
    }

    new Tab();

})();