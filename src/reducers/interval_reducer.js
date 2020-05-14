import { RECEIVE_INTERVAL, CLEAR_INTERVAL } from '../actions/interval_actions';

const intervalReducer = (state=null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_INTERVAL:
            return action.interval;
        case CLEAR_INTERVAL:
            return null;
        default:
            return state;
    }
};

export default intervalReducer;