import { StyleSheet } from "react-native"
import { FontFamilyName, Strings } from "../../core/strings"
import { theme } from '../../core/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.White,
    },
    header: {
        backgroundColor: theme.colors.primary,
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10

    },
    textContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'column',

    },
    textStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: 20,
        padding: 2,
        color: theme.colors.primary,

    },
    boldText: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: 26,
        padding: 2,
        color: theme.colors.primary,

    },
    boldTextTab: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: 20,
        padding: 2,
        color: theme.colors.primary,

    },
    paragraphText: {
        fontFamily: FontFamilyName.PoppinsFamily,
        fontSize: 15,
        padding: 2,
        color: theme.colors.primary,
        width: wp('85%'),

    },
    paragraphTextTab: {
        fontFamily: FontFamilyName.PoppinsFamily,
        fontSize: 12,
        padding: 2,
        color: theme.colors.primary,
        width: wp('55%')

    },
    tabStyle: {
        flexDirection: 'row',
        marginTop: 50,
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
        color: theme.colors.primary,
        fontFamily: FontFamilyName.PoppinsFamily

    },
    textStyleInActive: {
        color: theme.colors.primary,
        fontSize: 15,
        color: theme.colors.primary,

    },
    horizontalLine: {
        backgroundColor: theme.colors.primary,
        height: hp('0.05'),

    },













})