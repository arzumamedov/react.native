import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/Logo.svg';
import {styles} from "./styles.jsx"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const circleRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Info'); // Burada 'AnaSayfa' yerine gitmek istediğiniz ekranın adını yazmalısınız
    }, 5000);

    // return () => cc:\Users\Memme\Downloads\Logo.svglearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>

      <Animatable.View
        ref={circleRef}
        style={styles.circle}
        animation={{
            0: {
                opacity: 0,
                scale: 0,
            },
            1: {
            opacity: 1,
            scale: 1,
        },
    }}
        duration={5000}
      >
    <LinearGradient colors={['#75B6DC', '#ffffff']} style={styles.linear}>
        <View style={styles.logoMain}>
        <Logo width={150} height={150}/>
        <Text style={styles.logoMainText}>CampGlobe</Text>
        </View>
    </LinearGradient>
      </Animatable.View>

    </View>
  );
};



export default SplashScreen;
