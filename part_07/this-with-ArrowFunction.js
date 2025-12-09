const student={
    name:"nitish thakur",
    age:20,
    getName:function(){
        console.log(this); // laxical  scope-- 
        console.log(this.name);
    },
    getAge:() =>{
        console.log(this);  // parents scope-> windows.
        console.log(this.Age);
    },
    getInfo1:function(){
     setTimeout(()=>{   // student.
        console.log(this)
     },2000);
    },
    getInfo2: ()=>{
      setTimeout(()=>{
        console.log(this)  //window
     },2000);
    }
}

//Write an arrow function that the returns the square of a number.
const squ=(n)=>{
    console.log(n*n);
}

// write a function that prints "hello World" 5 times at intervals of 2s each.
let id=setInterval(()=>{
  console.log("Hello world!");
},2000);

setTimeout(()=>{
clearInterval(id);
},10000);