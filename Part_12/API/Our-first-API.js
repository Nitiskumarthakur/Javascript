//console.log("nito");
// let bh="https://catfact.ninja/fact" ;
// fetch(bh)
//   .then((res)=>{
//     console.log(res);
//     // console.log(res.json());  //promise value.
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data.fact);  //data.fact
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


// console.log("A");
// setTimeout(() => 
// 	console.log("B"), 0);
// Promise.resolve().then(() =>  
// 	console.log("C"));
// console.log("D");

//output:-ADBC.

let url="https://catfact.ninja/fact";
async function  getUrl() {
try{
  let gt= await fetch(url);
  let bh= await gt.json();
  console.log(bh.fact);

  let gt1= await fetch(url);
  let bh2= await gt.json();
  console.log(bh2.fact);
}catch{
  console.log("name");
}
}

getUrl();