import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc'

const data = [
    {
        id: '123',
        task: 'quet nha'
    },
    {
        id: '124',
        task: 'rua bat'
    },
    {
        id: '125',
        task: 'hoc bai'
    }
]

export default function HomeScreen() {
    const [isChecked, setChecked] = useState(false)
    return (
        <View style={tw`flex w-full h-full px-3`}>
            {/* <View style={tw`flex flex-row items-center justify-between mt-3`}>
                <TextInput
                    placeholder='Search...'
                    style={tw`flex-1 bg-gray-300 text-base rounded p-1.5`}
                />
                <TouchableOpacity
                    style={tw`p-3`}
                >
                    <AntDesignIcon name='plus' style={tw`text-xl`} />
                </TouchableOpacity>
            </View> */}
            <Text>Hi Username! Lorem ipsum dolor sit.hide</Text>
            <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-3xl text-blue-500 font-medium`}>Today</Text>
                <View style={tw`border border-gray-300 px-2 rounded-xl ml-3`}>
                    <Text style={tw`text-base`}>0/5</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={(item) => (
                    <Text>{item.item.task}</Text>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}