import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems:'center'
        // backgroundColor: 'aqua'
    },
    profileHead: {
        width: '85%',
        // backgroundColor: 'red',
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headText: {
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 18
    },
    imgBg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    imgHead: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    profileCategories: {
        width:'100%',
        // backgroundColor: 'red',
        gap:30,
        marginTop:80
    },
    profileCategory: {
        width: '100%',
        flexDirection: 'row',
        // height:120,
        // backgroundColor:'green',
        justifyContent: 'space-around',
        // marginTop: 30
    },
    message: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6

    },
    profile: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6
    },
    language: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6
    },
    wallet: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6
    },
    profileCategoryTexts: {
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 16
    },
    about: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6
    },
    setting: {
        width: '30%',
        // backgroundColor:'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 8,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6
    },
    button: {
        width: '80%',
        backgroundColor: '#33A457',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
    },

})