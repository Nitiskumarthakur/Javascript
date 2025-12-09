let btn=document.querySelector('button');
// btn.addEventListener('dblclick',function(event){
//     console.log(event);
//     console.log(this.innerText);
// })

let h3=document.querySelector('h3');

let inp=document.querySelector('input');
inp.addEventListener('keydown',function(event){
     
    console.log("code:",event.code);// Arrowup, Arrowdown, Arrowleft, ArrowRight.
    if(event.code=="ArrowUp"){
        console.log("character moves forward");
        h3.innerText="character moves forward";
    }else if(event.code=="ArrowDown"){
        console.log("character moves backward");
        h3.innerText="character moves backward";
    }else if(event.code=="ArrowLeft"){
        console.log("character moves left");
        h3.innerText="character moves left"
    }if(event.code=="ArrowRight"){
        console.log("character moves right");
        h3.innerText="character moves right";
    }

    h3.style.color="green";

     
})


 


