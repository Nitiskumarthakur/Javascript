let favorite="Game changer";
let guess=prompt("Enter you favorite movie");
while((guess!=favorite)&&(guess!="quick")){
    console.log("Wrong");
   guess =prompt("wrong guess. please try Again");
}
if(guess==favorite){
    console.log("congratulation");
}