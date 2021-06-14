import React from "react";
import {Text, View } from "react-native";
import styles from "./components/styles";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

export default function App() {
  return (
    <View style={styles.container}>
      <Box1></Box1>
      <Box2></Box2>
    </View>
  );
}