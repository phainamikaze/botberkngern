import { listService } from '../services/listServices';

export const listActions = {
    createlist
}
function createlist(viewerId,title,history){
    return dispatch => {
        dispatch(request());
        return listService.createlist(
                viewerId,
                title
            ).then(
                listid => { 
                    dispatch(success());
                    history.push('/itemslist/'+listid);
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