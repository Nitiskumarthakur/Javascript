let num=[1,2,3,4,5];
let ret=num.reduce((acc,el)=>{
   // console.log(acc);
    return  acc+el;
})
console.log(ret);

let arr=[2,3,4,6,3,6,3,8];
// let max=-1;
// for(let i=0;i<=arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

let max=arr.reduce((num,el)=>{
     if(num>el){
        return num;
     }else{
        return el;
     }
})
console.log(max);

// let min=arr.reduce((num,el)=>{
//     if(num>el){
//         return el;
//     }else{
//         return num;
//     }
// })
// console.log(min);
