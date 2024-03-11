import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#80808050',
        // alignItems: 'center',



    },
    image: {
        flex: 1,

    },
    navbar: {
        width: '100%',
        height: '40%',
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
    text: {
        width: '57%',
        // backgroundColor: 'aqua',
        gap: 10,
        paddingLeft: 20
    },
    mainTextFirts: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Lato-Bold',
    },
    mainTextSecond: {
        color: 'white',
        fontSize: 16,
    },
    buttonMain: {
        width: '100%',
        height: 45,
        position: 'absolute',
        bottom: 160,
        // backgroundColor: 'aqua',
        alignItems: 'center'

    },
    button: {
        width: '35%',
        height: '100%',
        backgroundColor: '#33A457',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonLets: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: 'white'
    },
    loginRegister: {
        width: '100%',
        height: 45,
        position: 'absolute',
        bottom: 20,
        // backgroundColor: 'aqua',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    loginText:{
        color:'white',
        textDecorationLine:'underline',
    },
    registerText:{
        color:'white',
        textDecorationLine:'underline',
    }



})