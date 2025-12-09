let h1=document.querySelector('h1');
h1.addEventListener('click',function(){
    this.style.color="red";
    console.log(this);
});

let h3=document.querySelector('h3');
h3.addEventListener('click',function(){
    this.style.color="pink";
    console.log(this);
});

let p=document.querySelector('p');
p.addEventListener('mouseenter',function(){
    this.style.backgroundColor='red';
    console.log(this);
});

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    this.style.backgroundColor="black";
    this.style.color="white";
    console.log(this);
})