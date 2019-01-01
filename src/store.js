import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import list from "./reducers/listReducer";
import items from "./reducers/itemsReducer";
import menu from "./reducers/menuReducer";
export default createStore(
    combineReducers({
        list,
        items,
        menu
    }),
    applyMiddleware(logger,thunk)
);