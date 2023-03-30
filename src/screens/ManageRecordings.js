import {Button, Text, View, StyleSheet} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {connect, useSelector} from "react-redux";




const ManageRecordings = (props) => {
    return (

        <View style={manageRecordingsStyle.container}>
            <Button
                title="back home"
                onPress={() => navigation.navigate('Home')}
                color= '#1953B7'
            />
            <View  style={manageRecordingsStyle.title}/>
            <Text>Manage Recording Screen</Text>
        </View>
    )

}


const manageRecordingsStyle = StyleSheet.create ({
    container:
        { flex: .5,
            alignItems: 'center',
            justifyContent: 'left' },
    title:
        { flex: 1,
            alignItems: 'left',
            justifyContent: 'center' }

});
export default ManageRecordings



