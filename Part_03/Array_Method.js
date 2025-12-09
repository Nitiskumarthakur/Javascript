let student=["Nitish","vikash"," Amu"];
student.push("thakur");
console.log(student);
console.log(student.length);
student.pop();
console.log(student);

//unshift And Shift
student.unshift("thakur");
console.log(student);
student.shift();
console.log(student);

//Indexof
let fg=student.indexOf("Nitish")
console.log(fg)

//Concate
let student1=["robin","rakesh"];
console.log(student.concat(student1));

//Reverse
console.log(student1.reverse());

//slice
let newstu=["nk","jk","mk","ak","lk"];
 let nh=newstu.slice(-2  );
console.log(nh);
console.log(newstu);

//Splice
let y=["name","surname","middelaname","lastname","fullname","halfname"];
//y.splice(3);
// y.splice(0,1);
y.splice(0,1,"whatname");
console.log(y);
y.splice(1,0,"yourname");
console.log(y);

//Sort
let sh=["gun","Ball","van","don","you","kal","Zang"];
sh.sort();
console.log(sh);

