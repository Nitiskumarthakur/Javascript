let btns=document.querySelectorAll('button');

for(btn of btns){
btn.addEventListener('click',name);
btn.addEventListener('click',click);
}

function click(){
    console.log("Button was clicked!");
}
function name(){
    console.log("NKT");
}