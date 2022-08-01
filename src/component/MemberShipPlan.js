import React, { useState } from 'react'
import { findNodeHandle, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../core/theme';
import { FontFamilyName, Strings } from '../core/strings';
import Button from './Button';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';



const MemberShipPlan = () => {
    const [tab, setTab] = useState('Monthly')
    const navigation = useNavigation()

    const bookhandler = () => {
        navigation.navigate('SelectionBookingScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabStyle}>
                <TouchableOpacity
                    onPress={() => {
                        setTab('Monthly')
                    }}
                    style={tab == 'Monthly' ? styles.activeTab : styles.inActiveTab}

                >
                    <Text
                        style={tab == 'Monthly' ? styles.textStyleActive : styles.textStyleInActive}>Monthly</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTab('Yearly')
                    }}
                    style={tab == 'Yearly' ? styles.activeTab : styles.inActiveTab}
                >
                    <Text style={tab == 'Yearly' ? styles.textStyleActive : styles.textStyleInActive}>Yearly</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine}></View>

            <View style={styles.tabContainerStyle}>
                <Text style={styles.textStyle}>{tab}</Text>

                <Text style={styles.textPriceStyle}>SAR 2000<Text style={{ fontSize: 14 }}>/Desk</Text></Text>


                <View style={styles.checkContainer}>
                    <View style={styles.checkInnerContainer}><Ionicons name='md-checkmark' color={theme.colors.secondary} size={22} />
                        <Text style={styles.checkText}>Paint 1</Text>
                    </View>
                    <View style={styles.checkInnerContainer}><Ionicons name='md-checkmark' color={theme.colors.secondary} size={22} />
                        <Text style={styles.checkText}>Paint 2</Text>
                    </View>
                    <View style={styles.checkInnerContainer}><Ionicons name='md-checkmark' color={theme.colors.secondary} size={22} />
                        <Text style={styles.checkText}>Paint 3</Text>
                    </View>

                    <Text style={styles.paragraphText}>{Strings.BookingParagraph}</Text>

                </View>
                <Button
                    style={styles.buttonStyle}
                    mode={"outlined"}
                    onPress={bookhandler}
                >{Strings.BookNow}
                </Button>
            </View>

        </View>
    )
}

export default MemberShipPlan

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: '100%',
    },
    tabStyle: {
        flexDirection: 'row',
        marginTop: normalize(30),
        width: wp('90%'),
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    activeTab: {
        borderBottomWidth: 9,
        borderRadius: 2,
        borderBottomColor: theme.colors.secondary,
        width: wp('40%'),
        alignItems: 'center',
        padding: 5

    },
    inActiveTab: {
        width: wp('40%'),
        alignItems: 'center',
        padding: 5

    },
    textStyleActive: {
        fontSize: 15,
        fontFamily: FontFamilyName.PoppinsFamily,
        color: theme.colors.primary

    },
    textStyleInActive: {
        color: theme.colors.primary,
        fontSize: 15,
    },
    horizontalLine: {
        backgroundColor: theme.colors.primary,
        height: hp('0.05'),

    },
    tabContainerStyle: {
        width: normalize(340),
        height: normalize(340),
        borderRadius: 20,
        backgroundColor: theme.colors.White,
        elevation: 3,
        alignSelf: 'center',
        marginTop: 20,
    },
    textStyle: {
        fontSize: 25,
        fontFamily: FontFamilyName.PoppinsFamily,
        paddingLeft: 20,
        paddingTop: 20,
        color: theme.colors.primary
    },

    textPriceStyle: {
        fontSize: 30,
        fontFamily: FontFamilyName.PoppinsFamily,
        color: theme.colors.primary,
        textAlign: 'right',
        paddingRight: 20
    },
    checkContainer: {
        // backgroundColor: 'red',
        marginLeft: 10


    },
    checkInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    checkText: {
        paddingLeft: 5,
        fontSize: 13,
        fontFamily: FontFamilyName.PoppinsFamily,
        color: theme.colors.primary
    },
    paragraphText: {
        fontFamily: FontFamilyName.PoppinsFamily,
        color: theme.colors.primary,
        fontSize: normalize(11),
        paddingHorizontal: 20,
        paddingTop: 20
    },
    buttonStyle: {
        width: normalize(290),
        marginVertical: 20
    }

})
