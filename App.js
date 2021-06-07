import React from "react";
import {Text, View } from "react-native";
import styles from "./styles";
import Row from "./Row";
import Column from "./Column";

export default function App() {
  return (
    <View style={styles.container}>
      <Column style={styles.column}></Column>
      <Row style={styles.row}></Row>
    </View>
  );
}