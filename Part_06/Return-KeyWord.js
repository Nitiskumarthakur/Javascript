function sumof(a,b){
    return a+b;
}
sumof(3,5);

sumof(sumof(3,5),3);
console.log(sumof(sumof(3,5),3));

function Adult(age){
    if(age>=18){
        return "adult";
    }
    if(age<18){
        return "not Adult";
    }
    console.log("hello");
}
Adult(23);


//Create  a function that returns the sum of Number from 1 to n.
function nNumber(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i//sum=sum+i
    }

     return (sum);
}

// Create a function that returns the concatenation of all string in an array.
let str =["my","name","Nitish","thakur"];
function concate(str){
    let result=" ";
    for(let i=0;i<=str.length;i++){
        result  +=str[i];
    }
       return result;
}