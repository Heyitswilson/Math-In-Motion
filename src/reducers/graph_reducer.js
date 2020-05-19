import { RECEIVE_GRAPH, CLEAR } from "../actions/graph_actions";

const graphReducer = (state = "DNA Twists", action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GRAPH:
            return action.graph;
        case CLEAR:
            return "DNA Twists";
        default:
            return state;
    }
};

export default graphReducer;