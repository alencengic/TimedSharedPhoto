import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { photoImage } from '../../Assets/imageList'
import { openImagePicker } from '../../Components/ImagePicker/ImagePicker'
import UploadScreenOverlay from './UploadScreenOverlay'
import styles from './UploadScreenStyle'

function UploadScreen() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <UploadScreenOverlay
                isVisible={isVisible}
                parentCallback={newValue => { setIsVisible(newValue) }}
            />
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