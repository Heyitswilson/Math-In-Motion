import { combineReducers } from "redux";
import graph_reducer from './graph_reducer'

const rootReducer = combineReducers({
    graph: graph_reducer
});

export default rootReducer;