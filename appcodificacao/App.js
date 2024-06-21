import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Text, View, StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'

import Home from './src/index'
import Cart from './src/cart'
import CartProvider from './src/cartContext';
import Login from './src/login';
import SplashScreen from './src/Splash';

const Stack = createNativeStackNavigator()

export default function App() {
   const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

