const axios = require("axios");

async function makeGet(url, params) {
    try {
        let response = null;

        if(url && typeof url === "string" ){
            response = await axios.get(url, params || {});
            return response.data;
        } else {
            console.log("Invalid URL passed! -- GET Method");
        }
        
        return null;
    } catch (error) {
        console.error(error);
    }
}

async function makePost(url, params) {
    try {
        let response = null;
        
        if(url && typeof url === "string" ){
            response = await axios.post(url, params || {});
            return response.data;
        } else {
            console.log("Invalid URL passed! -- POST Method");
        }
        
        return null;
    } catch (error) {
        console.error(error);
    }
}

export default async function sendCall(method, url, params) {
    
    if(method && typeof method === "string"){
        switch(method.toUpperCase()){
            case "GET":
                return await makeGet(url, params);
            case "POST":
                return await makePost(url, params);
            default:
                console.log("Resolver not availale -- HTTP Helper");
                return async () => await null;
        }
    } else {
        console.log("Invalid method passed -- HTTP Helper");
    }
    
}