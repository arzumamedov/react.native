import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardMain: {
        width: '100%',
        // height:'30%',
        // backgroundColor: 'aqua',
        position: 'relative',
        gap: 10,
    },
    imageBg: {
        width: '100%',
        height:'50%',
        // backgroundColor:'green'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    iconBg: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'absolute',      
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardDescription: {
        // backgroundColor: 'yellow',
        gap: 3,
        paddingLeft: 20
    },
    location: {
        fontFamily: 'Lato-Black',
        color: 'black'
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
    price: {
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 13

    },
    date: {
        color: '#A4A4A4',
        fontFamily: 'Lato-Regular',
        fontSize: 12
    },
    desc: {
        color: '#A4A4A4',
        fontFamily: 'Lato-Regular',
        fontSize: 10
    }
})