/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView
} from 'react-native';
import Header from './Components/Header';
import Product from './Components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';

const Stack = createNativeStackNavigator();
function App(){
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}/>
        <Stack.Screen name="User" component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
