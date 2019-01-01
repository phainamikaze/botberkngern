
const menuActions = {
    showAddnew,
    showListdetail,
    showMemu,
    setFilter
}

function showAddnew(){
    return {
        type: "SHOW_ADDNEW"
    };
}
function showListdetail(){
    return {
        type: "SHOW_LISTDETAIL"
    };
}
function showMemu(){
    return {
        type: "SHOW_MENU"
    };
}
function setFilter(filter){
    return {
        type: "SET_FILTER",
        filter
    };
}

export default menuActions