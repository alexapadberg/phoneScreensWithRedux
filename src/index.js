import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "../App";


// 1. Create the reducer
const reducer = ( state , action ) => {
    //console.log( "** In Reducer State = ", state );
    return state;
}

// 2. Create the store
const store = createStore( reducer );

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);
