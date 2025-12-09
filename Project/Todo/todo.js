let inp=document.querySelector("input");
let btn=document.querySelector("button");

let ul=document.querySelector("ul");
console.dir(ul);

// for(list of li){
//     list.addEventListener("click",()=>console.log("mk"));
// }

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
     
    inp.value=" ";


});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){  //Event.terget.nodename= Find out whick user are click. nadename hota h(div,tag,button);
        let listItem=event.target.parentElement;
        console.log(event); //event =pointerEvent.
        listItem.remove();
    } 
     
})
 