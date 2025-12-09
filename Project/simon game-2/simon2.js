let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started =false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }

    levelUp();
});
 
// Random color  Apply.
function btnflash(btn){
   btn.classList.add("flash");

   setTimeout(()=>{
   btn.classList.remove("flash");
   },250);
}

//userbtn flash
function userflash(btn){
   btn.classList.add("userflash");

   setTimeout(()=>{
   btn.classList.remove("userflash");
   },250);
}

//Random Color generate using the "Kaypress".
function levelUp(){
    userSeq=[];   //Level up hone ke bad userSquence empty karane ke liy.
    level++;
    h3.innerText= `Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*4);// yaha par Array hai Isliy ham (+1) nahi karege. blki arrayLength +1 karege.
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`) ;
    
    gameSeq.push(randColor);
    console.log(gameSeq); // pta chale ki gameSq me kaun color hai.
    btnflash(randBtn);
}

function checkAns(idx){
    
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
        setTimeout(levelUp , 1000);
    }
   }else{
    h3.innerHTML=`Game over! your Score  <b> ${level}</b>. <br>  press any key to start.`;
    document.querySelector("body").style.background="red";
    setTimeout(function(){
       document.querySelector("body").style.background="yellow";  
    },150)
    reset();
   }

}
// User Button press.
function btnPress(){
    console.log(this)
    let btn = this;
    userflash(btn)

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

 