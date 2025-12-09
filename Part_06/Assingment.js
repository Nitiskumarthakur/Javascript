//Qs1.Write a JavaScript function that returns array elements larger than a number.
let arr=[12,3,4,5,5,8,7,9,10,2];
function number(n){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>=n){
            console.log(arr[i]);
        }
    }
}
number(11);


//Qs2.Write a JavaScript function to extract unique characters from a string.
let string=" abbcssaf";
function qnique(string){
    let ans="";
        for(let i=0;i<string.length;i++){
        let currentcharacter=string[i];
        if(ans.indexOf(currentcharacter)==-1){
            ans+=currentcharacter
        }
        
    }
   return ans;
    // console.log(ans);
}
qnique(string);

//Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
let country=["india","Nepal","bhutan","shreelanka","united of America"];
function longestName(country){
    let ansIdx=0;
    for(let i=0;i<country.length;i++){
    let anslen=country[ansIdx].length;
    let currlen=country[i].length;
    if(currlen>anslen){
        ansIdx=i;
    }
}
return country[ansIdx]
}
longestName(country);

//Qs4.Write a JavaScript function to count the number ofvowels in a String argument

// let string="apple";
// function countVowels(string){
//     let count =0;
//     for(let i=0;i<=string.length;i++){
//         if(string.charAt(i)=="a"||
//             string.charAt(i)=="e"||
//             string.charAt(i)=="i"||
//             string.charAt(i)=="o"||
//             string.charAt(i)=="u"){
//                 count++;
//             }
//     }
    
// }
let str="apnacollege";
function countVowels(str){ 
    let count=0;
    for(leti=0;i<str.length;i++){
        if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
            count++;
        }
    }
    returncount;
}
//Qs5:Write a javascript function to generate a random number within a range(start,end).
let start=100;
let end=200;
function generateRandom(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
 generateRandom(start,end)


