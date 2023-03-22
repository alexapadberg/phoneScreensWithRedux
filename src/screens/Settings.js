import {Button, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const SettingsStyle = StyleSheet.create({
    container: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'left'
    },
    screenTitle: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center'
    }

});
export default function Settings(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={SettingsStyle.container}>
            <Button
                title="back home"
                onPress={() =>navigation.navigate('Home')}
                color= '#1953B7'
            />
            <View  style={}/>
            <Text>Settings Screen</Text>



        </View>



    );
}