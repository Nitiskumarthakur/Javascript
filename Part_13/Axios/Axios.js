let p=document.getElementById("fact");
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let fact= await cat();
    console.log(fact);
    p.innerText=fact;
})


let url="https://catfact.ninja/fact";
async function cat(){
   try{
     let res= await axios.get(url);
     return res.data.fact;
   }catch{
    console.log("error");
    return "Not Fact found";
   }
}
 

