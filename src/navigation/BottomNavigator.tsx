import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import tw from 'twrnc'
import { RootTabParamList } from './types';
import HomeScreen from '../screens/HomeScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import TaskScreen from '../screens/TaskScreen'
import SettingScreen from '../screens/SettingScreen'
import DashboardTab from '../screens/DashBoardScreen'

export default function BottomNavigator() {
    const BottomTab = createBottomTabNavigator<RootTabParamList>();

    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <Octicons name="home" size={25} color={color} />
                            ) : (
                                <Octicons name="home" size={26} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
            {/* <BottomTab.Screen
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
            /> */}
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
            <BottomTab.Screen
                name="DashboardTab"
                component={DashboardTab}
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
                name="SettingTab"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: (({ focused, color }) =>
                        <>
                            {focused ? (
                                <IoniconsIcon name="ios-settings-outline" size={28} color={color} />
                            ) : (
                                <IoniconsIcon name="ios-settings-outline" size={28} color={color} />
                            )}
                        </>
                    ),
                    tabBarStyle: [tw`bg-[#F5F7FA]`],
                }}
            />
        </BottomTab.Navigator>
    )
}