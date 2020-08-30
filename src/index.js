import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";

//incase node-sass has issues execute following: node node_modules/node-sass/scripts/install.js

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
