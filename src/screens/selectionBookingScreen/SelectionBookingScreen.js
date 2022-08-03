import { ScrollView, Text, View } from 'react-native'
import React from 'react'

import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import MemberShipPlan from '../../component/MemberShipPlan'
import { Strings } from '../../core/strings'
import styles from './SelectionBookingScreenStyle'
import DurationSelection from '../../component/DurationSelection'
import Button from '../../component/Button'
import { useNavigation } from '@react-navigation/native'



const SelectionBookingScreen = () => {
    const navigation = useNavigation()
    const bookHandler = () => {
        navigation.navigate('CompleteBookingScreen',)
    }
    return (
        <View style={styles.container}>
            <BookingHeader />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BookingSteps isFocused={2} />
                <DurationSelection />



            </ScrollView>
            <Button
                style={styles.buttonStyle}
                mode={"contained"}
                labelStyle={styles.btnTextStyle}
                onPress={bookHandler}
            >{Strings.BookNow}
            </Button>



        </View>
    )
}

export default SelectionBookingScreen

