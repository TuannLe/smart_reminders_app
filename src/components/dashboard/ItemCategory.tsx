import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function ItemCategory({ item }: any) {
    return (
        <View style={tw`flex items-center py-3 px-10 mr-3 bg-${item.item.color} rounded`}>
            <Text style={tw`text-white font-medium text-xl`}>{item.item.name}</Text>
            <Text style={tw`text-white text-base`}>24 tasks</Text>
        </View>
    )
}