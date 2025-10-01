let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll('li');

let h2=document.querySelector("h2");

div.addEventListener("click",function(){
    h2.innerText=("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    h2.innerText=("ul was clicked");
});

for(li of lis){
li.addEventListener("click",function(event){v
    event.stopPropagation();
    h2.innerText=("list was clicked");
});
}