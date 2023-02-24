import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import React from "react";


import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderPage = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App isInitial={store.getState().authUserData.isInitial}/>
            </Provider>
        </React.StrictMode>
    );
}

renderPage();

store.subscribe(renderPage)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
