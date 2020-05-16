import { connect } from 'react-redux';
import { receiveGraph } from '../../actions/graph_actions';
import Dropdown from './dropdown';

const mSTP = state => ({
    graph: state.graph
})

const mDTP = dispatch => ({
    receiveGraph: graph => dispatch(receiveGraph(graph))
})

export default connect(mSTP, mDTP)(Dropdown)