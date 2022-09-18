import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const navigation = useNavigation()
    return (
        <View style={tw`w-full h-full flex justify-center px-5 relative`}>
            <View>
                <Text style={tw`text-4xl font-bold text-black`}>Create your</Text>
                <Text style={tw`text-4xl font-bold text-black`}>account</Text>
                <TextInput
                    style={tw`text-base border-b border-gray-300 mt-3`}
                    placeholder='Name'
                />
                <TextInput
                    style={tw`text-base border-b border-gray-300 mt-3`}
                    placeholder='Password'
                />
                <TextInput
                    style={tw`text-base border-b border-gray-300 mt-3`}
                    placeholder='Email address'
                />
                <View style={tw`mt-10`}>
                    <TouchableOpacity
                        style={tw`w-30 py-2 bg-blue-500 rounded`}
                    >
                        <Text style={tw`text-white text-base text-center`}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-5`}>
                <Text style={tw`text-base`}>Already have account?</Text>
                <TouchableOpacity
                    style={tw`px-1.5`}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={tw`text-blue-500 text-base`}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}