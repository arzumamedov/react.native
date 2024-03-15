import React, { useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Logo from '../../assets/LogoFill.svg'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
// import Icon from 'react-native-vector-icons/FontAwesome';
const Register = () => {
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (

        <ImageBackground style={styles.image} blurRadius={16} resizeMode="cover" source={require('../../assets/figma.png')}>
            <View style={styles.main}>
                <View style={styles.navbar}>
                    <View style={styles.navLeft}>
                        <Logo />
                        {/* <Image style={styles.imgNav} source={require('../assets/figma.png')} /> */}
                        <Text style={[styles.navText, { fontSize: 20, marginTop: 10, color: 'black' }]}>CampGlobe</Text>
                    </View>
                    <Text style={[styles.navRightText, { fontSize: 16, marginTop: 15, color: 'black' }]}>Camping</Text>
                </View>
                <TextInput placeholder='Name' placeholderTextColor="#CED0D0" style={styles.input}></TextInput>
                <TextInput placeholder='Surname' placeholderTextColor="#CED0D0" style={styles.input}>
                </TextInput>
                <TextInput placeholder='E-mail' placeholderTextColor="#CED0D0" style={styles.input}>
                </TextInput>
                <TextInput placeholder='Password' placeholderTextColor="#CED0D0" style={styles.input}>
                </TextInput>
                <View style={styles.numberInput}>
                    <TextInput placeholder='+994' placeholderTextColor="#CED0D0" style={styles.num}>
                    </TextInput>
                    <TextInput keyboardType="numeric" placeholder='Number' placeholderTextColor="#CED0D0" style={styles.number}>
                    </TextInput>
                </View>
                <TextInput placeholder='City' placeholderTextColor="#CED0D0" style={styles.city}>
                </TextInput>
                <View style={styles.agree}>
                    {/* <Icon name="square-o" size={40} color="black" /> */}
                    <CheckBox tintColors={{ true: '#389C58', false: '#389C58' }} value={isChecked} onValueChange={handleCheckboxChange} />
                    <Text style={{ color: 'white' }}>Agree with</Text>
                    <Text style={{ color: '#389C58' }}>Terms & Conditions</Text>
                </View>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.already}>
                        <Text style={{ color: '#CED0D0' }}>Aready a member</Text>
                        <TouchableHighlight underlayColor={"transparent"} onPress={() => { navigation.navigate('Login') }}><Text style={{ color: 'green' }}>Login</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Register