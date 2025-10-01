//let btn=document.querySelector('button');
//console.dir(btn);

// btn.onclick=function (){
//     console.log('button was clicked');
// }

function click(){
    alert("hello !");
}
//btn.onclick=click;

let btns=document.querySelectorAll('button');
console.dir(btns);
for(btn of btns){
   btn.onclick=click; 
   btn.onclick=name; //S
//    btn.onmouseenter=function(){
//     console.log("hey");
//    };
   console.dir(btns);
}

function name(){
    console.log("nkt")
}

 