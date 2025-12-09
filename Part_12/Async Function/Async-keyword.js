async function geet(){
    return "hello";
}
geet()
 .then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ",result);
 })
 .catch((error)=>{
    console.log("promise was error");
    console.log("error was :",error);
 })

let gh=async()=>{   //Arror function.
    console.log("Arror Async function");
}