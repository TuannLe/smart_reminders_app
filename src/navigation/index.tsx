import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    NavigationContainer,
} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import SignUpScreen from '../screens/SignUp'
import SignInScreen from '../screens/SignIn'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";

export default function Navigation() {

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const token = true
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {!token ? (
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Root"
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Setting"
                        component={SettingScreen}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
        >
            <BottomTab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="CategoriesTab"
                component={CategoriesScreen}
                options={{
                    title: "Categories",
                    tabBarIcon: ({ color }) => (
                        <IconFeather name="settings" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <BottomTab.Screen
                name="SettingTab"
                component={SettingScreen}
                options={{
                    title: "Setting",
                    tabBarIcon: ({ color }) => (
                        <IconFeather name="settings" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </BottomTab.Navigator>
    )
}
