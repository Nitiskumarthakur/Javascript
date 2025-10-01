// function savedata (data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 5){
//        success();
//     }else{
//         failure();
//     }
// }

 
// savedata(
//     "nitish",
//     ()=>{
//         console.log("sucess : data was saved");
//         savedata("kumar",      //Nested calling.
//             ()=>{
//                 console.log("sucess2 : data was saved");
//                 savedata("Call hell",
//                     ()=>{
//                         console.log("sucess3 : data was saved");
//                     },
//                     ()=>{
//                         console.log.log("failure3 : data was not saved")
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure2 : data was not saved")
//             }
//         );
//     },
//     ()=>{
//         console.log("failure : data was not saved");
//     }
// );

// Long code short karane ke liy ham promises ka used karane hai.

function savedata(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("data was seved");
        }else{
           reject("data was not saved");
        }
    });
}

savedata("nk")
 .then((result)=>{
    console.log("data1 saved");
    console.log("Result of promise: ",result);
    return savedata("niti");
 })
 .then((result)=>{
    console.log("data2 saved");
    console.log("Result of promise: ",result);
    return  savedata("nitish");
 })
 .then((result)=>{
    console.log("data3 saved")
    console.log("Result of promise: ",result);
 })
 .catch((error)=>{
    console.log("Error of promise: ",error);
 })