import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';
import LayoutUtama from './LayoutUtama';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="LayoutUtama" component={LayoutUtama} />
        <Stack.Screen name="Layout2" component={Layout2} />
        <Stack.Screen name="Layout1" component={Layout1} />
        <Stack.Screen name="Layout4" component={Layout4} />
        <Stack.Screen name="Layout3" component={Layout3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});