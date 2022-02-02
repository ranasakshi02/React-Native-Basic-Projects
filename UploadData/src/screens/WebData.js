import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
export default function WebData({navigation,route}) {
    const { data} = route.params;
    console.log(data+"-=-=-=-=-=-")
    return (
        <View style={styles.body}>
            <WebView
            source={{
                uri:data
            }}
            />

            
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        margin:10
    }

});
