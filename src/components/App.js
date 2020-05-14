import React from "react";
import Main from './main';
import Header from './header/header'
import Formula from '../components/formulas/formula'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render () {
        // const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext("2d");
        // const Demoview = new DemoView(ctx);
        return(
            <div>
            {/* {Demoview.sinY(800, 600)} */}
                {/* <Header /> */}
                {/* <Formula /> */}
                <Main/>
            </div>
        )
    }
}

export default App