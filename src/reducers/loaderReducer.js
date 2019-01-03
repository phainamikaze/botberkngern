const loaderReducer = (state = "NORMAL"
, action) => {
    switch (action.type) {
        case "LOADER_REQUEST":
            return "REQUEST";
        case "LOADER_SUCCESS":
            return "SUCCESS";
        case "LOADER_FAILURE":
            return "FAILURE";
        default:
            return "NORMAL";
    }
};

export default loaderReducer;