import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { photoImage } from '../../Assets/imageList'
import { openImagePicker } from '../../Components/ImagePicker/ImagePicker'
import styles from './UploadScreenStyle'

function UploadScreen() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Overlay
                isVisible={isVisible}
                onBackdropPress={() => { setIsVisible(false) }}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
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
                    onPress={() => { openImagePicker("picker") }}
                />
                <Button
                    title="Share"
                    type="outline"
                    containerStyle={styles.button}
                    onPress={() => { setIsVisible(true) }}
                />
            </View>
        </View>

    );
}

export default UploadScreen;