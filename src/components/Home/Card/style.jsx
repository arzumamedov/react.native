import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardMain: {
        width: '40%',
        // height: '30%',
        // backgroundColor: 'aqua',
        position: 'relative',
        gap:10,
        margin:20
    }, 
    image: {
        width: '100%',
        borderRadius: 10,
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
        gap:3
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
        color: 'black',
        fontFamily: 'Lato-Regular',
        fontSize: 11
    }
})