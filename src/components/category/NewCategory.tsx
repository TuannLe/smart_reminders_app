import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from '../../redux/rootReducer'
import { createCategoryStart } from '../../redux/category/actions'
import { ICreateCategory } from '../../redux/category/interfaces'

const data = [
    {
        id: '1',
        color: '#FF736B',
    },
    {
        id: '2',
        color: '#FFBA45',
    },
    {
        id: '3',
        color: '#66FF77',
    },
    {
        id: '4',
        color: '#0099FF',
    },
    {
        id: '5',
        color: '#8B795E',
    },
    {
        id: '6',
        color: '#C1CDC1',
    },
    {
        id: '7',
        color: '#8470FF',
    },
]

export default function NewCategory({ navigation }) {
    const dispatch = useDispatch()

    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token)

    const [isColor, setColor] = useState('#FF736B')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (values: ICreateCategory) => {
        if (values.name && values.theme) {
            dispatch(createCategoryStart({ token, name: values.name, theme: values.theme }))
        } else {
            setMessage('Wrong!')
        }
    }
    const messages = useSelector((state: IRootReducer) => state.category.message)

    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>New Category</Text>
                <TouchableOpacity
                    onPress={() => handleSubmit({
                        "name": name,
                        "theme": isColor,
                        "token": token
                    })}
                    style={tw`p-3.5 absolute top-0 right-0`}
                >
                    <Text style={tw`text-base text-blue-500 font-medium`}>Create</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`px-3 mt-5`}>
                <TextInput
                    placeholder='Enter name...'
                    placeholderTextColor="gray"
                    value={name}
                    style={tw`bg-white px-3 text-base rounded-md border border-gray-200`}
                    onChangeText={(val) => setName(val)}
                />
                <View style={tw`flex flex-row items-center my-3`}>
                    <Text style={tw`text-base text-black`}>Tags</Text>
                    <View style={tw`w-12 h-5 rounded-full bg-[${isColor}] ml-5`}></View>
                </View>
                <FlatList
                    data={data}
                    renderItem={(item) => (
                        <TouchableOpacity
                            onPress={() => setColor(item.item.color)}
                            style={tw`w-5 h-5 rounded-full bg-[${item.item.color}] mr-3`}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
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