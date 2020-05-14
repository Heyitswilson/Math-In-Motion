import { combineReducers } from "redux";
import xReducer from './x_reducer';
import yReducer from './y_reducer';
import tReducer from './t_reducer';
import framesReducer from './frames_reducer';
import graphReducer from './graph_reducer';
// import intervalReducer from './interval_reducer';
import contextReducer from './context_reducer';

const rootReducer = combineReducers({
    x: xReducer,
    y: yReducer,
    t: tReducer,
    frames: framesReducer,
    graph: graphReducer,
    context: contextReducer
    // interval: intervalReducer
});

export default rootReducer;