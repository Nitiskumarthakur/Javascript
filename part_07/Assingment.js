//Qs1.Write an arrowfunction named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arr=[2,3,4,5,6,8]
const avg=(arr)=>{
   let total=0;
   for(let number of arr){
    total+=number;
   }
   return total/arr.length;
}
console.log(avg(arr));

//Qs2.Write an arrow function named is Even() that  takes a single number as argument and returns if it is even or not.

let num=4;
const isEven=(num)=>num%2==0;


//
let length=4;
function callback(){ 
    console.log(this.length);
}
const object={
    length:5,
    method(callback)
    {
        callback();

    },
};
object.method(callback,1,2);