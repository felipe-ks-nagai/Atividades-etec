import React from 'react';
import { StyleSheet, Text, View, Global } from "react-native";
import { useEffect, useState } from "react";
import Home from './components/Home';
import SplashScreen from "./components/Splashscreen";


export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <Home /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});