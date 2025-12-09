let arr=[1,2,3,4,5];
let print= function(el){
    console.log(el);
}
// arr.forEach(print);
     //OR
// arr.forEach(function(el){
//     console.log(el);
// })

 
arr.forEach((el)=>{
    console.log(el);
});


let arr1=[{
  Name:"Nitish kumar thakur",
  Age:12
},
{
   Name:"Nitish kumar  ",
  Age:15
},
{
    Name:"Nitish  ",
  Age:13
}
];

arr1.forEach((nu)=>{
    console.log(nu.Age);
})