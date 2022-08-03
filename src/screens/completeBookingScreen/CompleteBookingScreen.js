import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './CompleteBookingScreenStyle'
import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import { useNavigation } from '@react-navigation/native'
import { Strings } from '../../core/strings'
import Button from '../../component/Button'


const CompleteBookingScreen = () => {
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
                <BookingSteps isFocused={3} />
                <Text style={styles.headingStyle}>{Strings.SetupSeatingPlan}</Text>
                <Text style={styles.subHeadingStyle}>{Strings.SelectDesk}</Text>
                <Text style={styles.textStyle}>{Strings.HereHowWork} :</Text>
                <View style={styles.textContainer}>
                    <View style={styles.textInnerContainer}>
                        <View style={styles.dotStyle}></View>
                        <Text style={styles.headingTextContainer}>Select a Member</Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                        <View style={styles.dotStyle}></View>
                        <Text style={styles.headingTextContainer}>Select a Resource from the map</Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                        <View style={styles.dotStyle}></View>
                        <Text style={styles.headingTextContainer}>{Strings.OneSelected}</Text>
                    </View>
                </View>





            </ScrollView>
            <Button
                style={styles.buttonStyle}
                mode={"contained"}
                labelStyle={styles.btnTextStyle}
                onPress={bookingHandler}
            >{Strings.CompleteBooking
                }
            </Button>



        </View>
    )
}

export default CompleteBookingScreen
