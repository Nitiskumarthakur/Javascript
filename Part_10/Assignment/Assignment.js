//Qn1:Try out the following events in Event Listener on your own.
//    -mouseout
//    -keypress
//    -scroll
//    -load         [Use MDN forr help]
let btn=document.querySelector('button');
// btn.addEventListener("mouseout",function(){
//     console.log("mouseout on the buttom");
// });
btn.addEventListener("keypress",function(){
    console.log("mouseout on the buttom");
});

//Qs2.Create a button on the page using JavaScript.Addaneventlistener
//to the button that changes the button’s color to green when it is clicked.
btn.addEventListener('click',()=>{
    btn.style.color='green';
});

//Qn3.Create an input element on the page with a placeholder” enter your name” and an H2 heading on the page inside HTML.

function validateInput(input) {
    // Replace anything that is NOT a letter (a-z, A-Z) or space with empty string
    inp.value = inp.value.replace(/[^a-zA-Z ]/g, '');
    h3.innerText=inp.value;
    console.log(inp.value);
}

let inp=document.querySelector("input");
let h3=document.querySelector("h3");

inp.addEventListener('input',validateInput);