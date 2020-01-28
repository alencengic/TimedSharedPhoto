import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './LoginStyle'

function LoginScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Logo</Text>
            </View>
            <View style={styles.inputContainer}>
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
                        secureTextEntry={true}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={22}
                                color='black'
                            />
                        }
                    />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    type="outline"
                    containerStyle={styles.button}
                />
                <Button
                    title="Register"
                    type="outline"
                    containerStyle={styles.button}
                />
            </View>
        </View>
    );
}

export default LoginScreen;