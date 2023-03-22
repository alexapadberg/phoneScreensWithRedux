import * as React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, useDispatch } from "react-router-dom";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationActions as navigation} from "react-navigation";
import { configureStore } from '@reduxjs/toolkit'


function SettingsScreen() {
    return (
        <View style={{ flex: .5, alignItems: 'center', justifyContent: 'left' }}>
            <Button
                title="back home"
                onPress={() =>navigation.navigate('HomeScreen')}
                color= '#1953B7'
            />
            <View  style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}/>
            <Text>Settings Screen</Text>



        </View>



    );
}
function AddRecordingScreen(){
    return (

        <View style={{ flex: .5, alignItems: 'center', justifyContent: 'left' }}>
            <Button
                title="back home"
                onPress={() => navigation.navigate('HomeScreen')}
                color= '#1953B7'
            />
            <View  style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}/>
            <Text>Add Recording Screen</Text>
        </View>

    );
}

function ManageRecordingScreen(){
    return (

        <View style={{ flex: .5, alignItems: 'center', justifyContent: 'left' }}>
            <Button
                title="back home"
                onPress={() => navigation.navigate('HomeScreen')}
                color= '#1953B7'
            />
            <View  style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}/>
            <Text>Manage Recording Screen</Text>
        </View>

    );

}
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name ="Settings" component={SettingsScreen } />
                <Stack.Screen name = "AddRecordings" component = {AddRecordingScreen}/>
                <Stack.Screen name = "ManageRecordings" component={ManageRecordingScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'right',
        width: '100%',
        marginVertical: 20,
        color : 'black',
    },
    buttonStyle :{
        color: 'green'
    }
});

