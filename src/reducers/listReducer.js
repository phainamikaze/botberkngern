const listReducer = (state = {
    name: "ลิสไม่มีชื่อ"
}, action) => {
    switch (action.type) {
        case "CREATE_LIST":
            state = {
                ...state,
                title: action.payload
            };
            break;
    }
    return state;
};

export default listReducer;