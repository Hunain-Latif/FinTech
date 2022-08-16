import { StyleSheet } from "react-native"
import { FontFamilyName } from "../../core/strings"
import { theme } from '../../core/theme'
import normalize from "react-native-normalize";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.White,
    },
    headingStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(20),
        color: theme.colors.primary,
        paddingTop: 10,
        paddingLeft: 20
    },
    subHeadingStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(15),
        color: theme.colors.primary,
        paddingTop: 20,
        paddingLeft: 20

    },
    textStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(18),
        color: theme.colors.primary,
        paddingTop: 40,
        paddingLeft: 20
    },
    textContainer: {
        width: '80%',
        alignSelf: 'center',
    },
    textInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    dotStyle: {
        width: 2,
        height: 2,
        backgroundColor: theme.colors.primary,
        marginRight: 2
    },
    headingTextContainer: {
        fontSize: normalize(15),
        fontFamily: FontFamilyName.FrutigerFamily,
        color: theme.colors.primary

    },
    buttonStyle: {
        backgroundColor: theme.colors.secondary,
        marginVertical: 20
    },
    seatSubContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,

    },
    seatTextStyle: {
        fontFamily: FontFamilyName.Montserrat,
        fontSize: normalize(24),
        color: theme.colors.primary,

    },
    selectSeatTextStyle: {
        fontFamily: FontFamilyName.Montserrat,
        fontSize: normalize(12),
        color: theme.colors.primary,
    },
    selectSeatButtonStyle: {
        borderWidth: 1,
        width: 94,
        height: 37,
        borderRadius: 20,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.bgGrey,

    }

})