import { applyMiddleware, createStore } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '@store/reducer'
import { persistReducer } from 'redux-persist'
import persistConfig from "./config";

const pReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = (initialState={}) =>{
    console.log("[configureStore] Creating enhancers")
    const enhancers = composeWithDevTools(applyMiddleware(reduxThunkMiddleware))
    console.log("[configureStore] Creating creating store")
    const store = createStore(pReducer, initialState, enhancers)
    return store
}
