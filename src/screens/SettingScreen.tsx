import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/actions'

export default function SettingScreen() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <View style={tw`w-full h-full flex justify-center p-3`}>
            <TouchableOpacity
                onPress={handleLogout}
                style={tw`p-3 bg-red-500`}
            >
                <Text style={tw`text-base text-white text-center font-medium`}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}