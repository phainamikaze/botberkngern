import fbServices from '../services/facebookProfileServices';
const viewerActions = {
    setViewer,
    setOwn,
    setsharedwithMe,
    convertId
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
function convertId(fbId){
    return dispatch => {
        fbServices.getProfile(fbId,"first_name,last_name,picture")
        .then((profile)=>{
            dispatch(success(profile));
        });
    };
    function success(profile) { return { type: "VIEWER_CONVERT_SUCCESS", profile } }
}

export default viewerActions