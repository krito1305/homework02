import React from "react"; //This is something we need everythime we create a file
import {Text, View} from "react-native";
import styles from "./styles" // This is to import the style

export default function Box() {
 
    return(
    <View style={styles.box}>
        <Text style={styles.boxText}>Child</Text>
    </View>
        );
}
