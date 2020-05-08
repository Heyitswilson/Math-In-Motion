import React from "react";
import Bar from './bar';
import Main from './main'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render () {
        console.log(this.props.ctx)
        // const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext("2d");
        // const Demoview = new DemoView(ctx);
        return(
            <div>
            {/* {Demoview.sinY(800, 600)} */}
                <Bar />
                <Main ctx={this.props.ctx}/>
            </div>
        )
    }
}

export default App