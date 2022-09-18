import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as MODELS from '../../redux/category/models'


export default function ItemCategory({ item }: MODELS.CategoryModel | any) {
    return (
        <View style={tw`flex items-center bg-${item.item.color} rounded-lg py-3`}>
            <Text style={tw`text-xl text-black font-medium`}>{item.item.name}</Text>
            <Text style={tw`text-[#333] text-sm`}>20 tasks</Text>
        </View>
    )
}