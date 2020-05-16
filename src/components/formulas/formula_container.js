import { connect } from "react-redux";
import Formula from './formula';
import { receiveGraph, clear } from '../../actions/graph_actions'

const mSTP = state => ({
    graph: state.graph
})

const mDTP = dispatch => ({
    clear: () => dispatch(clear()),
    receiveGraph: graph => dispatch(receiveGraph(graph))
})

export default connect(mSTP, mDTP)(Formula)