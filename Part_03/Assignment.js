//Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
let arr=[7,9,0,-2];
console.log(arr);
let fi=arr.slice(0,3);
console.log(fi);
//Write a JavaScript program to get the last n elements of an array.[n can be any positive number]
let fu=arr.slice(arr.length-3);
console.log(fu);
//Qs3.Write a JavaScript program to check whether a string is blank or not
// let str=prompt("enter the name")
// if(str==0){
//     console.log("str is empty")
// }
// else{
//     console.log("str in full");
// }
//Qs4.Write a JavaScript program to test whether the character at the given (character) index is lower case
 let check="nameNITI";
 let idx=[3];
 if(check[idx]==check[idx].toLowerCase()){
    console.log("character is lowercase");}
    else{
        console.log("character is not lowercase");
    }
 //Qs5.Write a JavaScript program to strip leading and trailing spaces from a string
 //let Q5=prompt("please enter a string");
 console.log(`originalstring= ${ Q5}`);
 //Qs6.Write a JavaScript program to check if an element exists in an array or not
 let  ann=["nk","nitish",45,64];
 let item=64;
 if(ann.indexOf(item)!==-1){
    console.log("element exists in array"); 
}else{
    console.log("element doesn't exist in bhearray");
}