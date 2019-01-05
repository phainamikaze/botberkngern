
const menuActions = {
    show
}

function show(params,payload=null){
    if(params==="ADDNEW"){
        return {
            type: "SHOW_ADDNEW"
        };
    }else if(params==="LISTDETAIL"){
        return {
            type: "SHOW_LISTDETAIL"
        };
    }else if(params==="ITEMDETAIL"){
        return {
            type: "SHOW_ITEMDETAIL",
            payload
        };
    }else if(params==="FAB"){
        return {
            type: "SHOW_MENU"
        };
    }else{
        return {
            type: "SHOW_MENU"
        };
    }
        
}

export default menuActions