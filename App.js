import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import UploadScreen from './src/Screens/UploadScreen/UploadScreen';

const Stack = createStackNavigator({});

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UploadScreen"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;  