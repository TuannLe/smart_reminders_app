import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as MODELS from '../redux/category/models'
import ItemCategory from '../components/dashboard/ItemCategory'

const data: MODELS.CategoryModel[] = [
    {
        _id: "7657",
        name: "Personal",
        color: "red-500"
    },
    {
        _id: "7658",
        name: "Homework",
        color: "orange-500"
    },
    {
        _id: "7659",
        name: "Meeting",
        color: "blue-500"
    },
    {
        _id: "7457",
        name: "Personal",
        color: "red-500"
    },
    {
        _id: "76558",
        name: "Homework",
        color: "orange-500"
    },
    {
        _id: "762659",
        name: "Meeting",
        color: "blue-500"
    }
]


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
            <View style={tw`mt-5`}>
                <FlatList
                    data={data}
                    renderItem={(item) => (
                        <ItemCategory item={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    pagingEnabled
                />
            </View>
            <View style={tw`flex flex-row items-center justify-between mt-5`}>
                <Text style={tw`text-xl text-black font-medium`}>Statistic</Text>
                <Text>Calendar</Text>
            </View>
        </View>
    )
}
