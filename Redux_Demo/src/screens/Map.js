import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import MapView from 'react-native-maps';
export default function Map({ route }) {

    const { city ,lat,lng} = route.params;

    return (
        <View style={styles.body}>
            <Text style={
                styles.text}>
                {city}
            </Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />


        </View>

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',

    }, 
    text: {
        fontSize: 30,
        margin: 10,
    },
    map:{
        height:'100%',
        width:'100%',
    }
});