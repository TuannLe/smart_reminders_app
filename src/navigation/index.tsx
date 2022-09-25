import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    NavigationContainer,
} from "@react-navigation/native";
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import tw from 'twrnc'
import SignUpScreen from '../screens/SignUp'
import SignInScreen from '../screens/SignIn'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import TaskScreen from '../screens/TaskScreen'
import {
    RootStackParamList,
    RootTabParamList,
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
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <FontistoIcon name="pie-chart-1" size={25} color={color} />
                            ) : (
                                <FeatherIcon name="pie-chart" size={26} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
            <BottomTab.Screen
                name="CategoriesTab"
                component={CategoriesScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-grid" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-grid-outline" size={25} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
            <BottomTab.Screen
                name="TaskTab"
                component={TaskScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <FeatherIcon name="check-circle" size={25} color={color} />
                            ) : (
                                <FeatherIcon name="check-circle" size={25} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
            {/* <BottomTab.Screen
                name="SearchTab"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <FeatherIcon name="check-circle" size={25} color={color} />
                            ) : (
                                <FeatherIcon name="check-circle" size={25} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            /> */}
            <BottomTab.Screen
                name="SettingTab"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-settings" size={25} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-settings-outline" size={25} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
        </BottomTab.Navigator>
    )
}
