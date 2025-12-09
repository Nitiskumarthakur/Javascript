//Ans1
let input=document.createElement('input');
let btn=document.createElement('button');
document.querySelector('body').append(input);
document.querySelector('body').insertAdjacentElement("afterend",btn);
//input.placeholder="Enter the  text !";
btn.innerText="click me!";

//Ans2
btn.setAttribute("id","btn");
input.setAttribute('placeholder'," username ");

//Ans3
btn.classList.add("btn");

//Ans4
let h1=document.createElement('h1');
document.querySelector('body').append(h1);
h1.innerHTML="<u>DOM practice </u>";
h1.style.color="purple";

//Ans5
let p=document.createElement('p');
p.innerHTML='Apna college <b>Delta</b> practice';
document.querySelector('body').append(p);