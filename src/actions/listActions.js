import { listService } from '../services/listServices';

export const listActions = {
    createlist
}
function createlist(history){
    return dispatch => {
        //dispatch(request({ username }));

        return listService.createlist()
            .then(
                listid => { 
                    dispatch(success(listid));
                    history.push('/itemslist');
                },
                error => {
                    history.push('/test');
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    //function request(user) { return { type: userConstants.LOGIN_REQUEST, listid } }
    function success(listid) { return { type: "OK", listid } }
    //function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}