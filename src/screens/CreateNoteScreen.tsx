import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-native-date-picker'
import SelectDropdown from 'react-native-select-dropdown'
import { IRootReducer } from '../redux/rootReducer'
import { createNoteStart } from '../redux/note/actions'
import { ICreateNote } from '../redux/note/interfaces'

export default function CreateNoteScreen({ navigation }) {
    const dispatch = useDispatch()

    const listCategories = useSelector((state: IRootReducer) => state.category.arrayCategory)
    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token)

    const [open, setOpen] = useState(false)
    const [idCategory, setIdCategory] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState(new Date())
    const [necessity, setNecessity] = useState(1)
    const [message, setMessage] = useState('')
    const status = 0

    const messages = ''

    const handleSubmit = () => {
        if (idCategory && note && date && necessity) {
            dispatch(createNoteStart({ idCategory, note, date, necessity, status, token }))
        } else {
            setMessage('Wrong!')
        }
    }
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>New Note</Text>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={tw`p-3.5 absolute top-0 right-0`}
                >
                    <Text style={tw`text-base text-blue-500 font-medium`}>Create</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`px-3 mt-5`}>
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
                <View style={tw`mt-8 border border-gray-300 bg-white`}>
                    <View style={tw`flex flex-row items-center justify-between p-4`}>
                        <Text style={tw`text-base text-black`}>Necessity</Text>
                        <View style={tw`flex flex-row items-center`}>
                            <TouchableOpacity
                                onPress={() => setNecessity(1)}
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
                                onPress={() => setNecessity(2)}
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
                                onPress={() => setNecessity(3)}
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
                        style={tw`mx-4 text-base`}
                        value={note}
                        onChangeText={(val) => setNote(val)}
                    />
                </View>
                {
                    messages ? (
                        <Text style={tw`text-green-500 text-sm mt-2`}>{messages}</Text>
                    ) : (
                        <Text style={tw`text-red-500 text-sm mt-2`}>{message}</Text>
                    )
                }
            </View>
        </View>
    )
}