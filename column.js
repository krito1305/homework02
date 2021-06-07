import React from "react"; //This is something we need everythime we create a file
import {Text, View} from "react-native";
import styles from "./styles" // This is to import the style

export default function column() {
   
    return(
        <View style={styles.column}>
            <Text style={styles.titleText}>Column</Text>
        </View>
    );
}