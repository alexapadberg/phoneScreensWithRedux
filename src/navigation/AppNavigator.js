import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ManageRecordings from '../screens/ManageRecordings'
import AddRecordings from "../screens/AddRecordings";
import Settings from "../screens/Settings"


const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                mode='modal'
                headerMode='none'
                <Stack.Screen name='Manage Recordings' component={ManageRecordings} />
                <Stack.Screen name='Add Recordings ' component={AddRecordings} />
                <Stack.Screen name='Settings' component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator