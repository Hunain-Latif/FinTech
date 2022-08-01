import { ScrollView, Text, View } from 'react-native'
import React from 'react'

import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import MemberShipPlan from '../../component/MemberShipPlan'
import { Strings } from '../../core/strings'
import styles from './SelectionBookingScreenStyle'



const SelectionBookingScreen = () => {
    return (
        <View style={styles.container}>
            <BookingHeader />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BookingSteps isFocused={2} />
                <Text style={styles.textStyle}>{Strings.SelectDuration}</Text>
                <Text style={styles.dateTextStyle}>{Strings.ExpectedDate}</Text>


            </ScrollView>



        </View>
    )
}

export default SelectionBookingScreen

