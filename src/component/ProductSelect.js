import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

import Wifi from '../assets/svgs/Wifi.svg'
import Restaurant from '../assets/svgs/Restaurant.svg'
import { theme } from '../core/theme'
import { FontFamilyName, Strings } from '../core/strings'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './Button'
import normalize from 'react-native-normalize';

const ProductSelect = ({ source, ...props }) => {
    const navigation = useNavigation()

    const requestHandler = (page) => {
        navigation.navigate('BookingScreen')
    }
    const bookHandler = () => {
        navigation.navigate('BookingScreen',)
    }



    return (
        <View style={styles.tabContainerStyle}>
            <View style={styles.tabImageStyle}>
                <Image
                    style={styles.imageStyle}
                    source={source} />
            </View>

            <View style={styles.tabTextContainer}>
                <Text style={styles.boldTextTab}>{props.tab}</Text>
                <View style={styles.svgTextStyle}>
                    <Text style={styles.paragraphTextTab}>The monthly plan for offices that are in closed area with a door locker to pay fees per month</Text>
                    <View style={styles.svgIconContainer}>
                        <Wifi />
                        <Restaurant />
                    </View>
                </View>
            </View>
            {props.tab === 'Private Office' ?
                <Button
                    style={styles.buttonStyle}
                    mode={"outlined"}
                    onPress={requestHandler}
                >{Strings.RequestNow}
                </Button>
                :
                <Button
                    style={styles.buttonStyle}
                    mode={"outlined"}
                    onPress={bookHandler}
                >{Strings.BookNow}
                </Button>
            }

        </View>
    )
}

export default ProductSelect

const styles = StyleSheet.create({
    tabContainerStyle: {
        // width: wp('90%'),
        // height: hp('42%'),
        width: '90%',
        borderRadius: 20,
        backgroundColor: theme.colors.White,
        elevation: 3,
        alignSelf: 'center',
        marginTop: 20,
    },
    tabImageStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('85%'),
        // width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    imageStyle: {
        // width: wp('80%'),
        // height: hp('15%'),
        width: '100%',
        // height: '40%',
        resizeMode: 'contain',
        // borderRadius: 10
    },
    tabTextContainer: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'column',

    },

    svgIconContainer: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',


    },
    buttonStyle: {
        width: wp('80%'),
        marginTop: 10,
        marginBottom: 20
    },
    paragraphTextTab: {
        fontFamily: FontFamilyName.PoppinsFamily,
        fontSize: 12,
        padding: 2,
        color: theme.colors.primary,
        width: wp('55%')

    },
    svgTextStyle: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',

    },
    boldTextTab: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: 20,
        padding: 2,
        color: theme.colors.primary,

    },
})