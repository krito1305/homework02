import React from "react"; //This is something we need everythime we create a file
import {Text, View} from "react-native";
import styles from "./styles" // This is to import the style
import Box from "./Box";

export default function Column() {
 
    return(
    <View style={styles.column}>
        <Box style={styles.box}></Box>
        <Box style={styles.box}></Box>
        <Box style={styles.box}></Box>
    </View>
        );
}
