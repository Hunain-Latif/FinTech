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
    headingStyle: {
        fontFamily: FontFamilyName.Montserrat,
        fontSize: normalize(20),
        color: theme.colors.primary,
        paddingLeft: 20,
        paddingTop: 10
    },
    buttonStyle: {
        width: '80%',
        marginVertical: 20,
        backgroundColor: theme.colors.secondary
    },
    btnTextStyle: {
        color: theme.colors.White
    },
    selectionInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    boxStyle: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        width: 18,
        height: 18,
    },
    selectionTextStyle: {
        fontSize: 24,
        color: theme.colors.primary,

    },
    active: {
        width: 25,
        height: 25,
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: '#2B3577',
        alignItems: 'center', justifyContent: 'center'
    },
    inActive: {
        width: 25,
        height: 25,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    subContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    checkboxStyle: {
        width: 25,
        height: 25
    },
    selectionContainer: {
        width: '90%',
        alignSelf: 'center'
    }

})