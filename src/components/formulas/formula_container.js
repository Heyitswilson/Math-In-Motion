import { connect } from "react-redux";
import Formula from './formula';
import { receiveX, receiveY, receiveT, receiveFrame, clear } from '../../actions/graph_actions'

const mSTP = state => ({
    x: state.x,
    y: state.y,
    t: state.t,
    frames: state.frames,
})

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    receiveT: t => dispatch(receiveT(t)),
    receiveFrame: frame => dispatch(receiveFrame(frame)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Formula)