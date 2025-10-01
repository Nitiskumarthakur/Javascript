let btn=document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact= await dog();
    console.log(fact);
    let img=document.querySelector("img");
    img.src=fact;
})
let url="https://dog.ceo/api/breeds/image/random";
async function dog(){
   try{
     let res= await axios.get(url);
     let imag=res.data.message;
     return imag;
   }catch{
    console.log("error");
    return "Not Fact found";
   }
}
 
