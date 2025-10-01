//Check if all number in our array are muliple of 10 or not.
let  arr=[10,20,30,40];
let ans=arr.every((el)=>el%10==0);
console.log(ans);

//create a function  to find the min number in  an array.
let min=arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }else {
        return el;
    }
})
console.log(min);