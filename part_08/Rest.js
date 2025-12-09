function num(...args){  // Argument.
    for(let i=0;i<args.length;i++){
        console.log("you gave us!",  args[i]);
    }
}

function min(a,b,c,d){
    console.log(arguments) //console.log(argument.length)
}

// 
function sum(...args){
    return args.reduce((sum,el) => sum+el);
}

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
};