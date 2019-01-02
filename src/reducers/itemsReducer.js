const itemsReducer = (state = {
    filter: "NEW",
    items:[],
}, action) => {
    switch (action.type) {
        case "GETITEMS_SUCESS":
            return {
                items:action.items,
                filter:action.filter
            }
        default:
            return state;
    }
    
};

export default itemsReducer;