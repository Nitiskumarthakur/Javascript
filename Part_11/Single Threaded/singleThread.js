// let a=2
// console.log(a);
// let b=45
// console.log(b);
// console.log(a+b);

//synchrous nature.

setTimeout(()=>{
    console.log("Single thread");
},2000)

setTimeout(()=>{
    console.log("JS is Single threaded");
},3000)

console.log("Hello user");