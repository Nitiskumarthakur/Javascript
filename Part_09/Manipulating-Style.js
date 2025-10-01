let img=document.querySelector("img");
console.dir(img);
console.dir(img.style);

let heading =document.querySelector('h1');
console.dir(heading);
console.dir(heading.style);
//heading.style.color="red"; //change the colour h1;
//heading.style.backgroundColor='green';

let links =document.querySelectorAll(".box a");

for(link of links){
    link.style.color="green";
}
// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }