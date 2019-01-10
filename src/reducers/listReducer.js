const listReducer = (state = {
    id:0,
    name: "ลิสไม่มีชื่อ",
    owner:false
}, action) => {
    switch (action.type) {
        case "GETLIST_SUCCESS":
            return {
                id:(action.list.owner+"_"+action.list.createtime),
                owner: action.list.owner,
                title: action.list.title,
                createtime: action.list.createtime,
                sharedwith: action.list.sharedwith,
                newval: action.list.newval,
                paid: action.list.paid,
                confirm: action.list.confirm,
            }
        default:
            return state;
    }
    
};

export default listReducer;