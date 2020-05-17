import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore()
    ReactDOM.render(<Root store={store}/>, main)
});




