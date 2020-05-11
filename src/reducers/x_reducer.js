import { RECEIVE_X, CLEAR } from '../actions/graph_actions';

const xReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_X:
      return action.x;
    case CLEAR: 
      return null;
    default:
      return state;
  }
};

export default xReducer;
