import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Pressable,
    ScrollView,
    Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import DocumentPicker from 'react-native-document-picker';

import { useSelector, useDispatch } from 'react-redux';
import { createPdfData } from '../redux/actions';
import RNFS from 'react-native-fs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function PdfForm() {

    const [singleFile, setSingleFile] = useState(null);
    const [textData, setTextData] = useState('');
    const [layout, setLayout] = useState(0);
    const { file } = useSelector(state => state.pdfDataReducer);
    console.log(file + "=====")
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getPdfData());
    // }, []);
    const selectFile = async () => {
        // Opening Document Picker to select one file

        try {
            const fileSelect = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles]
            })
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(fileSelect));
            setSingleFile(fileSelect[0]);
            setLayout(1);
        }
        catch (error) {
            setSingleFile(null)
            if (DocumentPicker.isCancel(error)) {
                // If user canceled the document selection
                alert('Canceled');
            } else {
                // For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(error));
                throw error;
            }
        }

    }

    const uploadFile = () => {
        if (singleFile != null) {
            const fileToUpload = singleFile;

            dispatch(createPdfData(fileToUpload));
        }
        else {
            console.log("select file")
        }
    }

    const getFileData = async () => {
        try {
            console.log("File:-->" + file);
            const fileData = file.split('/');
            const fileName = fileData[fileData.length - 1];
            console.log("File Naem-->" + fileName);

            const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
            console.log("Local file->" + localFile);

            const options = {
                fromUrl: file,
                toFile: localFile
            }
            console.log(options + "options")
            RNFS.downloadFile(options).promise
                .then(async () => {
                    const getTextData = await RNFS.readFile(localFile);
                    //console.log(getTextData+"--data")
                    setTextData(getTextData)
                });
        }
        catch (error) { console.log(error) }
    }

    return (
        <View style={styles.body}>
            <View style={{ flex: 0.30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button_box} onPress={selectFile}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5
                                name='paperclip'
                                size={22}
                                color='#fff'
                            />
                            <Text style={[styles.text, { marginLeft: 5, color: '#fff' }]}>Select File</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_box} onPress={uploadFile}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5
                                name='upload'
                                size={22}
                                color='#fff'
                            />
                            <Text style={[styles.text, { marginLeft: 5, color: '#fff' }]}>Upload File</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {singleFile != null ? (

                    <Text style={[styles.text, { fontSize:15,marginTop: 10, marginLeft: 15 }]}>
                        File Name: {singleFile.name ? singleFile.name : ''}
                        {'\n'}
                        File Size: {singleFile.size ? singleFile.size : ''}
                    </Text>

                ) : null}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.button_box} onPress={getFileData}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5
                                name='sync-alt'
                                size={22}
                                color='#fff'
                            />
                            <Text style={[styles.text, { marginLeft: 5, color: '#fff' }]}>Convert File</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 0.75, borderRadius: 5, borderColor: '#b2b2b2', borderWidth: 2,margin:5 }}>

                <ScrollView>
                    <Text style={{ fontSize: 15 }}> {textData}
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',

    },
    button_box: {
        width: '40%',
        height: 50,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#0080ff',
        borderRadius: 10,

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
