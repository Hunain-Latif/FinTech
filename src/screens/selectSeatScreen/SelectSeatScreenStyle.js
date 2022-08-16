import { StyleSheet } from "react-native"
import normalize from "react-native-normalize";
import { FontFamilyName } from "../../core/strings";
import { theme } from "../../core/theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.White,
    },
    headingStyle: {
        fontFamily: FontFamilyName.Montserrat,
        fontSize: normalize(20),
        color: theme.colors.primary,
        paddingLeft: 20,
        paddingTop: 10
    },
    infoContainer: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15

    },
    infoSubContainer: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
    },
    availableBoxStyle: {
        width: 15,
        height: 15,
        backgroundColor: theme.colors.primary,
        borderRadius: 5
    },
    bookedBoxStyle: {
        width: 15,
        height: 15,
        backgroundColor: theme.colors.secondary,
        borderRadius: 5
    },
    notAvailableBoxStyle: {
        width: 15,
        height: 15,
        backgroundColor: theme.colors.grey,
        borderRadius: 5
    },

    textStyle: {
        fontFamily: FontFamilyName.Montserrat,
        fontSize: 15,
        color: theme.colors.primary,
        paddingLeft: 10
    },
    buttonStyle: {
        backgroundColor: theme.colors.secondary,
        marginVertical: 20
    },
})