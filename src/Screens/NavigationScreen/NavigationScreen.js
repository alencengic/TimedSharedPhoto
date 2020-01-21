import React, { useState } from "react";
import { View, Text } from 'react-native';

function NavigationScreen() {
  const [buttonText, setButtonText] = useState("Click me, please");

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

export default NavigationScreen;