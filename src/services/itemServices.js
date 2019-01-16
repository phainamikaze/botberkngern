import config from "../config";
export const itemServices = {
    getItems,
    additem,
    deleteitem,
    paiditem,
    confirmitem,
    paidall,
    confirmall
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

function additem(listid,amount,details,viewer){
    return fetch(config.API_ENDPOINT+"/item", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            amount,
            details,
            viewer
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
function deleteitem(listid,createtime){
    return fetch(config.API_ENDPOINT+"/item", {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            createtime
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
function paiditem(listid,createtime,viewer){
    return fetch(config.API_ENDPOINT+"/item/update", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            createtime,
            viewer,
            newstatus:"PAID"
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
function confirmitem(listid,createtime,viewer){
    return fetch(config.API_ENDPOINT+"/item/update", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            createtime,
            viewer,
            newstatus:"CONFIRM"
            
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

function paidall(listid,amount,viewer){
    return fetch(config.API_ENDPOINT+"/paidall", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            amount,
            viewer
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

function confirmall(listid,amount,viewer){
    return fetch(config.API_ENDPOINT+"/confirmall", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listid,
            amount,
            viewer
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