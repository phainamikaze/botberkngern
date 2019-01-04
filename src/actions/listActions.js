import { listService } from '../services/listServices';
import itemActions  from './itemActions';

const listActions = {
    createlist,
    getlist
}
function createlist(viewerId,title,history){
    return dispatch => {
        dispatch(request());
        return listService.createlist(
                viewerId,
                title
            ).then(
                body => { 
                    dispatch(success());
                    history.push('/itemslist/'+body.id);
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: "LOADER_REQUEST"} }
    function success() { return { type: "LOADER_SUCCESS"} }
    function failure(error) { return { type: "LOADER_FAILURE", error } }
}

function getlist(listid){
    return dispatch => {
        dispatch(request());
        return listService.getlist(
                listid
            ).then(
                body => { 
                    dispatch(success(body.list));
                    dispatch(itemActions.getItems(listid,"NEW"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: "GETLIST_REQUEST"} }
    function success(list) { return { type: "GETLIST_SUCCESS",list} }
    function failure(error) { return { type: "GETLIST_FAILURE", error } }
} 
export default listActions