import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'

import styles from './HomeScreenStyle'
import { image } from '../../core/image'
import Button from '../../component/Button'
import { Strings } from '../../core/strings'
import Wifi from '../../assets/svgs/Wifi.svg'
import Restaurant from '../../assets/svgs/Restaurant.svg'
import HeaderLeftLogo from '../../assets/svgs/HeaderLeftLogo.svg'
import HeaderRightLogo from '../../assets/svgs/HeaderRightLogo.svg'
import Group from '../../assets/svgs/Group.svg'
import ProductSelect from '../../component/ProductSelect'



const HomeScreen = (props) => {
    const [tab, setTab] = useState('Private Office')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderLeftLogo />
                <HeaderRightLogo />

            </View>


            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}>

                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Hi Ahmad !</Text>
                    <Text style={styles.boldText}>Welcome to Fintech Saudi</Text>
                    <Text style={styles.paragraphText}>Select a product to begin your membership plan with Fintech Saudi</Text>
                </View>

                <View style={styles.tabStyle}>
                    <TouchableOpacity
                        onPress={() => {
                            setTab('Private Office')
                        }}
                        style={tab == 'Private Office' ? styles.activeTab : styles.inActiveTab}

                    >
                        <Text
                            style={tab == 'Private Office' ? styles.textStyleActive : styles.textStyleInActive}>Private Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setTab('Dedicated Desks')
                        }}
                        style={tab == 'Dedicated Desks' ? styles.activeTab : styles.inActiveTab}
                    >
                        <Text style={tab == 'Dedicated Desks' ? styles.textStyleActive : styles.textStyleInActive}>Dedicated Desk</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.horizontalLine}></View>
                {
                    tab == 'Private Office' &&
                    <ProductSelect source={image.meeting} tab={tab} />
                }
                {
                    tab == 'Dedicated Desks' &&
                    <ProductSelect source={image.meeting} tab={tab} />
                }


            </ScrollView>


        </View>
    )
}

export default HomeScreen

