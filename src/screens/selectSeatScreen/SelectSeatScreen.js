import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './SelectSeatScreenStyle'
import SelectSeat from '../../component/SelectSeat'
import Button from '../../component/Button'
import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import { useNavigation } from '@react-navigation/native'
import { Strings } from '../../core/strings'


const SelectSeatScreen = () => {
    const navigation = useNavigation()
    const bookingHandler = () => {
        navigation.navigate()
    }
    return (
        <View style={styles.container}>
            <BookingHeader />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <Text style={styles.headingStyle}>{Strings.SetupSeatingPlan}</Text>

                <View style={styles.infoContainer}>
                    <View style={styles.infoSubContainer}>
                        <View style={styles.availableBoxStyle}></View>
                        <Text style={styles.textStyle}>{Strings.Available}</Text>
                    </View>
                    <View style={styles.infoSubContainer}>
                        <View style={styles.bookedBoxStyle}></View>
                        <Text style={styles.textStyle}>{Strings.Booked}</Text>
                    </View>
                    <View style={styles.infoSubContainer}>
                        <View style={styles.notAvailableBoxStyle}></View>
                        <Text style={styles.textStyle}>{Strings.NAvailable}</Text>
                    </View>
                </View>


                <SelectSeat />
            </ScrollView>
            <Button
                style={styles.buttonStyle}
                mode={"contained"}
                labelStyle={styles.btnTextStyle}
                onPress={bookingHandler}
            >{Strings.ConfirmSeat}
            </Button>



        </View>
    )
}

export default SelectSeatScreen