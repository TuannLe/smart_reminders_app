import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function SettingScreen() {
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw``}>
                <Text style={tw`text-2xl font-medium text-black`}>Tasks</Text>

            </View>

        </View>
    )
}