import React from 'react';  
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationScreen } from './src/Screens/NavigationScreen/NavigationScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>  
        <Stack.Screen
          name="profile"
          component={NavigationScreen}
          options={{ title: 'Navigation screen' }}/>
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;  