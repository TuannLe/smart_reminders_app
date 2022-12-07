import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { ISignIn } from '../redux/auth/interfaces'
import { signInStart } from '../redux/auth/actions'

export default function SignIn() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const initialValues: ISignIn = {
        email: "",
        password: "",
    };
    const [message, setMessage] = useState('')

    const handleSignIn = (values: ISignIn) => {
        if (values.email && values.password) {
            dispatch(signInStart({
                email: values.email,
                password: values.password,
            }))
        } else {
            setMessage("Login failed")
        }
    }

    return (
        <View style={tw`w-full h-full flex justify-center px-5 relative`}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: ISignIn) => handleSignIn(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Text style={tw`text-4xl font-bold text-black`}>Sign In</Text>
                        <Text style={tw`text-4xl font-bold text-blue-600`}>to Reminder</Text>
                        <TextInput
                            style={tw`text-base border-b border-gray-300 mt-3 text-black`}
                            placeholder='Email address'
                            placeholderTextColor="gray"
                            value={values.email}
                            onChangeText={handleChange("email")}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={tw`text-base border-b border-gray-300 mt-3 text-black`}
                            placeholder='Password'
                            placeholderTextColor="gray"
                            value={values.password}
                            onChangeText={handleChange("password")}
                        />
                        <Text style={tw`text-red-500 text-sm mt-1.5`}>{message}</Text>
                        <View style={tw`flex flex-row items-center justify-between mt-10`}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={tw`px-6 py-2 bg-blue-500 rounded`}
                            >
                                <Text style={tw`text-white text-base`}>SIGN IN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={tw`text-blue-500 text-base`}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-5`}>
                <Text style={tw`text-base text-gray-500`}>Don't have any account?</Text>
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