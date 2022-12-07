import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import { IRootReducer } from '../../redux/rootReducer'
import { } from '../../redux/note/actions'

export default function TaskDetail({ navigation, route }) {
    const dataItem = route.params.item
    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token)
    const listCategories = useSelector((state: IRootReducer) => state.category.arrayCategory)

    const [open, setOpen] = useState(false)
    const [idCategory, setIdCategory] = useState('')
    const [note, setNote] = useState(dataItem.note)
    const [date, setDate] = useState(new Date())
    const [necessity, setNecessity] = useState(dataItem.necessity)
    const [message, setMessage] = useState('')
    const status = 0

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
            <SelectDropdown
                data={listCategories}
                onSelect={(selectedItem, index) => {
                    setIdCategory(selectedItem.idCategory)
                    console.log(selectedItem.idCategory, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.name
                }}
                rowTextForSelection={(item, index) => {
                    return item.name
                }}
                defaultButtonText="Select Category"
                buttonStyle={tw`w-full border border-gray-300 bg-white`}
                buttonTextStyle={tw`text-base`}
                selectedRowStyle={tw`bg-blue-200`}
            />
            <TouchableOpacity
                onPress={() => setOpen(!open)}
                style={tw`mt-8 p-3 border border-gray-300 bg-white`}
            >
                <Text style={tw`text-base text-black`}>Date and time</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            {/* <View style={tw`mt-8 p-4 border border-gray-300 bg-white`}>
                <Text style={tw`text-base text-black`}>Task name</Text>
            </View> */}
            {/* <View style={tw`flex mt-8 border border-gray-300 bg-white`}>
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
            </View> */}
            <View style={tw`mt-8 border border-gray-300 bg-white`}>
                <View style={tw`flex flex-row items-center justify-between p-4`}>
                    <Text style={tw`text-base text-black`}>Necessity</Text>
                    <View style={tw`flex flex-row items-center`}>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-green-400 rounded-full flex items-center justify-center`}
                        >
                            {
                                necessity === 1 ? (
                                    <View style={tw`w-2 h-2 bg-white rounded-full`}></View>
                                ) : (
                                    <></>
                                )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center ml-2`}
                        >
                            {
                                necessity === 2 ? (
                                    <View style={tw`w-2 h-2 bg-white rounded-full`}></View>
                                ) : (
                                    <></>
                                )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-5 h-5 bg-red-500 rounded-full flex items-center justify-center ml-2`}
                        >
                            {
                                necessity === 3 ? (
                                    <View style={tw`w-2 h-2 bg-white rounded-full`}></View>
                                ) : (
                                    <></>
                                )
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tw`border-t border-gray-300 ml-4`} />
                <Text style={tw`text-base text-black px-4 mt-3`}>Note</Text>
                <TextInput
                    value={note}
                    style={tw`mx-3 text-base`}
                />
            </View>
        </View>
    )
}