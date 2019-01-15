const viewerReucer = (state = {
    id:"",
    profileIsload:false
}, action) => {
    switch (action.type) {
        case "SET_VIEWER":
            return {
                id:action.id
            };
        case "SET_OWNER":
            return {
                ...state,
                owner:action.payload
            };
        case "SET_SHAREDWITHME":
            return {
                ...state,
                sharedWithMe:action.payload
            };
        case "VIEWER_CONVERT_SUCCESS":
            return {
                ...state,
                profile:action.profile,
                profileIsload:true
            };
        case "VIEWER_CONVERT_ERROR":
        return {
            ...state,
            profileIsload:true
        };
        default:
            return state
    }
};

export default viewerReucer;