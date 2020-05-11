import {
  RECEIVE_Y, CLEAR
} from "../actions/graph_actions";

const yReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_Y:
      return action.y;
    case CLEAR:
        return null;
    default:
      return state;
  }
};

export default yReducer;
