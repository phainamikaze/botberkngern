const listReducer = (state = {
    id:1,
    name: "ลิสไม่มีชื่อ",
    filter: "NEW",
    items:[
        1,2,3
    ],
}, action) => {
    switch (action.type) {
        case "CREATE_LIST":
            // state = {
            //     ...state,
            //     title: action.payload
            // };
            break;
    }
    return state;
};

export default listReducer;