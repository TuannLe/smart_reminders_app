import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function TaskDetail({ navigation }) {
    const [isToggleTime, setToggleTime] = useState(false)
    const [isToggleLocation, setToggleLocation] = useState(false)
    const toggleSwitchTime = () => setToggleTime(!isToggleTime);
    const toggleSwitchLocation = () => setToggleLocation(!isToggleLocation);

    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Detail</Text>
                <TouchableOpacity
                    style={tw`p-3.5 absolute top-0 right-0`}
                >
                    <Text style={tw`text-base text-blue-500 font-medium`}>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`mt-8 p-4 border border-gray-300 bg-white`}>
                <Text style={tw`text-base text-black`}>Task name</Text>
            </View>
            <View style={tw`flex mt-8 border border-gray-300 bg-white`}>
                <View style={tw`flex flex-row items-center p-4 justify-between`}>
                    <Text style={tw`text-base text-black`}>Reminder me before</Text>
                    <Switch
                        trackColor={{ false: "#f1f1f1", true: "#64ff77" }}
                        thumbColor={isToggleTime ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchTime}
                        value={isToggleTime}
                    />
                </View>
                {isToggleTime ? (
                    <>
                        <View style={tw`border-t border-gray-300 ml-4`} />
                        <Text style={tw`text-base text-black p-4`}>Cảnh báo</Text>
                        <View style={tw`border-t border-gray-300 ml-4`} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RepeatItem')}
                            style={tw`p-4`}
                        >
                            <Text style={tw`text-base text-black`}>Lặp lại</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <></>
                )}
            </View>
            <View style={tw`flex mt-8 border border-gray-300 bg-white`}>
                <View style={tw`flex flex-row items-center p-4 justify-between`}>
                    <Text style={tw`text-base text-black`}>Add location</Text>
                    <Switch
                        trackColor={{ false: "#f1f1f1", true: "#64ff77" }}
                        thumbColor={isToggleLocation ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchLocation}
                        value={isToggleLocation}
                    />
                </View>
            </View>
            <View style={tw`mt-8 border border-gray-300 bg-white`}>
                <View style={tw`flex flex-row items-center justify-between p-4`}>
                    <Text style={tw`text-base text-black`}>Necessity</Text>
                    <View style={tw`flex flex-row items-center`}>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-green-300 rounded-full flex items-center justify-center`}
                        >
                            <View style={tw`w-2 h-2 bg-white rounded-full`}></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-orange-300 rounded-full flex items-center justify-center ml-2`}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-red-400 rounded-full flex items-center justify-center ml-2`}
                        >

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tw`border-t border-gray-300 ml-4`} />
                <Text style={tw`text-base text-black px-4 mt-3`}>Note</Text>
                <TextInput
                    style={tw`mx-4 text-base`}
                />
            </View>
        </View>
    )
}