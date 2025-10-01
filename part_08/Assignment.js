//Qs1.Square and sum the array elements using the arrow function and then find the average of the array..
let arr=[1,2,3,4,6];
let square=arr.map((el)=>{
    return el*el;
});
console.log(square);
let sum=arr.reduce((as,el)=>{
    return as+el;
});
console.log(sum);
let Average= sum/arr.length;
console.log(Average);
//Qs2.Create a new array using the map function whose each element is equal to the original element plus 5...
console.log(arr.map((el) => (el+5)));



// Qs3.Create a new array whose elements are in upper case of words present int he original array..
let arr1=["Nitish","Thakur","Kumar"];
console.log(arr1.map((el)=>el.toUpperCase()));


//Qs4.Write a function called double And Return Args which accepts an array and avariable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled?
const doubleAndReturns=(arr2,...args)=> [
    ...arr2,...args.map((v)=>v*2),
]
doubleAndReturns([1,2,34],2,3,4,4);
console.log(doubleAndReturns);
 

//Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first
//  object and second object?

const marge=(obj1,obj2)=>({...obj1,...obj2});
let vb=marge({a:11,b:22},{c:1,d:2});
console.log(vb);
 

 













