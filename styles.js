import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create(
    {
        container:{
            backgroundColor: "#fff",
            flex:1,
            flexDirection: "column",
            justifyContent: "space-around"
        },
        row: {
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignSelf: "stretch"

        },
        column: {
            backgroundColor: "lightgray",
            justifyContent: "center"

        },
        titleText:{
            color: "darsklategray"
        }

    }
);