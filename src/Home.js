import {Button, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";


const homeStyle = StyleSheet.create({
    container: {
         flex: 1,
        alignItems: 'right',
        width: "952",
        margin: 10,
        justifyContent: 'left'
    },
    title: {
        color: 'black',
        padding: '5',
        fontSize: '20'
    },
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
export default function Home(props) {
    const dispatch = useDispatch()
    const navigation = useNavigation();

    //pass through props (properties) instead of navigation, then implement useNavigation()
    return (
        <View style={homeStyle.container}>

            <Text style ={homeStyle.title}>
                Welcome to Phone Array
            </Text>

            <View style={homeStyle.title}/>

            <Button
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
                color= '#1953B7'
            />

            <View style={{ flex: .2, alignItems: 'right', justifyContent: 'left'}}/>

            <Button style={homeStyle.buttonStyle}
                    title="Add New Recording"
                    onPress={() => navigation.navigate('AddRecordings')}
                    color= '#1953B7'
            />


            <View style={{ flex: .2, alignItems: 'right', justifyContent: 'left'}}/>

            <Button style={homeStyle.buttonsContainer}
                    title="Manage Recordings"
                    onPress={() => navigation.navigate('ManageRecordings')}
                    color= '#1953B7'
            />

        </View>
    );
}