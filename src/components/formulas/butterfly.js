import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions';
import $ from 'jquery'
import Sin from '../../util/sin'

class Butterfly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos",
            y_func: "cos"
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Sin = new Sin(this.props.context);
        this.rgb = this.rgb.bind(this);
    }


    componentDidMount() {
        this.props.receiveGraph("butterfly")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    rgb(t) {
        function r(t) {
            return 100 + Math.cos(t / 300) * 700;
        };
        function g(t) {
            return Math.sin(t / 400) * 500;
        };
        function b(t) {
            return 200 + Math.sin(t / 60) * 55;
        };

        return `rgb(
                ${r(t)},
                ${g(t)},
                ${b(t)})`;
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_func);
        this.props.receiveY(this.state.y_func);
        // this.props.runDemoView()
        let t = 0

        function clear() {
            $('.update-changes').click(clearInterval(butterflyInterval))
        }
        
        let butterflyInterval = setInterval(() => {

            
            this.props.context.fillStyle = this.rgb(t)
                
                t += 1
            if (t < 250) {
              this.Sin.butterfly(
                this.props.context,
                800,
                600,
                t / (12 * Math.PI),
                this.state.x_func,
                this.state.y_func
              );
            } else {
                clearInterval(butterflyInterval)
            }
        }, 20);
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\${this.state.x_func}(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\color{red}{\\${this.state.y_func}(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;

        return (
            <div>   
                <div className="slider-div">
                    <select className="select-func" onChange={this.update("x_func")}>
                        <option value={"cos"}>cos(t)</option>
                        <option value={"sin"}>sin(t)</option>
                        <option value={"tan"}>tan(t)</option>
                    </select>

                    <select className="select-func" onChange={this.update("y_func")}>
                        <option value={"cos"}>cos(t)</option>
                        <option value={"sin"}>sin(t)</option>
                        <option value={"tan"}>tan(t)</option>
                    </select>
                    <div className="buttons">
                        <button className="update-changes" onClick={() => this.handleSubmit()}>Run</button>
                    </div>
                </div>
                <MathJax.Context input="tex">
                    <div className="labels">
                        <MathJax.Node>{texX}</MathJax.Node>
                        <MathJax.Node>{texY}</MathJax.Node>
                    </div>
                </MathJax.Context>
                
            </div>
        );
    }
}

const mSTP = state => ({
    x: state.x,
    y: state.y,
    graph: state.graph,
    context: state.context
})

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Butterfly)