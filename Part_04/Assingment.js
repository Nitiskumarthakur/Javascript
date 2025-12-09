//Qn1:-Write a JS program to delete all occurrences of element ‘num’ in a given array.



//Answer
// let num=[4,5,3,8,2,9,0];
// for(let i=0;i<num.length;i++){
//     if(num[i]==2){
//        num.splice(i,1); 
//     }
//     console.log(i, num[i]);
// }
// console.log(num);
 
//Qn2:-Write a JS program to find the no of digits in a number.
//  let num=prompt("enter the number");
// let arry=[]; 
// arry.push(num);
// console.log(arry.length);

// let num=234525;
// let count=0;
// let copy=num;
//  while(copy>0){
//     count++;
//     copy=Math.floor(copy/10)
// }
// console.log(count); 


//Qn3:-Write a JS program to find the sum of digits in a number.
// let num=12345;
// let sum=0;
// let copy=num;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);



//Qn4:-Print the factorial of a number n.
// let num=5;
// let factorial=1;
// for(let i=1;i<=num;i++){
//     factorial *= i;
// }
// console.log(factorial);

//Qn:-find the leargest number of the Array,
let num=[3,,5,8,9,5,9,55,];
let largest=0;
for(let i=0;i<=num.length;i++){
    if(largest<num[i]){
        largest=num[i];
    }
}
console.log(largest);