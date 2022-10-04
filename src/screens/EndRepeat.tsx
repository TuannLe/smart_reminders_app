import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function EndRepeat({ navigation }) {
    const [isChecked, setChecked] = useState(false)

    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Kết thúc lặp lại</Text>
                <TouchableOpacity
                    style={tw`p-3.5 absolute top-0 right-0`}
                >
                    <Text style={tw`text-base text-blue-500 font-medium`}>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`flex mt-8 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    style={tw`flex flex-row items-center justify-between p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Lặp lại mãi mãi</Text>
                    <Ionicons name='ios-checkmark-outline' size={20} style={tw`text-blue-600`} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Ngày kết thúc lặp lại</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}