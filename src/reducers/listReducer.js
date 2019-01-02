const listReducer = (state = {
    id:0,
    name: "ลิสไม่มีชื่อ",
    owner:false
}, action) => {
    switch (action.type) {
        case "CREATE_LIST":
            // state = {
            //     ...state,
            //     title: action.payload
            // };
            break;
        default:
            return state;
    }
    
};

export default listReducer;