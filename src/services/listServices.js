//import fetch from 'cross-fetch';
import config from "../config";
export const listService = {
    createlist,
    getlist,
    updateSharedwith
};
function createlist(owner,title){
    return fetch(config.API_ENDPOINT+"/list", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            owner
        })
    }).then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(body => {
        return(body);
    })
}


function getlist(listid){
    return fetch(config.API_ENDPOINT+"/list/"+listid, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(body => {
        return(body);
    })
}

function updateSharedwith(listid,viewerId){
    return fetch(config.API_ENDPOINT+"/list/updatesharedwith", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            viewerId
        })
    }).then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(body => {
        return(body);
    })
}
// function test(){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             reject('132')
//         },5000)
//     });
// }