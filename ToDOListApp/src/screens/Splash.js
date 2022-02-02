import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import PushNotification from "react-native-push-notification";
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({ navigation }) {
    useEffect(() => {
        createChannels();
        setTimeout(() => {
            navigation.replace('My Tasks');
        }, 2000);
    }, []);
    //notification channel
    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "task-channel",
                channelName: "Task Channel"
            }
        )
    }
    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assets/checklist.png')}
                resizeMode='stretch'
            />
            <Text
                style={[
                    GlobalStyle.CustomFontBig,
                    styles.text
                ]}>To-Do List</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})
