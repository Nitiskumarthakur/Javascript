document.getElementsByClassName("oldImg");
let img=document.getElementsByClassName("oldImg");
console.log(img);

for(let i=0;i<img.length;i++){
    img[i].src="assets/spiderman_img.png";
    console.log(`change tha src ${[i]}`);
}
