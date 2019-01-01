const menuReducer = (state = "FAB"
, action) => {
    switch (action.type) {
        case "SHOW_ADDNEW":
            return "ADDNEW";
        case "SHOW_LISTDETAIL":
            return "DETAIL";
        case "SHOW_MENU":
            return "FAB";
        default:
            return state
    }
};

export default menuReducer;