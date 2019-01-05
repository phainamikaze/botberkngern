import config from "../config";
export const itemServices = {
    getItems,
    additem
};
function getItems(listid,filter){
    return fetch(config.API_ENDPOINT+"/item/"+listid+"?filter="+filter, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(body => {
        return(body.items);
    })
}

function additem(listid,amount,details){
    return fetch(config.API_ENDPOINT+"/item", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            amount,
            details
        })
    }).then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(body => {
        return(body.item);
    })
}