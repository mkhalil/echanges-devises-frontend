import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tauxJournalierDeviseReducer from './reducers/TauxJournalierDeviseReducer';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(tauxJournalierDeviseReducer, composeWithDevTools( applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
