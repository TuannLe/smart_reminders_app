import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import tw from 'twrnc'

export default function AddCategory() {
    return (
        <View style={tw`bg-gray-100 rounded-lg py-3 w-20`}>
            <TouchableOpacity>
                <Text style={tw`text-center`}>
                    <AntDesignIcon name="plus" style={tw`text-black text-xl`} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}