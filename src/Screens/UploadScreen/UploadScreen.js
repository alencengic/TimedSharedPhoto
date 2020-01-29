import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from './UploadScreenStyle'

function UploadScreen() {
    return (
        <View>
            <Button
                title="Upload"
                type="outline"
                containerStyle={styles.button}
            />
        </View>
    );
}

export default UploadScreen;