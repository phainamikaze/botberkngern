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
            if (state.filter === "ALL" || state.filter === action.item.status){
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
        case "DELITEM_SUCCESS":
            let result = {
                items:[
                    ...state.items
                ],
                filter:state.filter
            }
            let obj = result.items.find((o, index) => {
                if (o.createtime === action.item.createtime) {
                    result.items.splice(index, 1)
                    return true; // stop searching
                }
            });
            return result;
                
        default:
            return state;
    }
    
};

export default itemsReducer;