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
        case "ADDITEM_SUCCESS":
            if (state.filter == "ALL" || state.filter == action.item.status){
                return {
                    items:[
                        action.item,
                        ...state.items
                    ],
                    filter:state.filter
                }
            }else{
                return state;
            }
            
        default:
            return state;
    }
    
};

export default itemsReducer;