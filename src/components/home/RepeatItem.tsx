import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function RepeatItem({ navigation }) {
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Lặp lại</Text>
            </View>
            <View style={tw`flex mt-8 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Không bao giờ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EndRepeat')}
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Hàng ngày</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Hàng tuần</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Cứ 2 tuần một lần</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Hàng tháng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`p-4 border-b border-gray-300`}
                >
                    <Text style={tw`text-base text-black`}>Hàng năm</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`mt-8 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    style={tw`p-4 flex flex-row items-center justify-between`}
                >
                    <Text style={tw`text-base text-black`}>Tùy chỉnh</Text>
                    <Ionicons name='ios-chevron-forward' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}