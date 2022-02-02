import React from 'react'
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

export default function SignIn({navigation}) {
   const onPressHandler= ()=>{
    navigation.navigate('Sign Up');
   }
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
                    <Text style={styles.text_heading}>Sign In</Text>
                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Username/email/phone no.</Text>

                    <View style={styles.action}>
                        <TextInput
                            placeholder='Enter First Name '
                            placeholderTextColor='#999999'
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>

                    <Text style={[styles.text_footer,
                    {
                        marginTop: 20
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='* * * * * *'
                            placeholderTextColor='#999999'
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize='none' />
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={styles.text_forgot}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
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
                        <Text style={{ fontSize: 18, color: '#000080' }}>Don't have an account yet?</Text>
                        <Text 
                        style={{ fontSize: 18, color: '#000080', fontWeight: 'bold', marginLeft: 5, borderBottomWidth: 1, borderBottomColor: '#000800' }}
                        onPress={onPressHandler}
                        >SignUp</Text>
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
    // actionError: {
    //     flexDirection: 'row',
    //     marginTop: 10,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#FF0000',
    //     paddingBottom: 5
    // },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -15,
        paddingLeft: 3,
        color: '#000080',
        fontSize: 15,
        fontWeight: 'bold'
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

})
