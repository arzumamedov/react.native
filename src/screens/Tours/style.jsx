import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F7F7',
        // alignItems: 'center',



    },
    image: {
        flex: 1,

    },
    navbar: {
        width: '100%',
        height: '8%',
        // backgroundColor: "green",
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:20

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
        gap:20

    },
    // img: {
    //     width: 50,
    //     height: 50,
    //     backgroundColor: "black",
    //     borderRadius: 50,
    //     overflow: 'hidden'

    // },
    imgNav: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    category: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingLeft: 20
    },
    camp: {
        color: 'black',
        fontFamily: 'Lato-Regular',
    },
    daily: {
        color: 'black',
        fontFamily: 'Lato-Regular'
    },
    weekend:{
        color:'black',
        padding:20,
        fontFamily:'Lato-Regular'
    }



})