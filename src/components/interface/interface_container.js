import { connect } from "react-redux";
import Formula from './interface';

const mSTP = state => ({
    graph: state.graph
})


export default connect(mSTP, null)(Formula)