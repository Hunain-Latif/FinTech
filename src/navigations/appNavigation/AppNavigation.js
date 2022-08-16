
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/homeScreen/HomeScreen';
import BookingScreen from '../../screens/bookingScreen/BookingScreen';
import SelectionBookingScreen from '../../screens/selectionBookingScreen/SelectionBookingScreen'
import { ScreenName } from '../../core/strings';
import CompleteBookingScreen from '../../screens/completeBookingScreen/CompleteBookingScreen';
import SelectSeatScreen from '../../screens/selectSeatScreen/SelectSeatScreen';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>


            {/* <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} /> */}
            {/* <Stack.Screen name={ScreenName.BookingScreen} component={BookingScreen} /> */}
            <Stack.Screen name={ScreenName.SelectionBookingScreen} component={SelectionBookingScreen} />
            <Stack.Screen name={ScreenName.CompleteBookingScreen} component={CompleteBookingScreen} />
            <Stack.Screen name={ScreenName.SelectSeatScreen} component={SelectSeatScreen} />
        </Stack.Navigator>

    );
}

export default AppNavigation;