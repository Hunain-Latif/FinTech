import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../core/theme';
import normalize from 'react-native-normalize';

const BookingSteps = ({ isFocused }) => {
    var data = [1, 2, 3];

    return (

        <View style={styles.Container}>

            <View style={styles.innerContainer}>
            </View>

            {
                data.map((v, index) => {
                    return (
                        <View key={index}>
                            {
                                v == isFocused ?
                                    <View style={styles.focused}>
                                        <View style={styles.focusedInner}><Text style={{ color: 'white', }}>{v}</Text></View>
                                    </View>
                                    : v > isFocused ?
                                        <View style={styles.unFocused}>
                                            <View style={styles.unFocusedInner}><Text>{v}</Text></View>
                                        </View>
                                        : <View style={styles.complete}>
                                            <Text style={{ color: 'white', }}>{v}</Text>
                                        </View>
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default BookingSteps

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    innerContainer: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.primary,
        position: 'absolute',
        alignSelf: 'center'
    },
    focused: {
        width: normalize(24),
        height: normalize(24),
        borderRadius: normalize(20),
        borderWidth: 1,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    focusedInner: {
        width: normalize(24),
        height: normalize(24),
        borderRadius: normalize(20),
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unFocused: {
        width: normalize(24),
        height: normalize(24),
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.grey
    },
    unFocusedInner: {

    },
    complete: {
        width: normalize(24),
        height: normalize(24),
        borderRadius: 12,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center'

    }
})








