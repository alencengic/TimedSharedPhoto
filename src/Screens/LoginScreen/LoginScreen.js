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
                    labelStyle={styles.inputLabel}
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='user'
                            size={22}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={styles.input}>
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            name='password'
                            size={22}
                            color='black'
                        />
                    }
                />
            </View>

        </View>
    );
}

export default LoginScreen;