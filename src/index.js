import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./css/app.min.css";
import App from "./app.js";
import {createStore} from "redux";
import allReducer from "../reducers/index";
import {Provider} from "react-redux";
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default function Index() {
    return (
        <Provider store={store}>
            <Fragment>
                <App />
            </Fragment>
        </Provider>
    );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
