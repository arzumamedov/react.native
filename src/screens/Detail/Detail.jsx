import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../Detail/style';
import { Image } from 'react-native-animatable';
import ProgressBar from '../../assets/ProgressBar.svg';
import Wallet from '../../assets/Wallet.svg';
import Location from '../../assets/Location.svg';
import Calendar from '../../assets/Calendar.svg';
import Thermometer from '../../assets/Thermometer.svg';




import Svg, { Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

// const HeartIcon = ({ fill }) => (
//   <Svg width="20" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <Path d="M23.3907 2.23427C22.202 1.04849 20.592 0.381663 18.913 0.379613C17.2339 0.377563 15.6224 1.04046 14.4307 2.22334L13.0001 3.55224L11.5684 2.21896C10.377 1.03094 8.76251 0.364835 7.08003 0.367194C5.39755 0.369553 3.78491 1.04018 2.59689 2.23154C1.40886 3.4229 0.742765 5.03741 0.745123 6.71988C0.747482 8.40236 1.41811 10.015 2.60947 11.203L12.3821 21.119C12.4635 21.2016 12.5606 21.2673 12.6676 21.3121C12.7747 21.3569 12.8895 21.38 13.0056 21.38C13.1216 21.38 13.2365 21.3569 13.3435 21.3121C13.4505 21.2673 13.5476 21.2016 13.629 21.119L23.3907 11.203C24.5796 10.0134 25.2474 8.40046 25.2474 6.71865C25.2474 5.03683 24.5796 3.42385 23.3907 2.23427ZM22.1493 9.97365L13.0001 19.253L3.84541 9.9649C2.98387 9.10336 2.49986 7.93486 2.49986 6.71646C2.49986 5.49806 2.98387 4.32956 3.84541 3.46802C4.70694 2.60648 5.87544 2.12248 7.09384 2.12248C8.31224 2.12248 9.48074 2.60648 10.3423 3.46802L10.3642 3.4899L12.404 5.38755C12.5659 5.53824 12.7789 5.62201 13.0001 5.62201C13.2213 5.62201 13.4343 5.53824 13.5962 5.38755L15.636 3.4899L15.6579 3.46802C16.52 2.60706 17.6888 2.12384 18.9072 2.12466C20.1256 2.12548 21.2938 2.61028 22.1548 3.4724C23.0157 4.33452 23.499 5.50334 23.4981 6.72174C23.4973 7.94014 23.0125 9.10831 22.1504 9.96927L22.1493 9.97365Z" fill='#666666' />
//   </Svg>
// );

// const HeartColorIcon = ({ fill }) => (

//   <Svg width="20" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <Path d="M24.3907 6.23427C23.202 5.04849 21.592 4.38166 19.913 4.37961C18.2339 4.37756 16.6224 5.04046 15.4307 6.22334L14.0001 7.55224L12.5684 6.21896C11.377 5.03094 9.76251 4.36483 8.08003 4.36719C6.39755 4.36955 4.78491 5.04018 3.59689 6.23154C2.40886 7.4229 1.74276 9.03741 1.74512 10.7199C1.74748 12.4024 2.41811 14.015 3.60947 15.203L13.3821 25.119C13.4635 25.2016 13.5606 25.2673 13.6676 25.3121C13.7747 25.3569 13.8895 25.38 14.0056 25.38C14.1216 25.38 14.2365 25.3569 14.3435 25.3121C14.4505 25.2673 14.5476 25.2016 14.629 25.119L24.3907 15.203C25.5796 14.0134 26.2474 12.4005 26.2474 10.7186C26.2474 9.03683 25.5796 7.42385 24.3907 6.23427ZM23.1493 13.9736L14.0001 23.253L4.84541 13.9649C3.98387 13.1034 3.49986 11.9349 3.49986 10.7165C3.49986 9.49806 3.98387 8.32956 4.84541 7.46802C5.70694 6.60648 6.87544 6.12248 8.09384 6.12248C9.31224 6.12248 10.4807 6.60648 11.3423 7.46802L11.3642 7.4899L13.404 9.38755C13.5659 9.53824 13.7789 9.62201 14.0001 9.62201C14.2213 9.62201 14.4343 9.53824 14.5962 9.38755L16.636 7.4899L16.6579 7.46802C17.52 6.60706 18.6888 6.12384 19.9072 6.12466C21.1256 6.12548 22.2938 6.61028 23.1548 7.4724C24.0157 8.33452 24.499 9.50334 24.4981 10.7217C24.4973 11.9401 24.0125 13.1083 23.1504 13.9693L23.1493 13.9736Z" fill="#A90E0E" />
//     <Path d="M6.11528 7.10825C10.3356 4.61896 12.7437 7.6849 13.9998 9.5C15.7582 7.6849 20.585 4.15232 24.2024 7.88625C27.8198 11.6202 17.7679 19.3327 13.9998 24.0001C4 14.5001 0.839881 10.2199 6.11528 7.10825Z" fill="#A90E0E" stroke="#A90E0E" stroke-width="1.22222" />
//   </Svg>
// );





const Detail = () => {


    //   const [isWishList, setIsWishList] = useState(false);

    //   const handleWishlistToggle = () => {
    //     setIsWishList(!isWishList);
    //   };

    return (
        <ScrollView>

            <View style={styles.cardMain}>
                <View style={styles.imageBg}>
                    <Image style={styles.image} source={require('../../assets/Detail1.png')} />
                </View>
                {/* <TouchableHighlight style={styles.iconBg} onPress={handleWishlistToggle}>
        {isWishList ? <HeartColorIcon fill="none" /> : <HeartIcon fill="red" />}
      </TouchableHighlight> */}
                <View style={styles.cardDescription}>
                    <View style={styles.campName}>
                        <Text style={styles.location}>Qaranohur Camp</Text>
                        <View style={styles.progressBar}>
                            <ProgressBar />
                            <Text style={styles.progressText}>16/30</Text>
                        </View>
                        <Text style={styles.barDesc}>17 out of 20 places have been booked</Text>
                    </View>


                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Price</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Wallet />
                            <Text style={styles.detailDescripion}>90 Azn</Text>
                        </View>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Location</Text>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Location />
                            <Text style={styles.detailDescripion}>İsmayıllı 'Talıstan' village</Text>
                        </View>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Time</Text>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Calendar />
                            <Text style={styles.detailDescripion}>15-16 October</Text>
                        </View>
                    </View>


                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Temperature</Text>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Thermometer />
                            <Text style={styles.detailDescripion}>12 °C - 16 °C</Text>
                        </View>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Difficulty level</Text>
                        <Text style={styles.detailDescripion}>Meduim-difficult distance</Text>

                    </View>


                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Distance</Text>
                        <Text style={styles.detailDescripion}>12 km</Text>

                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Time</Text>
                        <Text style={styles.detailDescripion}>4-6 hour</Text>

                    </View>


                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Staring height</Text>
                        <Text style={styles.detailDescripion}>900 m</Text>

                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Finishing height</Text>
                        <Text style={styles.detailDescripion}>1540 m</Text>

                    </View>


                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Description</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>06:00 </Text>
                            <Text style={styles.detailDescripion}>Gather (Gənclik m/s Badamlı)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>06:15 </Text>
                            <Text style={styles.detailDescripion}>Leave</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>09:30 </Text>
                            <Text style={styles.detailDescripion}>Arrival in Talistan village</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>12:30 </Text>
                            <Text style={styles.detailDescripion}>Arrival at the lake sandwich and free time</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>16:30 </Text>
                            <Text style={styles.detailDescripion}>Back to village</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>18:00</Text>
                            <Text style={styles.detailDescripion}>Samovar tea and free time</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.detailDescripion}>22:00 </Text>
                            <Text style={styles.detailDescripion}>Arrival Baku</Text>
                        </View>
                    </View>



                    <View style={styles.detail}>
                        <Text style={styles.detailName}>Tour Prices</Text>
                        <Text style={styles.detailDescripion}>Baku-Ismayilli-Baku transport</Text>
                        <Text style={styles.detailDescripion}>Baku-Ismayilli-Baku transport</Text>
                        <Text style={styles.detailDescripion}>Baku-Ismayilli-Baku transport</Text>
                        <Text style={styles.detailDescripion}>Baku-Ismayilli-Baku transport</Text>
                        <Text style={styles.detailDescripion}>Baku-Ismayilli-Baku transport</Text>

                    </View>

                </View>
            </View>
        </ScrollView>

    );
};

export default Detail;
