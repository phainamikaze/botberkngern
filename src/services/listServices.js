//import fetch from 'cross-fetch';
import config from "../config";
export const listService = {
    createlist
};
function createlist(owner,title){
    return createlistApi(owner,title);
}


function createlistApi(owner,title){
    return fetch(config.API_ENDPOINT+"/createlist", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            owner
        })
    }).then((res)=>{
        return res.id
    })
}
function test(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            reject('132')
        },5000)
    });
}