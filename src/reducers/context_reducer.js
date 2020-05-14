import { RECEIVE_CONTEXT } from '../actions/context_actions';

const contextReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONTEXT:
      return action.context;
    default:
      return state;
  }
};

export default contextReducer;