 
function outer(){
    let x=12,y=13;
    
    function inner(){
    console.log(x);
    }
    inner();
}
outer()