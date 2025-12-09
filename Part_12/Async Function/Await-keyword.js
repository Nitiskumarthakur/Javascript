function getNum(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolved();  //The one function will be called ,if we donot write resolved.
        },1000)
    });

}
async function demo(){
   await  getNum();
   await  getNum();
   await  getNum();
   await  getNum();
   getNum();
}

function colorChange(color,delay){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("promics are rejected");
                console.log("reject")
            }
            document.querySelector("h3").style.color=color;
            console.log(`color change to ${color}`);
            resolved("promise was resolved");
        },delay)
    });
}
async function change(){
    try{
      await colorChange("red",1000);
      await colorChange("violet",1000);
      await colorChange("green",1000);
    } catch(error){
        console.log('Error was caught');
        console.log(error);
    } 
    let a=5;
    console.log(a);
    console.log(a+3)
}