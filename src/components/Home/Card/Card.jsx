import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Image } from 'react-native-animatable'
import Heart from '../../../assets/Heart.svg'
import ProgressBar from '../../../assets/ProgressBar.svg'



const Card = () => {
  return (
    <View style={styles.cardMain}>
      <Image style={styles.image} source={require('../../../assets/Image1.png')} />
      <View style={styles.iconBg}>
        <Heart />
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
  )
}

export default Card