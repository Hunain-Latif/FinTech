import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './CompleteBookingScreenStyle'
import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import { useNavigation } from '@react-navigation/native'
import { ScreenName, Strings } from '../../core/strings'
import Button from '../../component/Button'
import SelectSeat from '../../component/SelectSeat'


const CompleteBookingScreen = (props) => {
    const data = props.route.params.data
    console.log('next ====>', data)



    let member = data.filter(obj => {
        return obj.checked === true && obj.title
    })
    console.log(member)

    let result = member.map(({ title }) => title)
    console.log('result', result)


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
                <Text style={styles.headingStyle}>{Strings.PrivateOffice}</Text>

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
                <FlatList
                    data={result}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.seatSubContainer}>
                            <Text style={styles.seatTextStyle}>{item}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(ScreenName.SelectSeatScreen)
                                }}
                                style={styles.selectSeatButtonStyle}>
                                <Text style={styles.selectSeatTextStyle}>{Strings.SelectSeat}</Text>
                            </TouchableOpacity>

                        </View>
                    )

                    }



                />

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
