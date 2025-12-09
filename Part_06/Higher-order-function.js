function Multiple(f,n){ // higher order
    for(let i=1;i<=n;i++){
        f();
    }
}
let greet=function(){
    console.log("Hello");
}
// Multiple(greet,2);
Multiple(function(){console.log("nitish")},80);


//Higher order return function.

// let odd=function(n){
//     console.log(!(n%2==0));
// }

// let even=function(n){
//     console.log((n%2==0));
// }

function oddorEven(request){
    if(request=="odd"){
        let odd=function(n){
           console.log(!(n%2==0));
        }
        return odd;
    } 
    if(request=="even"){
        let even=function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request="even";


