import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import MemberShipPlan from '../../component/MemberShipPlan'
import styles from './BookingScreenStyle'

const BookingScreen = (props) => {
    // console.log('=====', props)

    return (

        <View style={styles.container}>
            <BookingHeader />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BookingSteps isFocused={1} />
                <Text style={styles.textStyle}>Pick a MemberShip Plan</Text>

                <MemberShipPlan />
            </ScrollView>



        </View>
    )
}

export default BookingScreen

