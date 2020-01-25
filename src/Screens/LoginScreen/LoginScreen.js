import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './LoginStyle'

function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={styles.input}>
                <Input
                    placeholder='INPUT WITH CUSTOM ICON2'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>

        </View>
    );
}

export default LoginScreen;