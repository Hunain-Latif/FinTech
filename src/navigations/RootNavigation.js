import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AppNavigation from './appNavigation/AppNavigation';



const RootStack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name='AppNavigation' component={AppNavigation} />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}

export default RootNavigation

