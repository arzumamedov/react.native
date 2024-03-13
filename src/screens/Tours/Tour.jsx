import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Logo from '../../assets/LogoFill.svg'
import Search from '../../assets/Search.svg'
import Filter from '../../assets/Filter.svg'
import TourCard from '../../components/Home/TourCard/TourCard'
// import Card from '../../components/Home/Card'



const Tour = () => {
    return (
        <View style={styles.main}>
            <View style={styles.navbar}>
                <View style={styles.navLeft}>
                    <View style={styles.img}>
                        <Logo />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 10, color: 'black' }}>CampGlobe</Text>
                </View>
                <View style={styles.navRight}>
                    <Search />
                    <Filter />
                </View>
            </View>
            <View style={styles.category}>
                <Text style={styles.camp}>Camp</Text>
                <Text style={styles.daily}>Daily tours</Text>
            </View>
            <Text style={styles.weekend}>Weekend camp place</Text>
            {/* <Card/> */}
            <TourCard/>

        </View>

    )
}

export default Tour