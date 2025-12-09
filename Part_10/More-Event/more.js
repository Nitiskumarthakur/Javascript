let btn=document.querySelector("button");
let inp=document.querySelector("input");

inp.addEventListener('change',function(){
 console.log('input changed');
 console.log(inp.value);
});

inp.addEventListener('input',function(){
 console.log('input changed');
 console.log(inp.value);
});