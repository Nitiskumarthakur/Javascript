function Name(){
    console.log("Nitish kumar");
}

function isAdult(){
    let age=23;
    if(age>18){
        console.log("Adult");
    }
    else{
        console.log("not Adult");
    }
}
// isAdult();

//Qn:print a peom
function peom(){
    console.log(" कलम, आज उनकी जय बोल");
console.log("जला अस्थियाँ बारी-बारी ");
console.log("छिटकाई जिनने चिंगारी,");
console.log("जो चढ़ गये पुण्यवेदी पर लिए बिना गर्दन का मोल।");
console.log("जो चढ़ गये पुण्यवेदी पर लिए बिना गर्दन का मोल।");
}
// peom();


// create a funtion to roll a dice & always display the value of the dice (1 to 6).

function dice(){
    let value=Math.floor(Math.random()*6)+1;
    console.log(value);
}
// dice();



//Funtion With Argument|
function printName(name){
    console.log(name)
}
printName("nitish");

function printINFO(name, age){
    console.log(`${name}'s age is ${age}.`);
   
}
printINFO("Nitish",45);
printINFO("Thakur");

//Creat a function that given us the average of 3 Nuber.
function Avg(a,b,c){
      console.log((a+b+c)/3);
}
Avg(2,2,4)
//Create a function that prints the Multiplication table of a number.
function table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
table(51);