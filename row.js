import React from "react"; //This is something we need everythime we create a file
import {Text, View} from "react-native";
import styles from "./styles";// This is to import the style
import Box from "./Box";

export default function Row() {
 
    return(
    <View style={styles.row}>
        <Text style={styles.titleText}>Row</Text>
        <Box style={styles.box}></Box> 
        <Box style={styles.box}></Box> 
        <Box style={styles.box}></Box> 

    </View>
        );
}
