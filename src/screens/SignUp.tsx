import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Formik } from "formik";
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { signUpStart } from '../redux/auth/actions'
import { ISignUp } from '../redux/auth/interfaces'

export default function SignUp() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    interface InitValues extends ISignUp {
        cfPassword: string;
    }

    const initialValues: InitValues = {
        username: "",
        email: "",
        password: "",
        cfPassword: ""
    };
    const [message, setMessage] = useState('')

    const handleSignUp = (values: InitValues) => {
        if (values.email && values.password && values.password === values.cfPassword) {
            dispatch(signUpStart({
                username: values.username,
                email: values.email,
                password: values.password
            }))
        } else {
            setMessage('Wrong!')
        }
    }

    return (
        <View style={tw`w-full h-full flex justify-center px-5 relative`}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: InitValues) => handleSignUp(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View>
                        <Text style={tw`text-4xl font-bold text-black`}>Create your</Text>
                        <Text style={tw`text-4xl font-bold text-black`}>account</Text>
                        <TextInput
                            style={tw`text-base text-black border-b border-gray-300 mt-3`}
                            placeholder='Name'
                            placeholderTextColor="gray"
                            value={values.username}
                            onChangeText={handleChange("username")}
                        />
                        <TextInput
                            style={tw`text-base text-black border-b border-gray-300 mt-3`}
                            placeholder='Email address'
                            placeholderTextColor="gray"
                            value={values.email}
                            onChangeText={handleChange("email")}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={tw`text-base text-black border-b border-gray-300 mt-3`}
                            placeholder='Password'
                            placeholderTextColor="gray"
                            value={values.password}
                            onChangeText={handleChange("password")}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={tw`text-base text-black border-b border-gray-300 mt-3`}
                            placeholder='Confirm password'
                            placeholderTextColor="gray"
                            value={values.cfPassword}
                            onChangeText={handleChange("cfPassword")}
                        />
                        <Text style={tw`text-red-500 text-sm mt-1.5`}>{message}</Text>
                        <View style={tw`mt-10`}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={tw`w-30 py-2 bg-blue-500 rounded`}
                            >
                                <Text style={tw`text-white text-base text-center`}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
            <View style={tw`flex flex-row items-center justify-center absolute inset-x-0 bottom-5`}>
                <Text style={tw`text-base text-gray-500`}>Already have account?</Text>
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