import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AppContainer, SamuraiJSApp} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './redux/reduxStore'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(111111111)
    root.render(
        <React.StrictMode>
            {/*<BrowserRouter>*/}
            {/*<Provider store={store}>*/}
            {/*    <AppContainer />*/}
            {/*</Provider>*/}
            {/*</BrowserRouter>*/}
            <SamuraiJSApp />
        </React.StrictMode>
    );

reportWebVitals();
