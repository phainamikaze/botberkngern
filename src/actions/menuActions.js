
const menuActions = {
    show,
    showDialog
}

function show(params,payload=null){
    if(params==="ADDNEW"){
        return {
            type: "SHOW_ADDNEW"
        };
    }else if(params==="LISTDETAIL"){
        return {
            type: "SHOW_LISTDETAIL",
            payload
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
function showDialog(params){
    if(params===true){
        return {
            type: "SHOWDIALOG"
        };
    }else{
        return {
            type: "NOTSHOWDIALOG"
        };
    }
}

export default menuActions