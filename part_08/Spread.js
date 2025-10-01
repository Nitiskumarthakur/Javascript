// Sperad is three dot(...);

let arr=[1,27,8,9,5,6,16,8,16];
let max=Math.min(...arr);
console.log(max);

let char="Nitish Thakur";

console.log(...char); 
let odd=[1,3,5,7,9];
let even=[0,2,4,6,8];
let num=[...odd, ...even];
console.log(num);

//Sperad with object literral.
let data={
    email:"nitish95651@gmail.com",
    password:456123
};
const dataCopy={...data, id:123};
console.log(dataCopy)