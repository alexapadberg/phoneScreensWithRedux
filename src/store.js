import {createStore } from 'redux'

//1. create the reducer
const reducer = (state, action) => {
    return state;
}

//2. create the store for the reducer

const store = createStore(reducer)

export default store