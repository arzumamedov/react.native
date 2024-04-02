import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Image } from 'react-native-animatable';
import About from '../../assets/About.svg';
import Chat from '../../assets/Chat.svg';
import Language from '../../assets/Language.svg';
import Setting from '../../assets/Setting.svg';
import User from '../../assets/User.svg';
import WalletProfile from '../../assets/WalletProfile.svg';
import { styles } from './style';








const Profile = () => {
    const navigation = useNavigation()
    const handleCliick = () => {
        navigation.navigate('Camp')
    }
    return (
        <View style={styles.main}>
            <View style={styles.profileHead}>
                <Text style={styles.headText}>Profile</Text>
                <View style={styles.imgBg}>
                    <Image style={styles.imgHead} source={require('../../assets/Profile.png')} />
                </View>
            </View>
            <View style={styles.profileCategories}>
                <View style={styles.profileCategory}>
                    <View style={styles.message}>
                        <Chat />
                        <Text style={styles.profileCategoryTexts}>Messages</Text>
                    </View>
                    <View style={styles.profile}>
                        <User />
                        <Text style={styles.profileCategoryTexts}>Profile</Text>
                    </View>
                </View>
                <View style={styles.profileCategory}>
                    <View style={styles.wallet}>
                        <WalletProfile />
                        <Text style={styles.profileCategoryTexts}>Wallet</Text>
                    </View>
                    <View style={styles.language}>
                        <Language />
                        <Text style={styles.profileCategoryTexts}>Language</Text>
                    </View>
                </View>
                <View style={styles.profileCategory}>
                    <View style={styles.about}>
                        <About />
                        <Text style={styles.profileCategoryTexts}>About us</Text>
                    </View>
                    <View style={styles.setting}>
                        <Setting />
                        <Text style={styles.profileCategoryTexts}>Settings</Text>
                    </View>
                </View>
            </View>
            <TouchableHighlight underlayColor={'#ff0000'} style={styles.button} onPress={handleCliick}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Log in</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Profile