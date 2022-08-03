import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper';
import { FontFamilyName } from '../core/strings';
import { theme } from '../core/theme';

const Button = ({ mode, onPress, style, ...props }) => {
    return (
        <PaperButton style={[styles.btnContainer, style]}
            labelStyle={styles.text}
            mode={mode}
            {...props}
            onPress={onPress}
        >
        </PaperButton>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        // backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        borderWidth: 1,
        height: 47,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 363,
        borderColor: theme.colors.secondary
    },
    text: {
        fontSize: 15,
        fontFamily: FontFamilyName.PoppinsFamily,
        color: theme.colors.secondary
    }
})


