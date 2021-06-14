import React from "react"; 
import {Text, View} from "react-native";
import styles from "./styles" 
import Column from "./Column";

export default function Box1() {
 
    return(
    <View style={styles.box1}>
        <Text style={styles.titleText}>Column</Text>
        <Column></Column>
    </View>
        );
}