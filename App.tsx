import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}