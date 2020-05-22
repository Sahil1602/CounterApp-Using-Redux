import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const initialState = {Likes: 0, Deslikes: 0, count:100}

const mainReducer = (prevState = initialState, action)=>{
    if(action.type === 'DECREASE_BY_ONE'){
        const updatedState = prevState.count - 1;
        return {...prevState, count: updatedState }
    }
    else if(action.type === 'INCREASE_BY_ONE'){
        const updatedState = prevState.count + 1;
        return {...prevState, count: updatedState }
    }
    else if(action.type === 'DECREASE_BY_FIFTY'){
        const updatedState = prevState.count - 50;
        return {...prevState, count: updatedState }
    }
    else if(action.type === 'INCREASE_BY_FIFTY'){
        const updatedState = prevState.count + 50;
        return {...prevState, count: updatedState }
    }
    return {...prevState}
}

const globalStore = createStore(mainReducer);

ReactDOM.render(<Provider store={globalStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
