import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import list from "./reducers/listReducer";
import items from "./reducers/itemsReducer";
import menu from "./reducers/menuReducer";
import loader from "./reducers/loaderReducer";
import viewer from "./reducers/viewerReducer";
export default createStore(
    combineReducers({
        list,
        items,
        menu,
        loader,
        viewer
    }),
    applyMiddleware(logger,thunk)
);