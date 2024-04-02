import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
const Info = () => {
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const handleRegister = () => {
        navigation.navigate('Register')
    }


    return (
        <ImageBackground style={styles.image} resizeMode="cover" source={require('../../assets/figma.png')}>
            <View style={styles.main}>
                <View style={styles.navbar}>
                    <View style={styles.navLeft}>
                        <View style={styles.img}>
                            <Image style={styles.imgNav} source={require('../../assets/figma.png')} />
                        </View>
                        <Text style={{ fontSize: 20, marginTop: 10, color: 'black', fontFamily: 'Lato-Regular' }}>CampGlobe</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 15, color: 'black', fontFamily: 'Lato-Regular' }}>Camping</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.mainTextFirts}>Find your dream</Text>
                    <Text style={styles.mainTextSecond}>Book camps tours,hikings,and more.</Text>
                </View>
                <View style={styles.buttonMain}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonLets}>Lets go camping</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginRegister}>
                    <TouchableHighlight onPress={handleLogin}><Text style={styles.loginText}>Log in</Text></TouchableHighlight>
                    <TouchableHighlight onPress={handleRegister}><Text style={styles.registerText}>Register</Text></TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Info