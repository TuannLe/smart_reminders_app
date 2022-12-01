import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import * as MODELS from '../../model/category/models'


export default function ItemCategory({ item }: MODELS.CategoryModel | any) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TaskList')}
            style={tw`flex items-center bg-${item.item.color} rounded-lg py-3`}
        >
            <Text style={tw`text-xl text-black font-medium`}>{item.item.name}</Text>
            <Text style={tw`text-[#333] text-sm text-black`}>20 tasks</Text>
        </TouchableOpacity>
    )
}