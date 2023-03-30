import * as React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import ManageRecordings from "./src/screens/ManageRecordings";
import store from "./src/store"
import MainStackNavigator from './src/navigation/AppNavigator'

export default class App extends React.Component{
    constructor(props){
        super(props);

    }
    state = {}
    updateState = () => {}

render(){
    return(
        <View>
            <ManageRecordings myState = {this.state.myState} updateState = {updateState}/>
        </View>
    );
}
}