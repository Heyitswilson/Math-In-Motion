import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import Demo from './demo';
import DemoView from './components/demo_view';

window.Demo = Demo

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");
    let store = configureStore()
    window.getState = store.getState;
    // const Demoview = new DemoView(ctx)
    
    // Demoview.sinY(800, 600)
    ReactDOM.render(<Root store={store}/>, main)
});




