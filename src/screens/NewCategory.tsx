import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'

const data = [
    {
        id: '1',
        color: 'red-400',
    },
    {
        id: '2',
        color: 'orange-400',
    },
    {
        id: '3',
        color: 'yellow-400',
    },
    {
        id: '4',
        color: 'green-400',
    },
    {
        id: '5',
        color: 'blue-400',
    },
    {
        id: '6',
        color: 'purple-400',
    },
    {
        id: '7',
        color: 'gray-300',
    },
]

export default function NewCategory({ navigation }) {
    const [isColor, setColor] = useState('red-400')
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>New Category</Text>
                <TouchableOpacity
                    style={tw`p-3.5 absolute top-0 right-0`}
                >
                    <Text style={tw`text-base text-blue-500 font-medium`}>Create</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`px-3 mt-5`}>
                <TextInput
                    placeholder='Enter name...'
                    style={tw`bg-white px-3 text-base rounded-md border border-gray-200`}
                />
                <View style={tw`flex flex-row items-center my-3`}>
                    <Text style={tw`text-base text-black`}>Tags</Text>
                    <View style={tw`w-12 h-5 rounded-full bg-${isColor} ml-5`}></View>
                </View>
                <FlatList
                    data={data}
                    renderItem={(item) => (
                        <TouchableOpacity
                            onPress={() => setColor(item.item.color)}
                            style={tw`w-5 h-5 rounded-full bg-${item.item.color} mr-3`}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
            </View>
        </View>
    )
}