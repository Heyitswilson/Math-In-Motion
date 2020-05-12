import { combineReducers } from "redux";
import xReducer from './x_reducer';
import yReducer from './y_reducer';
import tReducer from './t_reducer';
import framesReducer from './frames_reducer';
import graphReducer from './graph_reducer';

const rootReducer = combineReducers({
    x: xReducer,
    y: yReducer,
    t: tReducer,
    frames: framesReducer,
    graph: graphReducer
});

export default rootReducer;