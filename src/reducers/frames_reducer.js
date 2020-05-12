import { RECEIVE_FRAME, CLEAR } from "../actions/graph_actions";

const framesReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRAME:
      return action.frames;
    case CLEAR:
        return null;
    default:
      return state;
  }
};

export default framesReducer;
