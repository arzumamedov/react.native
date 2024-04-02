import React from 'react'
import { KeyboardAvoidingView, Text, TouchableHighlight, View } from 'react-native'
import { styles } from './style'
import Filter from '../../../assets/Filter.svg'
import Logo from '../../../assets/LogoFill.svg'
import Search from '../../../assets/Search.svg'
import Tent from '../../../assets/Tent.svg'
import Connection from '../../../assets/Connection.svg'
import Fire from '../../../assets/Fire.svg'
import Fishing from '../../../assets/Fishing.svg'
import Snacks from '../../../assets/Snacks.svg'
import River from '../../../assets/River.svg'
import Toilet from '../../../assets/Toilet.svg'
import Trekking from '../../../assets/Trekking.svg'
import SoftWater from '../../../assets/SoftWater.svg'
import Wooden from '../../../assets/Wooden.svg'
import WildAnimals from '../../../assets/WildAnimals.svg'
import Home from '../../../assets/Home.svg'
import Saved from '../../../assets/Saved.svg'
import MyCamps from '../../../assets/MyCamps.svg'
import Profile from '../../../assets/Profile.svg'







const FilterScreen = () => {
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
            <View style={styles.filters}>
                <Tent />
                <Connection />
                <Fire />
                <Fishing />
                <Snacks />
                <River />
                <Toilet />
                <Trekking />
                <SoftWater />
                <Wooden />
                <WildAnimals />
            </View>
            <TouchableHighlight style={styles.button}>
                <Text style={{ color: 'white', fontFamily: 'Lato-Regular', fontSize: 16 }}>
                    List posts
                </Text>
            </TouchableHighlight>
            <View style={styles.navBottomBar}>
                <Home />
                <Saved />
                <MyCamps />
                <Profile />
            </View>

        </View>

    )
}

export default FilterScreen