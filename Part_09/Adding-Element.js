//1. appendchild   2.append   3.prepend  4.insertAdjacent


let newP=document.createElement('p'); // create Attribute.
console.dir(newP);
newP.innerText="hello, I am nitish thakur";
console.dir(newP);

let body=document.querySelector('body');
body.appendChild(newP); // Add karte hai new Element. ko

let div=document.querySelector('div');
div.appendChild(newP);

let btn=document.createElement('button');// create button.
console.dir(btn);
btn.innerText="Click me!";

div.appendChild(btn);

newP.append(" this  used ",btn)// Appent Always adding in the least.

newP.prepend('new --- '); // always adding in  the first  

//4. insertAdjacentElement
let p=document.querySelector('p');
//p.insertAdjacentElement('beforebegin',btn);
// p.insertAdjacentElement("afterbegin",btn);
// p.insertAdjacentElement('beforeend',btn);
//p.insertAdjacentElement('afterend',btn);