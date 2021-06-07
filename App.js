import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";
import column from "./column";


export default function App() {
  return (
    <View style={styles.container}>
      <column></column>
    </View>
  );
}
