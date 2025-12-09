function hello(){
    console.log("call stack ");
    last();
}

function con(){
    console.log("nitish thakur");
    hello();
}

function last(){
    console.log("Done");
}
con();