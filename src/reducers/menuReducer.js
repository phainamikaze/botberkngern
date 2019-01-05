const menuReducer = (state = {
    status:"FAB"
}, action) => {
    switch (action.type) {
        case "SHOW_ADDNEW":
            return {
                status:"ADDNEW"
            };
        case "SHOW_LISTDETAIL":
            return {
                status:"LISTDETAIL"
            };
        case "SHOW_ITEMDETAIL":
            return {
                status:"ITEMDETAIL",
                payload:action.payload
            };
        case "SHOW_MENU":
            return {
                status:"FAB",
            };
        default:
            return state
    }
};

export default menuReducer;