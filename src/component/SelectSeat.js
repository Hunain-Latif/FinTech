import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';
import normalize from 'react-native-normalize';
import { image } from '../core/image';


const SelectSeat = () => {
    const alertFun = () => {
        Alert.alert('Select this seat For You')
    }
    return (
        <View style={styles.container}>
            <Image style={{ width: normalize(340), resizeMode: 'contain', alignSelf: 'center', }}
                source={(image.spaceSelect)} />
            <View style={styles.picContainer}>
                <TouchableOpacity
                    onPress={() => {
                        alertFun()
                    }}
                    style={styles.touchBoxContainer}>
                </TouchableOpacity>
                <View style={styles.picsubContainer}>
                    <TouchableOpacity style={styles.touchBoxContainer}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBoxContainer}>
                    </TouchableOpacity>
                </View>
                <View style={styles.picsubContainer2}>
                    <TouchableOpacity style={styles.touchBoxContainer2}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchBoxContainer2}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default SelectSeat

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },
    picContainer: {
        width: '20%',
        height: '20%',
        position: 'absolute',
        top: 106,
        right: 93
    },

    touchBoxContainer: {
        backgroundColor: 'green',
        width: 15,
        height: 15,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10


    },
    picsubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        marginTop: 6,
        alignSelf: 'center',

    },
    picsubContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        alignSelf: 'center',
    },
    touchBoxContainer2: {
        backgroundColor: 'green',
        width: 15,
        height: 15,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 5
    }

})