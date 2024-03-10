import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './mstyle'
const Main = () => {
    return (
        <ImageBackground style={styles.image} resizeMode="cover" source={require('../src/assets/figma.png')}>
            <View style={styles.main}>
                <View style={styles.navbar}>
                    <View style={styles.navLeft}>
                        <View style={styles.img}>
                            <Image style={styles.imgNav} source={require('../src/assets/figma.png')} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 10, color: 'black' }}>CampGlobe</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 15, color: 'black' }}>Camping</Text>
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
                    <Text style={styles.loginText}>Log in</Text>
                    <Text style={styles.registerText}>Register</Text>

                </View>
            </View>
        </ImageBackground>
    )
}

export default Main