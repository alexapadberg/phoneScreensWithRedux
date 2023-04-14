import {Button, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {resetSettings, updateSettings} from "../store/actions/settings";
import {settings} from "../store/reducers";
import {searchName} from "../store/actions/manageRecordings";


export default function Home(props) {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const store_on_sd_card = useSelector((state) => settings.store_on_sd_card);
    //reflects the reducer

    //pass through props (properties) instead of navigation, then implement useNavigation()
    return (


            <Button
                title="test reset"
                style={HomeScreenStyle.buttonStyle}>
                onPress={() => dispatch(resetSettings())}
                //action called
                />
            <Button
                title="test update"
                onPress={()=> dispatch(updateSettings([], !store_on_sd_card))}
                //set values
                />

            <Text>
                {store_on_sd_card}
            </Text>

            <Button
                title= "manage recordings testing"
                onPress={()=> dispatch(searchName())}/>
            <Text
                style ={HomeScreenStyle.title}>
                Welcome to Phone Array
            </Text>

            <View style={HomeScreenStyle.title}/>

            <Button
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
                color= '#1953B7'
            />

            <View style={{ flex: .2, alignItems: 'right', justifyContent: 'left'}}/>

            <Button style={HomeScreenStyle.buttonStyle}
                    title="Add New Recording"
                    onPress={() => navigation.navigate('AddRecordings')}
                    color= '#1953B7'
            />


            <View style={{ flex: .2, alignItems: 'right', justifyContent: 'left'}}/>

            <Button
                    title="Manage Recordings"
                    onPress={() => navigation.navigate('ManageRecordings')}
                    color= '#1953B7'
            />

        </>
    );
}



const HomeScreenStyle = StyleSheet.create({
    container:{
        width:'100%',
        textAlign:"left",
        alignItems: 'flex-end',
        color: 'blue',
        marginBottom:8,
        justifyContent: "flex-start"
    },
    title: {
        color: 'black',
        padding: '5',
        fontSize: '20'
    },
    buttonsContainer: {
        flexDirection:"row",
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        marginVertical: 20,
        color: 'black',
    },
    buttonStyle:{
        color: 'green'
    }


});