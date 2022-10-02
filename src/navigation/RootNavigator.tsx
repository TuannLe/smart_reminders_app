import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import BottomNavigator from './BottomNavigator'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import TaskDetail from '../components/home/TaskDetail'
import RepeatItem from '../components/home/RepeatItem'

export default function RootNavigator() {
    const token = true
    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {!token ? (
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Root"
                        component={BottomNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TaskDetail"
                        component={TaskDetail}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RepeatItem"
                        component={RepeatItem}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}