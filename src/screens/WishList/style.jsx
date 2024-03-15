import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    pageMain: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'red',
        // paddingLeft:20
    },
    wishListText: {
        width: '100%',
        // height:40,
        // backgroundColor:'aqua',
        flexDirection:'row',
        alignItems:'center',
        gap:110,
        paddingLeft:20,
        borderBottomWidth:0.5,
        borderBlockColor:'#666666'
    },

    cardMain: {
        width: '40%',
        // height: '30%',
        // backgroundColor: 'aqua',
        position: 'relative',
        gap: 10,
        margin: 20
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
        gap: 3
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