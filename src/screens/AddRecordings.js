import {Button, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

export default function AddRecordings(props){
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (

        <View style={{ flex: .5, alignItems: 'center', justifyContent: 'left' }}>
            <Button
                title="back home"
                onPress={() => navigation.navigate('Home')}
                color= '#1953B7'
            />
            <View  style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}/>
            <Text>Add Recording Screen</Text>
        </View>

    );
}
