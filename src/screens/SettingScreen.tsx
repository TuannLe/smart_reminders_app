import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'

export default function SettingScreen() {

    return (
        <View style={tw`flex w-full h-full px-3`}>
            <Text style={tw`text-2xl font-bold text-black`}>DashBoard</Text>
            <Text style={tw`text-xl text-black font-medium`}>Username</Text>
            <Text style={tw`text-base`}>Email</Text>
            <View style={tw`flex flex-row border-t border-b py-2 border-gray-300`}>
                <View style={tw`flex flex-1`}>
                    <Text style={tw`text-xl font-medium text-black`}>120</Text>
                    <Text style={tw`text-base`}>Created Tasks</Text>
                </View>
                <View style={tw`flex flex-1`}>
                    <Text style={tw`text-xl font-medium text-black`}>100</Text>
                    <Text style={tw`text-base`}>Complete Tasks</Text>
                </View>
            </View>
        </View>
    )
}
