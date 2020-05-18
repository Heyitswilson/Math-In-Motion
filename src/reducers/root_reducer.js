import { combineReducers } from "redux";
import graphReducer from './graph_reducer';
import contextReducer from './context_reducer';

const rootReducer = combineReducers({
    graph: graphReducer,
    context: contextReducer
});

export default rootReducer;