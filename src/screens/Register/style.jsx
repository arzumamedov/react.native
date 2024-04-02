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
        height: '10%',
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
    navText: {
        fontFamily: 'Lato-Regular',
    },
    navRightText:{
        fontFamily: 'Lato-Light',

    },
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#CED0D0',
        borderRadius: 5,
        padding: 10,
    },
    numberInput: {
        width: '91%',
        // backgroundColor:'aqua',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    num: {
        width: '15%',
        textAlign: 'center',
        height: 40,
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#CED0D0',
        borderRadius: 5,
        padding: 10,

    },
    number: {
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#CED0D0',
        borderRadius: 5,
        padding: 10,
    },
    city: {
        width: '90%',
        height: 40,
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#CED0D0',
        borderRadius: 5,
        padding: 10,
    },
    agree: {
        height: 40,
        flexDirection: 'row',
        gap: 10,
        width: '100%',
        // backgroundColor: 'aqua',
        paddingLeft: 20,
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#389C58'
    },
    register: {
        width: '100%',
        // height:60,
        // backgroundColor: 'aqua',
        position: 'absolute',
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20


    },
    button: {
        width: '90%',
        backgroundColor: '#33A457',
        padding: 8,
        borderRadius: 5,
    },
    already: {
        flexDirection: 'row',
        // backgroundColor:'red',
        gap: 10,

    }



})
