import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import { theme } from '../core/theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const FlatListComponent = () => {
    const [checked, setChecked] = useState(false)


    var data = [
        { title: 'Me' },
        { title: 'Hunain' },
        { title: 'Taimoor' },
        { title: 'Ali' },
        { title: 'Sulehri' },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.selectionInnerContainer}>
                            <Text style={styles.selectionTextStyle}>{item.title}</Text>
                            <TouchableOpacity
                                onPress={() => setChecked(!checked)}
                                style={checked ? styles.active : styles.inActive}>
                                {checked && <MaterialIcons name='done' color={"white"} size={normalize(20)} />}
                            </TouchableOpacity>
                        </View>


                    )
                }}
            />
        </View>
    )
}

export default FlatListComponent

const styles = StyleSheet.create({

    container: {
        width: '90%',
        alignSelf: 'center'
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
})