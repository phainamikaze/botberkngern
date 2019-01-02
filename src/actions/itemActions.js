import { itemServices } from '../services/itemServices';

const itemActions = {
    getItems
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

export default itemActions