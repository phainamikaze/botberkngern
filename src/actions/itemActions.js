import { itemServices } from '../services/itemServices';
import menuActions from './menuActions';
const itemActions = {
    getItems,
    additem
}

function getItems(listid,filter){
    return dispatch => {
        dispatch(request(listid,filter));
        return itemServices.getItems(listid,filter)
            .then(
                items => { 
                    dispatch(success(items,filter));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(listid,filter) { return { type: "GETITEMS_REQUEST", listid,filter } }
    function success(items,filter) { return { type: "GETITEMS_SUCESS", items,filter } }
    function failure(error) { return { type: "GETITEMS_FAILURE", error } }
}
function additem(listid,amount,details){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.additem(listid,amount,details)
            .then(
                item => { 
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: "ADDITEM_REQUEST"} }
    function success(item) { return { type: "ADDITEM_SUCCESS", item } }
    function failure(error) { return { type: "ADDITEM_FAILURE", error } }
}
export default itemActions