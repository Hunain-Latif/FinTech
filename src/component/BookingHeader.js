import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BookingHeaderLogo from '../assets/svgs/BookingHeaderLogo.svg'
import { theme } from '../core/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import normalize from 'react-native-normalize';
import { FontFamilyName } from '../core/strings';
import { useNavigation } from "@react-navigation/native";


const BookingHeader = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.goBackContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Ionicons name='arrow-back' size={24} color={theme.colors.White} />
                </TouchableOpacity>
            </View>
            <BookingHeaderLogo />
            <Text>                 </Text>

        </View>


    )
}

export default BookingHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: normalize(80),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    goBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    textStyle: {
        fontSize: normalize(20),
        fontFamily: FontFamilyName.FrutigerFamily,
        paddingLeft: 10,
        color: theme.colors.primary


    }
})