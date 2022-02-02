import React from 'react';
import {
    View,
    StyleSheet,

} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';
export default function Camera() {

    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type='back'
                style={styles.preview}>
                <CustButton
                    title='Capture'
                    color='#f40100'
                    onPressButton={() => captureHandle()}
                />
            </RNCamera>
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
        margin: 5,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});