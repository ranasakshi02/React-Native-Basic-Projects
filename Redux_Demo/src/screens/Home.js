//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput,
    FlatList,
} from 'react-native';
import CustButton from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getCities } from '../redux/actions';

import PushNotification from "react-native-push-notification";


import Map from './Map';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);


export default function Home({ navigation, route }) {
    const { name, age, cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    useEffect(() => {
        getData();
        dispatch(getCities())
    }, []);

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             let user = JSON.parse(value);
            //             setName(user.Name);
            //             setAge(user.Age);
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            dispatch(setName(userName));
                            dispatch(setAge(userAge));
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                // var user = {
                //     Name: name
                // }
                // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));

                await db.transaction(async (tx) => {
                    await tx.executeSql(
                        "UPDATE Users SET Name=?",
                        [name],
                        () => {
                            Alert.alert('Success!', 'Your data has been updated.');
                        }, error => { console.log(error) }
                    );

                })

            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            //await AsyncStorage.clear();
            await db.transaction(async (tx) => {
                await tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => { navigation.navigate('Login'); },
                    error => { console.log(error) }
                );
            })

        } catch (error) {
            console.log(error);
        }
    }
    const handleNotification = (item) => {
        // PushNotification.cancelAllLocalNotifications();


        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You Clicked on " + item.country,
            message: item.city,
            bigText: item.city + " is one of the largest and most beautiful",
            color: "red",

        });
        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm ",
            message: "You clicke on " + item.city + " 20 sec ago",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,

        })
    }


    return (
        <View style={styles.body}>
            <Text style={
                styles.text}>
                Welcome {name} !
            </Text>

            <CustButton
                title='OpenCamera'
                color='#f40100'
                onPressButton={()=>{navigation.navigate('Camera')}}
            />
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>{
                            handleNotification(item)
                            navigation.navigate('Map',{
                                city:item.city,
                                lat:item.lat,
                                lng:item.lng,
                            });
                            }}
                                                
                        >
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.country}</Text>
                            <Text style={styles.subtitle}>{item.city}</Text>
                        </View>
                    </TouchableOpacity>

                )}
                keyExtractor={(item, index) => index.toString()}
            />

            {/* <Text style={
                styles.text}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <CustButton
                title='Update'
                color='#ff7f00'
                onPressButton={updateData}
            />
            <CustButton
                title='Remove'
                color='#f40100'
                onPressButton={removeData}
            />

            <CustButton
                title='Increase Age'
                color='#f40100'
                onPressButton={()=>{dispatch(increaseAge())}}
            /> */}
            <CustButton
                title='Remove'
                color='#f40100'
                onPressButton={removeData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        margin: 5,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 5,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 7,
    },
    subtitle: {
        fontSize: 20,
        margin: 7,
        color: '#999999',
    }
})