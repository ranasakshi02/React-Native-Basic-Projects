import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

export default function SignUp({ navigation }) {
    const onPressHandler = () => {
        navigation.goBack();
    }

    const [selectedCode, setselectedCode] = useState('Male');
    const [done, setDone] = useState(false);
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#000080' barStyle="light-content" />
                <View style={styles.header}>
                </View>
                <View style={styles.footer}>
                    <View style={styles.logo_container}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logo_footer}
                            resizeMode="stretch"
                        />
                    </View>
                    <Text style={styles.text_heading}>Sign Up</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.text_footer,
                            {
                                marginTop: 20
                            }]}>First Name</Text>

                            <View style={[styles.action, { marginRight: 20 }]}>
                                <TextInput
                                    placeholder='Enter First Name'
                                    placeholderTextColor='#999999'
                                    style={styles.textInput}
                                    autoCapitalize='none' />
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={[styles.text_footer,
                            {
                                marginTop: 20
                            }]}>Last Name</Text>

                            <View style={[styles.action]}>
                                <TextInput
                                    placeholder='Enter Last Name'
                                    placeholderTextColor='#999999'
                                    style={styles.textInput}
                                    autoCapitalize='none' />
                            </View>
                        </View>
                    </View>

                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Enter Email Address'
                            placeholderTextColor='#999999'
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>

                    <View
                        style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.text_footer,
                            {
                                marginTop: 20
                            }]}>Phone Number</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1.5 }}>
                                    <View style={[styles.action, { marginRight: 10, marginTop: -12 }]}>
                                        <Picker style={styles.drop_down}
                                            selectedValue={selectedCode}
                                            onValueChange={(itemValue) => setselectedCode(itemValue)}
                                            mode='dropdown'>
                                            <Picker.Item label='+1' value='+1' />
                                            <Picker.Item label='+2' value='+2' />
                                            <Picker.Item label='+3' value='+3' />
                                            <Picker.Item label='+4' value='+4' />
                                            <Picker.Item label='+5' value='+5' />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{ flex: 3.5 }}>
                                    <View style={[styles.action, { marginLeft: 10 }]}>
                                        <TextInput
                                            placeholder='Enter Phone Number'
                                            placeholderTextColor='#999999'
                                            style={styles.textInput}
                                            keyboardType='phone-pad' />
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>

                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Username</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Choose a Username'
                            placeholderTextColor='#999999'
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.text_footer,
                            {
                                marginTop: 20
                            }]}>Gender</Text>
                            <View style={[styles.action, { marginRight: 20, marginTop: -12 }]}>
                                <Picker style={styles.drop_down}
                                    selectedValue={selectedCode}
                                    onValueChange={(itemValue) => setselectedCode(itemValue)}
                                    mode='dropdown'>
                                    <Picker.Item label='Male' value='Male' />
                                    <Picker.Item label='Female' value='Female' />
                                    <Picker.Item label='Other' value='Other' />
                                </Picker>
                            </View>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={[styles.text_footer,
                            {
                                marginTop: 20
                            }]}>Date Of Birth</Text>

                            <View style={[styles.action, {  }]}>
                                <TextInput
                                    placeholder='dd/mm/yyyy'
                                    placeholderTextColor='#999999'
                                    style={styles.textInput}
                                    autoCapitalize='none' />
                            </View>
                        </View>
                    </View>

                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Create Password</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Enter Password'
                            placeholderTextColor='#999999'
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>

                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Re-enter Password</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Re-enter Password'
                            placeholderTextColor='#999999'
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>

                    <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                        <View style={styles.checkbox}>
                            <CheckBox
                            value={done}
                            onValueChange={(newValue) => setDone(newValue)}
                            tintColors={{ true: '#0000ff' }}
                            />
                        </View>
                        <Text style={styles.text_forgot}>I agree with terms & conditions</Text>

                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <Text style={{ width: 50, textAlign: 'center', fontSize: 20, color: '#000080', fontWeight: 'bold' }}>OR</Text>
                    </View>
                    <View style={styles.box_style}>
                        <View style={styles.box}>
                            <View style={{ alignItems: 'center', marginTop: 5, justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/google.png')}
                                    resizeMode='stretch'
                                    style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }} />
                                <Text style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5, fontSize: 15 }}>Google</Text>
                            </View>

                        </View>
                        <View style={styles.box}>
                            <View style={{ alignItems: 'center', marginTop: 5, justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/fb.png')}
                                    resizeMode='stretch'
                                    style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}
                                />
                                <Text style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5, fontSize: 15 }}>Facebook</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={{ alignItems: 'center', marginTop: 5, justifyContent: 'center' }}>
                                <Image
                                    source={require('../../assets/twiter.png')}
                                    resizeMode='stretch'
                                    style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }} />
                                <Text style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5, fontSize: 15 }}>Twitter</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#000080' }}>Already have account?</Text>
                        <Text
                            style={{ fontSize: 18, color: '#000080', fontWeight: 'bold', marginLeft: 5, borderBottomWidth: 1, borderBottomColor: '#000800' }}
                            onPress={onPressHandler}
                        >SignIn</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.150;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000080'
    },
    header: {
        paddingHorizontal: 10,
        paddingBottom: 30
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    logo_container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    text_footer: {
        color: '#000080',
        fontSize: 16
    },
    logo_footer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: height_logo,
        height: height_logo,
    },
    text_heading: {
        color: '#000080',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -15,
        color: '#000080',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:-4,
    },
    text_forgot: {
        color: '#0000FF',
        marginTop: 15,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0000FF'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    box_style: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    box: {
        width: 110,
        height: 80,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e5e5e5',
        backgroundColor: '#ffffff'
    },
    drop_down: {
        width: '100%',
        height: '50%',
        alignItems: "center",
    },
    checkbox: {
        flexDirection: 'row',
        margin: 10,
    },

})