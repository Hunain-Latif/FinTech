import { StyleSheet } from "react-native"
import { FontFamilyName, Strings } from "../../core/strings"
import { theme } from '../../core/theme'
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
    buttonStyle: {
        width: '80%',
        marginVertical: 20,
        backgroundColor: theme.colors.secondary
    },
    btnTextStyle: {
        color: theme.colors.White
    }

})