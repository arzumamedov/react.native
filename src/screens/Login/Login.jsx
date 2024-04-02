import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import Google from '../../assets/Google.svg';



const Login = () => {

    const navigation = useNavigation()

    const handleCliick = () => {
        navigation.navigate('Tabs')
    }
    return (
        <ImageBackground style={styles.image} blurRadius={16} resizeMode="cover" source={require('../../assets/figma.png')}>
            <View style={styles.main}>
                <View style={styles.navbar}>
                    <View style={styles.navLeft}>
                        <View style={styles.img}>
                            <Image style={styles.imgNav} source={require('../../assets/figma.png')} />
                        </View>
                        <Text style={{ fontSize: 20, marginTop: 10, color: 'black', fontFamily: 'Lato-Bold' }}>CampGlobe</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 15, color: 'black', fontFamily: 'Lato-Regular' }}>Camping</Text>
                </View>
                <View style={styles.login}>
                    <Text style={{ fontSize: 27, textAlign: 'center', color: 'black' }}>Log in</Text>
                </View>
                <View style={styles.google}>
                    <Google />
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
                <TouchableHighlight underlayColor={'#ff0000'} style={styles.button} onPress={handleCliick}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Log in</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}

export default Login