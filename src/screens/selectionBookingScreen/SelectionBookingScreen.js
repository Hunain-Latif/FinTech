import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import styles from './SelectionBookingScreenStyle'
import BookingHeader from '../../component/BookingHeader'
import BookingSteps from '../../component/BookingSteps'
import DurationSelection from '../../component/DurationSelection'
import Button from '../../component/Button'
import { ScreenName, Strings } from '../../core/strings'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import normalize from 'react-native-normalize'


const SelectionBookingScreen = () => {
    const [checked, setChecked] = useState(false)
    const [data, setData] = useState([
        { title: 'Me' },
        { title: 'Hunain' },
        { title: 'Taimoor' },
        { title: 'Ali' },
        { title: 'Sulehri' },
    ])


    const navigation = useNavigation()

    const bookHandler = () => {
        navigation.navigate(ScreenName.CompleteBookingScreen, { data: data })
    }

    // useEffect(() => {
    //     let arr = data.map((item, index) => {
    //         item.setChecked = false
    //         return { ...item };
    //     })
    //     setData(arr)
    //     return (
    //         clearInterval(arr)
    //     )

    // }, [])
    const selectionHandler = (ind) => {

        let arr = data.map((item, index) => {
            if (ind == index) {
                item.checked = !item.checked
            }
            return { ...item }
        })
        setData(arr)
        setChecked(true)


    }
    return (
        <View style={styles.container}>
            <BookingHeader />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <Text style={styles.headingStyle}>{Strings.PrivateOffice}</Text>
                <BookingSteps isFocused={2} />
                <DurationSelection />

                {
                    data.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.selectionContainer}>
                                <View style={styles.selectionInnerContainer}>
                                    <Text style={styles.selectionTextStyle}>{item.title}</Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            selectionHandler(index)
                                        }
                                        style={item.checked ? styles.active : styles.inActive}>
                                        {checked && <MaterialIcons name='done' color={"white"} size={normalize(20)} />

                                        }


                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView >

            <Button
                style={styles.buttonStyle}
                mode={"contained"}
                labelStyle={styles.btnTextStyle}
                onPress={bookHandler}
            >{Strings.BookNow}
            </Button>
        </View >
    )
}

export default SelectionBookingScreen