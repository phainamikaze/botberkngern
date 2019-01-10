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
            let dresult = {
                items:[
                    ...state.items
                ],
                filter:state.filter
            }
            dresult.items.find((o, index) => {
                if (o.createtime === action.item.createtime) {
                    dresult.items.splice(index, 1)
                    return true; // stop searching
                }
            });
            return dresult;
        case "PAIDITEM_SUCCESS":
            let presult = {
                items:[
                    ...state.items
                ],
                filter:state.filter
            }
            presult.items.find((o, index) => {
                if (o.createtime === action.item.createtime) {
                    presult.items[index] = action.item
                    return true; // stop searching
                }
            });
            return presult;
        case "CONFIRMITEM_SUCCESS":
            let cresult = {
                items:[
                    ...state.items
                ],
                filter:state.filter
            }
            cresult.items.find((o, index) => {
                if (o.createtime === action.item.createtime) {
                    cresult.items[index] = action.item
                    return true; // stop searching
                }
            });
            return cresult; 
        default:
            return state;
    }
    
};

export default itemsReducer;