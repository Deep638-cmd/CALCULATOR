let buttons= document.querySelectorAll(".button");
let answer=document.querySelector(".ans");
let remove=document.querySelector(".reset");
let string="";

let deep= Array.from(buttons);
deep.forEach((items)=>{
items.addEventListener("click",(e)=>{
    if(e.target.innerHTML== "=" ){
        string=eval(string);
        answer.value=string;
     
     
      }
      else if(e.target.innerHTML== "DEL"){
        let str=string.slice(0,-1);
        string=str;
        answer.value=string;
      }
    else{string=string+e.target.innerText;
 answer.value=string;
 

    }
});
});


   
    remove.addEventListener("click",()=>{
        console.log("Deep");
       answer.value="";
       string="";
        });
