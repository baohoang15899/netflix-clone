import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'css/main.css'
import { Provider } from 'react-redux';
import store from 'StoreConfig';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


