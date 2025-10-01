let h1=document.querySelector("h1");


// function changeColor(color,delay,nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//        if(nextChangeColor) nextChangeColor();// 👉 "If nextChange exists (is defined), then call it as a function."
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//        changeColor("green",1000,()=>{
//             changeColor("maroon",1000,()=>{
//               changeColor("blue",1000) ; 
//             });
//        });
//     });
// });
// //callback nesting ->call hell.


//Used the help of the Promise.
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color was change");
        },delay);
    });
}
changeColor("red",1000)
 .then(()=>{
    console.log("Red color was change");
    return changeColor("green",1000);
 })
 .then(()=>{
    console.log("Green color change");
    return changeColor("pink",1000);
 })
 .then(()=>{
    console.log("Pink color change");
    return changeColor("Orange",1000);
 })
 .then(()=>{
    console.log("orange color change");
    return changeColor("maroon",1000);
 })
 .then(()=>{
    console.log("Maroon color change");
 })








// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="yellow";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);


