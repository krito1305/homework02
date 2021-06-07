import {Platform, StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: "#fff",        
        //justifyContent: "space-around",
        padding: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray"
    },
    column:{
        //flex:1,
        //flexWrap: "nowrap",
        alignSelf: "flex-start", // To change the alignment of the column in regards to the container
        //justifyContent: "space-evenly",
        paddingRight: "4%",
        paddingLeft: "2%",
        paddingTop: "2%",
        paddingBottom: "2%",
        marginBottom: "2.5%",
        backgroundColor:"lightgrey",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray"
    },
    row:{
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor:"lightgrey",
        padding: "2%",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray"
    },
    box:{
        //justifyContent:"space-around",
        backgroundColor:"lightgrey",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray",
        marginTop: "2%",
        marginRight: "2%",
        marginLeft: "2%",
        marginBottom: "3%"
    },
    titleText:{
        fontSize: 12,
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        color: "darkslategray"
    },
    boxText:{
        fontSize: 12,
        alignSelf: "center",
        padding: "1%",
        color: "darkslategray"
    }
});