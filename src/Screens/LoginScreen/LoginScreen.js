import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {


    return(
        <View>
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
    );
}