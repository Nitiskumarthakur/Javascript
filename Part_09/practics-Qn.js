let body=document.querySelector('body');
let p1=document.createElement("p");
body.append(p1);
p1.innerText="Hey, I am Red!";
p1.classList.add('red');


let h4=document.createElement('h4');
body.append(h4);
h4.innerText='I am blue';
h4.style.color="blue";

 
let div=document.createElement('div');
body.append(div);
let h1=document.createElement('h1');
let p2=document.createElement('p');
h1.innerText='I am in a Div';
p2.innerText="ME TOO!";
div.append(h1);
div.append(p2);
div.classList.add('box');

