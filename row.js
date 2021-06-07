import React from "react"; //This is something we need everythime we create a file
import {Text, View} from "react-native";
import styles from "./styles" // This is to import the style

export default function row(){
    return(
        <View style={styles.row}>
            <Text style={styles.titleText}>Row</Text>
        </View>
    )
};