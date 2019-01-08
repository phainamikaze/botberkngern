
const viewerActions = {
    setViewer,
    setOwn,
    setsharedwithMe
}

function setViewer(id){
    return {
        type: "SET_VIEWER",
        id
    }; 
}
function setOwn(payload){
    return {
        type: "SET_OWNER",
        payload
    }; 
}
function setsharedwithMe(payload){
    return {
        type: "SET_SHAREDWITHME",
        payload
    }; 
}

export default viewerActions