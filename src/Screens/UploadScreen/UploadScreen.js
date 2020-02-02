import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { photoImage } from '../../Assets/imageList'
import styles from './UploadScreenStyle'

function UploadScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={photoImage}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View>
                <Button
                    title="Upload"
                    type="outline"
                    containerStyle={styles.button}
                />
                <Button
                    title="Share"
                    type="outline"
                    containerStyle={styles.button}
                />
            </View>
        </View>

    );
}

export default UploadScreen;