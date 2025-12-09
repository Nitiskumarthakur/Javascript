let form=document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault();
     

    //let user=document.querySelector('#user');
    //let pass=document.querySelector('#password');

    let user=this.elements[0];
    let pass=this.elements[1];

    console.dir(user.value);
    console.log(pass.value);

    alert(` Hi ${user.value}, you password is set to- ${pass.value}`)
});