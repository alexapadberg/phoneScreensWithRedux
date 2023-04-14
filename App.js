import * as React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import ManageRecordings from "./src/screens/ManageRecordings";
//import store from "./src/store"
//import MainStackNavigator from './src/navigation/AppNavigator'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {configureStore} from "./src/store/store";
import {persistStore} from "redux-persist";
import AddRecordings from "./src/screens/AddRecordings";

//Redux setup
// Our global store
let store = configureStore({})

// Support caching of our redux store to AsyncStorage
const persistor = persistStore(store)

export default class App extends React.Component{
    constructor(props){
        super(props);

    }
    state = {}
    updateState = () => {}

render(){
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <View>
                    <ManageRecordings myState = {this.state.myState} updateState = {updateState}/>
                    <AddRecordings myState = {this.state.myState} updateState = {updateState}/>
                </View>
            </PersistGate>
        </Provider>
    );
}
}