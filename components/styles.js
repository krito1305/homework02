import {StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    container:{
        width:400,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",   
        padding: 20,     
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray"
    },
    box1:{
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        padding: 20,
        margin: 10,
        backgroundColor:"lightgrey",
        borderColor: "darkslategray" 
    },
    box2:{
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        padding: 20,
        margin: 10,
        backgroundColor:"lightgrey",
        borderColor: "darkslategray" 
    },
    column:{
        alignItems: "center",
        justifyContent: "space-between"
    },
    row:{
        flex:1,
        alignSelf: "stretch",
        flexDirection: "row", 
        justifyContent: "space-between"
        },
    box:{
        height: 30,
        width: 90,
        justifyContent: "center",
        backgroundColor:"lightgrey",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "darkslategray",
        marginTop: 5,
        marginBottom: 5
    
    },
    titleText:{
        flex:1,
        fontSize: 14,
        fontFamily: "Arial Black",
        alignSelf: "flex-start",
        color: "darkslategray"
    },
    boxText:{
        fontSize: 14,
        fontFamily: "Arial Black",
        alignSelf: "center",
        padding: "1%",
        color: "darkslategray"
    }
});