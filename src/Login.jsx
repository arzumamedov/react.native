import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
const Login = () => {
    return (
        <ImageBackground style={styles.image} blurRadius={16} resizeMode="cover" source={require('../src/assets/figma.png')}>
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
                <View style={styles.login}>
                    <Text style={{ fontSize: 27, textAlign: 'center', color: 'black' }}>Log in</Text>
                </View>
                <View style={styles.google}>
                    <View style={styles.googleImg}>
                        <Image style={styles.imgGoogle} source={require('../src/assets/login.png')} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 15 }}>
                        Connect with google
                    </Text>
                </View>
                <View style={styles.or}>
                    <View style={styles.orLeft}>

                    </View>
                    <Text style={{ color: "#A4A6A7" }}>or</Text>
                    <View style={styles.orRight}>

                    </View>
                </View>
                <TextInput placeholder='E-mail' placeholderTextColor="#D8DADA" style={styles.input}></TextInput>
                <TextInput placeholder='Password' placeholderTextColor="#D8DADA" style={styles.input}>
                </TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login