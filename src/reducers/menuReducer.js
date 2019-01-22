const menuReducer = (state = {
    status:"FAB",
    showDialog:false
}, action) => {
    switch (action.type) {
        case "SHOW_ADDNEW":
            return {
                ...state,
                status:"ADDNEW"
            };
        case "SHOW_LISTDETAIL":
            return {
                ...state,
                status:"LISTDETAIL",
                payload:action.payload
            };
        case "SHOW_ITEMDETAIL":
            return {
                ...state,
                status:"ITEMDETAIL",
                payload:action.payload
            };
        case "SHOW_MENU":
            return {
                ...state,
                status:"FAB",
            };
        case "SHOWDIALOG":
            return {
                ...state,
                showDialog:true,
            };
        case "NOTSHOWDIALOG":
            return {
                ...state,
                showDialog:false,
            };
        default:
            return state
    }
};

export default menuReducer;