import { purgeStoredState, persistCombineReducers } from 'redux-persist'
import * as reducers from './reducers'
import persistConfig from "./config";


const appReducers = persistCombineReducers(persistConfig, reducers)

export const clearPersistedState = () => {
    purgeStoredState(persistConfig);

}

const rootReducer = (state, action) => {
    //May change these depending on device
    if (action.type === 'RESET') {
        console.log('[store][reducers][rootReducer] Clearing app state')
        state = {}
        clearPersistedState()
    }
    return appReducers(state, action)
}

export default rootReducer