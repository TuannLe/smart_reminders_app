import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation()

    return (
        <View style={tw`w-full h-full flex justify-center px-5 relative`}>
            <View>
                <Text style={tw`text-4xl font-bold text-black`}>Sign In</Text>
                <Text style={tw`text-4xl font-bold text-blue-600`}>to TodoList</Text>
                <TextInput
                    style={tw`text-base border-b border-gray-300 mt-3`}
                    placeholder='Email address'
                />
                <TextInput
                    style={tw`text-base border-b border-gray-300 mt-3`}
                    placeholder='Password'
                />
                <View style={tw`flex flex-row items-center justify-between mt-10`}>
                    <TouchableOpacity
                        style={tw`px-6 py-2 bg-blue-500 rounded`}
                    >
                        <Text style={tw`text-white text-base`}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={tw`text-blue-500 text-base`}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-5`}>
                <Text style={tw`text-base`}>Don't have any account?</Text>
                <TouchableOpacity
                    style={tw`px-1.5`}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={tw`text-blue-500 text-base`}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}