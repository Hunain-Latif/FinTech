import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { theme } from '../core/theme';
import normalize from 'react-native-normalize';

const MonthSelect = ({ modalOpen, setModalOpen, setValue, }) => {

    var monthName = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    const onPressItem = (pickerData) => {
        setValue(pickerData)
    }


    const pickerData = monthName.map((item, index) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onPressItem(item),
                        setModalOpen(false)

                    // console.log('item Selected===>', item)
                }}
                key={index}
            >
                <Text style={{ paddingVertical: 10, fontSize: 20 }}>{item}</Text>

            </TouchableOpacity>
        )
    })

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalOpen(!modalOpen);
            }}
        >
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 10 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.pickerContainer}>
                        {pickerData}
                    </View>

                </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        setModalOpen(!modalOpen)
                    }}
                    style={styles.buttonStyle}
                >
                    <AntDesign name='closecircleo' size={20} color={theme.colors.primary} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default MonthSelect

const styles = StyleSheet.create({
    container: {

        height: '40%',
        width: '50%',
        backgroundColor: theme.colors.White,
        alignSelf: 'center',
        position: 'absolute',
        top: normalize(140),
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 5

    },
    pickerContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 16
    },
    buttonStyle: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
})


 // <Modal
        //     animationType="slide"
        //     transparent={true}
        //     visible={modalOpen}
        //     onRequestClose={() => {
        //         Alert.alert("Modal has been closed.");
        //         setModalOpen(!modalOpen);
        //     }}
        // >
        //     <View style={styles.container}>
        //         <View style={styles.pickerContainer}>
        //             <TouchableOpacity
        //                 onPress={() => {
        //                     setModalOpen(!modalOpen)
        //                 }}
        //             >
        //                 <Text>close</Text>
        //             </TouchableOpacity>

        //             <Picker
        //                 selectedValue={value}
        //                 onValueChange={(itemValue, itemIndex) =>
        //                     setValue(itemValue)
        //                 }>
        //                 {pickerData(items)}
        //             </Picker>
        //         </View>
        //     </View>
        // </Modal>