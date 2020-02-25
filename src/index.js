import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Store from './Store';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Redux/reducers/rootReducer';

const store = createStore(rootReducer);

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('touchstart', function(event){
    event.preventDefault();
});

ReactDOM.render(<Provider store = {store}><Store><App /></Store></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
