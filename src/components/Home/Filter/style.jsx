import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        position: 'relative',



    },
    navbar: {
        width: '100%',
        height: '8%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,

    },
    navLeft: {
        // backgroundColor: "red",
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 15

    },
    navRight: {
        // backgroundColor: 'aqua',
        flexDirection: 'row',
        gap: 20

    },
    imgNav: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    filters: {
        width: '75%',
        flexDirection: 'row',
        flexWrap:'wrap',
        backgroundColor:'blue',
        paddingHorizontal:20,
        marginTop: 20,
        gap:30
    },
    footer: {
        width: '100%',
        // backgroundColor: 'yellow',
        height: 120,
        // position: 'absolute',
        bottom: 0,
        alignItems:'center',
        position:'relative'
    },
    button: {
        width: '90%',
        marginLeft:20,
        backgroundColor:'green',
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        position:'absolute',
        bottom:70

    },
    navBottomBar:{
        width:'100%',
        // backgroundColor:'aqua',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-around',
        position:'absolute',
        bottom:0,
        borderTopWidth:0.5

    }



})