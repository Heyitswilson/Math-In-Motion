import { RECEIVE_T, CLEAR } from "../actions/graph_actions";

const tReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_T:
      return action.t;
    case CLEAR: 
        return null;
    default:
      return state;
  }
};

export default tReducer;
