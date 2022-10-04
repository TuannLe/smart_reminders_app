import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function AddCategory() {
    const navigation = useNavigation()
    return (
        <View style={tw`bg-gray-100 rounded-lg py-3 w-20`}>
            <TouchableOpacity
                onPress={() => navigation.navigate('NewCategory')}
            >
                <Text style={tw`text-center`}>
                    <AntDesignIcon name="plus" style={tw`text-black text-xl`} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}