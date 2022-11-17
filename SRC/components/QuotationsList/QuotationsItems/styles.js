import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent: {
        width:"95%",
        height:"auto",
        backgroundColor:"#000000",
        marginLeft:"3%",
        marginBottom:"15",
        borderRadius:10,
        flexDirection:"row",
        alignContent:"center",
        padding:10,
    },
    logoBitcoin:{
        width:40,
        height:40,
        marginLeft:2,

    },
    contextLeft:{
        width:"36%",
        alignItems:"flex-start",
    },
    dayContation:{  
        fontSize:16,
        paddingLeft:2,
        color:"#ffffff",
        fontWeight:"bold",
    },
    contextRight:{
        width:"36%",
        alignItems:"flex-end",
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    },
    price:{
        color:"#ffffff",
        fontSize:18,
        fontWeight:"bold",
    }
})
export default styles