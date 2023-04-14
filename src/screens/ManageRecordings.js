import {Button, Text, View, StyleSheet} from "react-native";
import * as React from "react";





const ManageRecordings = () => {
    //const navigation = useNavigation();
    return (

        <View style={manageRecordingsStyle.container}>
            <Button
                title="back home"
                onPress={() => this.props.navigation.navigate('Home')}
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
            alignItems: 'flex-start',
            justifyContent: 'flex-start' },
    title:
        { flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start' }

});
export default ManageRecordings



