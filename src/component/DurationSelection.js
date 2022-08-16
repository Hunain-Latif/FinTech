import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { FontFamilyName, Strings } from '../core/strings'
import { theme } from '../core/theme'
import normalize from "react-native-normalize";
import Calender from '../assets/svgs/Calender.svg'
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import moment from 'moment';


const DurationSelection = () => {
    const [monthModal, setMonthModal] = useState(false)
    const [month, setMonth] = useState('Select Month');
    // console.log('month==>', month)
    const [year, setyear] = useState('Select Year');
    const [monthNumber, setMonthNumber] = useState(null)
    // console.log('monthnumber==>', monthNumber)

    // let endMonth = moment().add(2, 'months').calendar()
    let endMonth = moment().add(1, 'days').calendar();
    let addMonth = moment().format("MMMM")




    // var data = [
    //     { title: 'Me' },
    //     { title: 'Hunain' },
    //     { title: 'Taimoor' },
    //     { title: 'Ali' },
    //     { title: 'Sulehri' },
    // ]
    return (
        <>
            <Text style={styles.textStyle}>{Strings.SelectDuration}</Text>
            <Text style={styles.dateTextStyle}>{Strings.ExpectedDate}</Text>
            <View style={styles.dateContainer}>
                <View style={styles.dateInnerContainer}>
                    <Text style={styles.dateText}>{month}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            setMonthModal(!monthModal)
                        }}

                    ><Calender />
                    </TouchableOpacity>
                    <MonthSelect
                        modalOpen={monthModal}
                        setModalOpen={setMonthModal}
                        value={month}
                        setValue={setMonth}
                    />
                </View>
                <View style={styles.dateInnerContainer}>
                    <YearSelect
                        value={year}
                        setValue={setyear}
                    />
                </View>

            </View>


            <View>
                <Text style={styles.dateTextStyle}>{Strings.NumberofMonth}</Text>
                <TextInput
                    value={monthNumber}
                    onChangeText={(e) => setMonthNumber(e)}
                    placeholder='Select Number of Months'
                    placeholderTextColor={theme.colors.primary}
                    style={styles.textInputStyle}
                    keyboardType='phone-pad'
                />
            </View>
            <Text style={styles.endDateStyle}>{Strings.ExpectedEndDate}</Text>
            <View style={styles.dateInfoContainer}>

                <View style={styles.dateInfoInnerContainer}>
                    <Text style={styles.dateinfoText}>{Strings.Date}</Text>
                    <Text style={styles.dateinfoTextLight}>30</Text>
                </View>
                <View>
                    <Text style={styles.dateinfoText}>{Strings.Month}</Text>
                    <Text style={styles.dateinfoTextLight}>{addMonth}</Text>

                </View>
                <View>
                    <Text style={styles.dateinfoText}>{Strings.Year}</Text>
                    <Text style={styles.dateinfoTextLight}>2022</Text>
                </View>
            </View>
            <Text style={styles.memberText}>{Strings.MemberSelection}</Text>
        </>
    )
}

export default DurationSelection

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: normalize(25),
        color: theme.colors.primary,
        paddingTop: 30,
        paddingLeft: 20
    },
    dateTextStyle: {
        fontFamily: FontFamilyName.FrutigerFamily,
        fontSize: 15,
        color: theme.colors.primary,
        paddingTop: 20,
        paddingLeft: 20

    },
    dateContainer: {
        marginTop: 20,
        width: '90%',
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dateInnerContainer: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderRadius: 10,
        backgroundColor: theme.colors.lightgrey,
        padding: 10
    },
    dateText: {
        fontSize: 14,
        color: theme.colors.primary
    },
    textInputStyle: {
        width: '90%',
        borderWidth: 0.3,
        borderRadius: 10,
        backgroundColor: theme.colors.lightgrey,
        padding: 15,
        alignSelf: 'center',
        marginVertical: 8

    },
    endDateStyle: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: 15,
        color: theme.colors.primary,
        paddingTop: 20,
        paddingLeft: 20
    },
    dateInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        marginTop: 10,

    },
    dateInfoInnerContainer: {
        alignItems: 'center',
    },
    dateinfoText: {
        fontSize: 15,
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        color: theme.colors.primary,
        paddingVertical: 3
    },
    dateinfoTextLight: {
        fontSize: 15,
        fontFamily: FontFamilyName.FrutigerFamily,
        color: theme.colors.primary
    },
    memberText: {
        fontFamily: FontFamilyName.Frutiger_Bold_Family,
        fontSize: 25,
        color: theme.colors.primary,
        paddingTop: 20,
        paddingLeft: 20
    },
    selectionContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },
    selectionInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',



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

})