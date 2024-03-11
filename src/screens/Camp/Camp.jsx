import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { Svg, SvgUri } from 'react-native-svg'
const Camp = () => {
    return (
        <View style={styles.main}>
            <View style={styles.navbar}>
                <View style={styles.navLeft}>
                    <View style={styles.img}>
                        
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 10, color: 'black' }}>CampGlobe</Text>
                </View>
                <Text style={{ fontSize: 16, marginTop: 15, color: 'black' }}>Camping</Text>
            </View>
            <View style={styles.category}>
                <Text style={styles.camp}>Camp</Text>
                <Text style={styles.daily}>Daily tours</Text>
            </View>
        </View>
    )
}

export default Camp