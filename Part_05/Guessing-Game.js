let max=prompt("Enter the maximam number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter the guess NUmber");

while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("your are right! , Congratulation! Random Number was",random)
        break;
    }
    
    if(guess<random){
        guess=prompt("Hints: Your guess number was too small, please try again");
    }
    else{
        guess=prompt("Hints: Your guess  number was too Large, please try again");
    }
}