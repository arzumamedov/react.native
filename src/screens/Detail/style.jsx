import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardMain: {
        flex: 1,
        // height:'30%',
        // backgroundColor: 'aqua',
        // position: 'relative',
        gap: 10,
    },
    imageBg: {
        width: '100%',
        // height: '50%',
        backgroundColor: 'green'
    },
    image: {
        width: '100%',
    },
    cardDescription: {
        // backgroundColor: 'yellow',
        gap: 20,
        paddingLeft: 20
    },
    campName: {
        // backgroundColor: 'red',
        gap: 5
    },
    location: {
        fontFamily: 'Lato-Bold',
        color: '#0D7EC1',
        fontSize: 20
    },
    progressBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    progressText: {
        color: 'black',
        fontSize: 10,
        fontWeight: '600'
    },
    barDesc: {
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 10
    },
    detail:{
        // backgroundColor:'red',
        gap:5
    },
    detailName:{
        color: '#0D7EC1',
        fontFamily: 'Lato-Bold',
        fontSize: 15
    },
    detailDescripion:{
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 13
    }


})