import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#80808050',
        alignItems: 'center',



    },
    image: {
        flex: 1,

    },
    navbar: {
        width: '100%',
        height: '25%',
        // backgroundColor: "green",
        marginTop: 20,
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'space-around'

    },
    navLeft: {
        height: '100%',
        // backgroundColor: "red",
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'center',
        gap: 20

    },
    img: {
        width: 50,
        height: 50,
        backgroundColor: "black",
        borderRadius: 50,
        overflow: 'hidden'

    },
    imgNav: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    login: {
        width: '100%',
        height: 55,
        // backgroundColor: 'aqua',
        // marginTop:100
    },
    google: {
        width: '90%',
        height: 50,
        backgroundColor: "#A6AAAD90",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    googleImg: {
        width: 35,
        height: 35,
        backgroundColor: "black",
        borderRadius: 50,
        overflow: 'hidden'
    },
    imgGoogle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    or: {
        width: '80%',
        height: 80,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 6
    },
    orLeft: {
        width: "30%",
        height: 2,
        backgroundColor: '#A4A6A7',

    },
    orRight: {
        width: "30%",
        height: 2,
        backgroundColor: '#A4A6A7',
    },
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#A4A6A7',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        width: '80%',
        backgroundColor: '#33A457',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 40,
    },



})
