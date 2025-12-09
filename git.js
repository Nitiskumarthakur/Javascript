
let wrapper = document.querySelector(".wrapper");
let h4 = document.querySelector(".h");
let mode_p = document.querySelector(".mode p");
let mode_img = document.querySelector(".mode img");
// form section
let form = document.querySelector(".search");
let info = document.querySelector(".info");
let rff = document.querySelector(".rff");
// //Info-sectin
let profile_Img = document.querySelector("[data-img]");
let userName = document.querySelector(".name");
let joinDate = document.querySelector(".joinDate");
let ancherTage = document.querySelector(".ancherTage");
let about = document.querySelector(".about p");
console.log("16");
// Responce And followers And following
let repos = document.querySelector("[data-repos]");
let followers = document.querySelector("[data-followers]");
let following = document.querySelector("[data-following]");
//location And link
let userLocation = document.querySelector("[data-location]");
let userlink = document.querySelector("[data-link]");
let usertwitter = document.querySelector("[data-twitter]");
let useravailable = document.querySelector("[data-available]");


//Action perform
mode_img.addEventListener("click",()=>{
    if(mode_p.innerHTML == "Dark"){
        wrapper.classList.add("active");
        form.classList.add("active");
        info.classList.add("active");
        rff.classList.add("active");
        mode_p.innerHTML = "Light";
        mode_img.src="Assest/light_mode.png";
         
    }else{
        wrapper.classList.remove("active");
        form.classList.remove("active");
        info.classList.remove("active");
        rff.classList.remove("active");
        mode_p.innerHTML = "Dark";
        mode_img.src = "Assest/night-mode.png";
    }
});
//API stared.|
let btn = document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();//Stop form from refreshing page
    let userInput = document.querySelector(".inp").value;
    callAPI(userInput);
     
    document.querySelector(".inp").value="";
    
});
async function callAPI(userInput){
    try{
          
        const response = await fetch(
            `https://api.github.com/users/${userInput}`
        );

        if (!response.ok) {
          if (response.status === 404) alert("User Not Found");
            else alert("Error: " + response.status);
            return null;
        }

        const userdata = await response.json();
        console.log(userdata);
        fillInfo(userdata);

    }catch(e){
        alert("username_Note found");
        console.log(e.userdata);
    }
}
function fillInfo(n){
    ancherTage.href = n?.url;
}
function fillInfo(userN){
    userName.innerHTML = (userN?.login);
    //joinDate.innerText = userN?.
    ancherTage.innerHTML = userN?.login;
    ancherTage.href = userN?.html_url;
    about.innerHTML = userN?.bio;
    repos.innerHTML = userN?.public_repos;
    followers.innerHTML = userN?.followers;
    followers.innerHTML = userN?.following;
    joinDate.innerHTML = userN?.created_at?.split("T")[0];
    userLocation.innerHTML = userN?.location;
    profile_Img.src = userN?.avatar_url;
    usertwitter.innerHTML = userN?.twitter_username;
    
    // userlink.innerHTML = userN?.
}



































