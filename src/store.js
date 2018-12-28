import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import list from "./reducers/listReducer";

export default createStore(
    combineReducers({
        list
    }),
    applyMiddleware(logger,thunk)
);