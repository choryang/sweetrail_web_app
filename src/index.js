import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { applyMiddleware, createStore } from "redux";
import PromiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import rootReducer from "_reducers";

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      rootReducer,
      //redux dev tool 크롬 확장앱 사용
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
