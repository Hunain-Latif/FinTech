import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/homeScreen/HomeScreen'
import BookingScreen from './src/screens/bookingScreen/BookingScreen'
import AppNavigation from './src/navigations/appNavigation/AppNavigation'
import RootNavigation from './src/navigations/RootNavigation'

const App = () => {
  return (
    // <HomeScreen />
    // <BookingScreen />
    <RootNavigation />
  )
}

export default App

const styles = StyleSheet.create({})