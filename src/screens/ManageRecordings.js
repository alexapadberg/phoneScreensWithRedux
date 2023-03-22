import {Button, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";



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
export default function ManageRecordings(props){
    //const dispatch = useDispatch();
    const navigation = useNavigation();
    //const apm = useSelector((state) => state.apm);
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

    );

}
