import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const addRecordingsStyle = StyleSheet.create({
    homeButton: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'left'
    },
    title: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center'
    }
})
export default function AddRecordings(){
    //const dispatch = useDispatch();
    const navigation = useNavigation();
    return (

        <View style={addRecordingsStyle.homeButton}>
            <Button
                title="back home"
                onPress={() => navigation.navigate('Home')}
                color= '#1953B7'
            />
            <View  style={{addRecordingsStyle.title}}/>
            <Text>Add Recording Screen</Text>
        </View>

    );
}
