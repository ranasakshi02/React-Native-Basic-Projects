//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    FlatList,
    Image,
} from 'react-native';
import CustButton from '../utils/CustomButton';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { getApiData } from '../redux/Actions';


const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);


export default function Home({ navigation, route }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const { apiData } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        getData();
        dispatch(getApiData())
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
                            setName(userName);
                            setAge(userAge);
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


    return (
        <View style={styles.body}>
            <Text style={styles.text}>Welcome,{name} !</Text>
            <Text style={styles.text}>Page:--{apiData.page}  Per_page:--{apiData.per_page} </Text>
            <Text style={styles.text}>Total_pages:--{apiData.total_pages}  Total:--{apiData.total} </Text>
            <FlatList
                data={apiData.data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image
                            style={styles.logo}
                            source={{ uri: item.avatar }}
                            resizeMode='stretch' />
                        <Text style={styles.subtitle}>{item.first_name}  {item.last_name}</Text>
                        <Text style={styles.subtitle}>{item.email}</Text>


                    </View>
                )}
            />
            {/* <Text style={
                styles.text}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
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
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        margin: 5,
        color: '#404040'
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
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 5,
        color: '#404040'
    },
    subtitle: {
        fontSize: 17,
        margin: 3,
        color: '#666666',
    },
    logo: {
        width: 70,
        height: 70,
        margin: 10,
    },
})