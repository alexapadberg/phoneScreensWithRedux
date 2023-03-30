import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const addRecordingsStyle = StyleSheet.create({
    homeButton: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'left'
    },
    titles: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center'
    }
});

function AddRecordings(){
    //const dispatch = useDispatch();
    const navigation = useNavigation();
    return <View style={addRecordingsStyle.homeButton}>
        <Button
            title="back home"
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            color= '#1953B7'/>
        <View  style={addRecordingsStyle.titles}/>
        <Text>Add Recording Screen</Text>
    </View>;
}

export default AddRecordings