import { StyleSheet } from "react-native"
import { FontFamilyName, Strings } from "../../core/strings"
import { theme } from '../../core/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import normalize from "react-native-normalize";


export default StyleSheet.create({
    container: {
        flex: 1,
        // width: wp('100%'),
        // height: hp('100%'),
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.White
    },
    textStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(25),
        color: theme.colors.primary,
        paddingTop: 30,
        paddingLeft: 20
    },
    dateTextStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(15),
        color: theme.colors.primary,
        paddingTop: 20,
        paddingLeft: 20

    }

})