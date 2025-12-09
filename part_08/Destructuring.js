let names=["nitish","amu","rakesh","thakur"];

// let winner=names[0];
// let runnerup=name[1];
// let secoundRunnerup=[2];

//let [winner,runnerup,secoundRunnerup] =names;
let [winner,runnerup,...other] =names;


//Destructuring-object;
let student={
    Name:"nitish",
    Age:20,
    class:12,
    subject:["hindi","english","math","physics"],
    username:"@nitish",
    password:"bhgfj"
};
let {username,password}=student;
