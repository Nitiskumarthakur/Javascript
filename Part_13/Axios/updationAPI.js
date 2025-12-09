let url="https://fakerapi.it/api/{version}/companies?_seed=12456";
let country="nepal";

async function getCollege(){
    try{
        let res= await axios.get(url);
        console.log(res)
    }catch{
        console.log("Error");
    }
}
getCollege();