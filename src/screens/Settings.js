import {Button, Text, View, StyleSheet} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const SettingsStyle = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    screenTitle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
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