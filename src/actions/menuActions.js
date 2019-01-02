
const menuActions = {
    show
}

function show(params){
    if(params==="ADDNEW"){
        return {
            type: "SHOW_ADDNEW"
        };
    }else if(params==="DETAIL"){
        return {
            type: "SHOW_LISTDETAIL"
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