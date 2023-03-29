import * as React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import ManageRecordings from "./src/screens/ManageRecordings";

export default class App extends React.Component{
    state = {}
    updateState = () => {}

render(){
    return(
        <View>
            <ManageRecordings myState = {this.state.myState} updateState = {this.updateStat}/>
        </View>
    );
}
}