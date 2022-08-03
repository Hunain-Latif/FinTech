import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'

import { Picker } from '@react-native-picker/picker';
import { theme } from '../core/theme';
import normalize from 'react-native-normalize';

const YearSelect = ({ setValue, value, }) => {

    var years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',]


    const yearSel = years.map((item, index) => {
        return (
            <Picker.Item
                label={item} value={item} key={index}
                style={item == value ? styles.activeText : styles.inActiveText}
            />


        )
    })


    // const pickerData = (data) => {
    //     return (data?.length > 0) && (
    //         data.map((val, index) =>
    //             <Picker.item label={val} value={val} key={index}
    //                 style={val == value ? styles.activeText : styles.inActiveText}
    //             />

    //         )
    //     )
    // }
    return (

        <Picker
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) =>
                setValue(itemValue)
            }
            style={styles.pickerStyle}
        >
            <Picker.Item label='Select Year' value='Select Year' style={styles.textStyle} />
            {yearSel}
        </Picker>


    )
}

export default YearSelect

const styles = StyleSheet.create({
    pickerStyle: {
        width: '100%',
    },
    textStyle: {
        color: theme.colors.primary,
        fontSize: normalize(14)

    },
    activeText: {
        color: theme.colors.primary,
        backgroundColor: "rgba(230,230,230,0.5)",
        fontSize: normalize(16)
    },
    inActiveText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: normalize(16)
    }


})