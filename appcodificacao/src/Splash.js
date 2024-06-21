import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated, Text } from "react-native";
import icon from "../assets/splash.png";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, { opacity: fadeAnimation }]}
      >
        <Image style={styles.image} source={icon} />
      </Animated.View>
      <Text style = {styles.text}> ALIMENTOS </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BE4E4E",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});