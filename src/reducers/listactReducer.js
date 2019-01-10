const listactReducer = (state =[], action) => {
    switch (action.type) {
        case "CONVERT_SUCCESS":
            return action.item
        default:
            return state;
    }
    
};

export default listactReducer;