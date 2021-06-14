import React from "react"; 
import {Text, View} from "react-native";
import styles from "./styles" 
import Row from "./Row";

export default function Box2() {
 
    return(
    <View style={styles.box2}>
        <Text style={styles.titleText}>Row</Text>
        <Row></Row>
    </View>
        );
}