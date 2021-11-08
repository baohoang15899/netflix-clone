import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'css/main.css'
import { Provider } from 'react-redux';
import store from 'StoreConfig';
import { HashRouter as Router, } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


