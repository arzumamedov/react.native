import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Image } from 'react-native-animatable'
import HeartColor from '../../assets/HeartColor.svg'
import ProgressBar from '../../assets/ProgressBar.svg'
import LeftArrow from '../../assets/LeftArrow.svg'




const WishList = () => {
    return (
        <View style={styles.pageMain}>
            <View style={styles.wishListText}>
                <LeftArrow />
                <Text style={{fontFamily:'Lato-Regular',color:'black'}}>My Favourites</Text>
            </View>
            <View style={styles.cardMain}>
                <Image style={styles.image} source={require('../../assets/Image1.png')} />
                <View style={styles.iconBg}>
                    <HeartColor />
                </View>
                <View style={styles.cardDescription}>
                    <Text style={styles.location}>Qaranohur Camp</Text>
                    <View style={styles.progressBar}>
                        <ProgressBar />
                        <Text style={styles.progressText}>17/20</Text>
                    </View>
                    <Text style={styles.price}>90 Azn per-adult</Text>
                    <Text style={styles.date}>15-16 October</Text>
                </View>
            </View>
        </View>
    )
}

export default WishList