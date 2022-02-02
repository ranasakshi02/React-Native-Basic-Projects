import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData, createData } from '../redux/actions';

export default function TextForm({ navigation }) {
    const [text, setText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const { allData } = useSelector(state => state.allDataReducer);
    const dispatch = useDispatch();
    console.log('allData->'+allData)
    const newData = {
        text: text,
        language: selectedLanguage,
    }
    const res = JSON.stringify(allData);

    var urlArray = []
    urlArray = Object.keys(allData);
    console.log("Data-->", urlArray);

    

    const setCreatedData = () => {
        dispatch(createData(newData));
       
    }
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder='Enter your Text'
                placeholderTextColor='#555'
                onChangeText={(value) => setText(value)} />
            <View style={styles.drop_view}>
                <Picker style={styles.drop_down}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                    mode='dropdown'>
                    <Picker.Item label='--Select Language--' value='' />
                    <Picker.Item label='en' value='en' />
                    <Picker.Item label='pl' value='pl' />
                    <Picker.Item label='fr' value='fr' />
                    <Picker.Item label='de' value='de' />
                    <Picker.Item label='it' value='it' />
                    <Picker.Item label='es' value='es' />
                    <Picker.Item label='cz' value='cz' />
                </Picker>
            </View>
            <View style={styles.button_view}>
                <TouchableOpacity
                    style={styles.submit_button}
                    onPress={setCreatedData}>
                    <Text style={[styles.text, {
                        color: '#fff'
                    }]}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:5}}>
                <Text style={styles.text} >
                    Response
                </Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={urlArray}
                renderItem={({ item }) => (
                    item != 'success' ?
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('WebData',{
                            data:item
                        })
                    }}
                    >
                        <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                        </TouchableOpacity>
                        : null
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#b2b2b2',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 25,

    },
    drop_down: {
        width: '100%',
        height: 50,
        alignItems: "center",
        borderWidth: 1,
    },
    drop_view: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#b2b2b2',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_view: {
        alignItems: 'center',
        marginTop: 20,
        width:'50%'
    },
    submit_button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0080ff'
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 5,
        width: 360,
        height:55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
