import { itemServices } from '../services/itemServices';
import menuActions from './menuActions';
import fbServices from '../services/facebookProfileServices';
const itemActions = {
    getItems,
    additem,
    deleteitem,
    paiditem,
    confirmitem,
    convertId,
    paidall
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
function additem(listid,amount,details,viewer){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.additem(listid,amount,details,viewer)
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
function deleteitem(listid,createtime){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.deleteitem(listid,createtime)
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
    function request() { return { type: "DELITEM_REQUEST"} }
    function success(item) { return { type: "DELITEM_SUCCESS", item } }
    function failure(error) { return { type: "DELITEM_FAILURE", error } }
}
function paiditem(listid,createtime,viewer){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.paiditem(listid,createtime,viewer)
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
    function request() { return { type: "PAIDITEM_REQUEST"} }
    function success(item) { return { type: "PAIDITEM_SUCCESS", item } }
    function failure(error) { return { type: "PAIDITEM_FAILURE", error } }
}
function confirmitem(listid,createtime,viewer){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.confirmitem(listid,createtime,viewer)
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
    function request() { return { type: "CONFIRMITEM_REQUEST"} }
    function success(item) { return { type: "CONFIRMITEM_SUCCESS", item } }
    function failure(error) { return { type: "CONFIRMITEM_FAILURE", error } }
}
function convertId(item){
    return dispatch => {
        let newitem = item.act.map((actitem)=>{
            return fbServices.getProfile(actitem.user,"first_name").then((profile)=>{
                return {
                    ...actitem,
                    user:profile['first_name']
                };
            })
            
        })
        
        Promise.all(newitem).then((mynewitem)=>{
            dispatch(success(mynewitem));
        })
        
    };
    function success(item) { return { type: "CONVERT_SUCCESS", item } }
}
function paidall(listid,amount,viewer){
    return dispatch => {
        dispatch(menuActions.show("SHOW_MENU"));
        dispatch(request());
        return itemServices.paidall(listid,amount,viewer)
            .then(
                body => { 
                    dispatch(getItems(body.listid,"PAID"));
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request() { return { type: "PAIDALLITEM_REQUEST"} }
    function success() { return { type: "PAIDALLITEM_SUCCESS"} }
    function failure(error) { return { type: "PAIDALLITEM_FAILURE", error } }
}
export default itemActions