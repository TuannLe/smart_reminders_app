import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { ICategory } from '../../redux/category/interfaces'


export default function CategoryItem({ item, handleVisible, setIdCategory, setItem }: ICategory | any) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('TaskList')}
            onLongPress={() => {
                setIdCategory(item.item.idCategory)
                setItem(item.item)
                handleVisible()
            }}
            style={tw`flex items-center bg-[${item.item.theme}] rounded-lg w-45  p-3`}
        >
            <Text
                style={tw`text-xl text-black font-medium`}
                numberOfLines={1}
            >
                {item.item.name}
            </Text>
            <Text style={tw`text-[#333] text-sm`}>20 tasks</Text>
        </TouchableOpacity>
    )
}