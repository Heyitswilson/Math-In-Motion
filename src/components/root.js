import React from "react";
import { Provider } from "react-redux";
import App from './App'

const Root = ({ ctx, store }) => (
  <Provider store={store}>
      <App ctx={ctx}/>
  </Provider>
);

export default Root;