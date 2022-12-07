import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function TaskItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetail', { item: item.item })}
            style={tw`flex flex-row w-full items-center bg-white p-3 border border-gray-100`}
        >
            <View
                style={tw`w-2 h-2 rounded-full ${item.item.necessity === 1 ? `bg-green-400` : item.item.necessity === 2 ? `bg-blue-400` : `bg-red-500`}`}

            ></View>
            <View style={tw`flex-1 ml-3`}>
                <Text style={tw`text-xl text-black font-medium`}>{item.item.note}</Text>
                <Text style={tw`text-sm text-black`}>{item.item.date}</Text>
            </View>
        </TouchableOpacity>
    )
}