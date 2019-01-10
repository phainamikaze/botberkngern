import config from "../config";
const fbServices = {
    getProfile
};
function getProfile(userId,qs="first_name,last_name"){
    return fetch(config.API_ENDPOINT+"/fb/"+userId+"?qs="+qs, {
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
        return(body.data);
    })
}
export default fbServices