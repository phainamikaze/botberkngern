const itemsReducer = (state = {
    filter: "NEW",
    items:[],
}, action) => {
    switch (action.type) {
        case "CREATE_LIST":
            // state = {
            //     ...state,
            //     title: action.payload
            // };
            break;
        default:
            break;
    }
    return state;
};

export default itemsReducer;