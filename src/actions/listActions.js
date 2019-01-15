import { listService } from '../services/listServices';
import itemActions  from './itemActions';
import viewerActions from './viewerActions';

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
                    window.MessengerExtensions.requestCloseBrowser(null, null);
                    //history.push('/itemslist/'+body.id);
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

function getlist(listid,viewerId=null){
    return dispatch => {
        dispatch(request());
        return listService.getlist(
                listid
            ).then(
                body => { 
                    dispatch(success(body.list));
                    document.title = body.list.title;
                    if(!(viewerId===null)){
                        if(body.list.owner===viewerId){
                            dispatch(viewerActions.setOwn(true));
                            dispatch(viewerActions.setsharedwithMe(false));
                            if(body.list.sharedwith){
                                dispatch(viewerActions.convertId(body.list.sharedwith));
                            }else{
                                dispatch(viewerActions.convertId());
                            }
                        }else if(!body.list.sharedwith){
                            dispatch(updateSharedwith(listid,viewerId));
                        }else if(body.list.sharedwith===viewerId){
                            dispatch(viewerActions.convertId(body.list.owner));
                            dispatch(viewerActions.setOwn(false));
                            dispatch(viewerActions.setsharedwithMe(true));
                        }else{
                            dispatch(viewerActions.setOwn(false));
                            dispatch(viewerActions.setsharedwithMe(false));
                        }
                    }
                    
                    
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
function updateSharedwith(listid,viewerId){
    return dispatch => {
        return listService.updateSharedwith(listid,viewerId).then((body)=>{
            dispatch(viewerActions.setOwn(false));
            dispatch(viewerActions.setsharedwithMe(true));
            dispatch(success(body.item));
            dispatch(viewerActions.convertId(body.item.owner));
        });
    };
    function success(list) { return { type: "GETLIST_SUCCESS",list} }
}
export default listActions