import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

export default function TaskItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TaskDetail')}
            style={tw`flex flex-row w-full items-center bg-white p-3 border border-gray-100`}
        >
            <View style={tw`w-2 h-2 rounded-full bg-${item.item.color}`}></View>
            <View style={tw`flex-1 ml-3`}>
                <Text style={tw`text-xl text-black font-medium`}>{item.item.task}</Text>
                {/* <Text numberOfLines={1}>{item.item.description}</Text> */}
                <Text style={tw`text-sm`}>{item.item.time}</Text>
            </View>
            {/* <MaterialCommunityIcons name='bell-ring' style={tw`text-xl text-${item.item.necessity}`} /> */}
        </TouchableOpacity>
    )
}