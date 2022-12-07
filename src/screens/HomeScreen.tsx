import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import TodayNote from '../components/home/TodayNote'
import Categories from '../components/home/Categories'
import { IRootReducer } from '../redux/rootReducer'
import * as ACT from '../redux/category/actions'
import * as ACT_NOTE from '../redux/note/actions'

const data = [
    {
        id: '123',
        task: 'Homework',
        color: 'red-500',
        necessity: 'green-500',
        time: '07.30',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
    },
    {
        id: '124',
        task: 'Sleep',
        color: 'blue-500',
        necessity: 'red-500',
        time: '07.50',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
    },
    {
        id: '125',
        task: 'Shopping',
        color: 'orange-500',
        necessity: 'orange-400',
        time: '08.30',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
    },
    {
        id: '126',
        task: 'Meeting',
        color: 'green-500',
        necessity: 'red-500',
        time: '09.30',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
    }
]

export default function HomeScreen() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token)
    useEffect(() => {
        dispatch(ACT.getCategoryStart(token))
        dispatch(ACT_NOTE.getNoteStart(token))
    }, [])

    return (
        <View style={tw`flex w-full h-full`}>
            <Categories />
            <TodayNote />
            <View style={tw`absolute right-3 bottom-5`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateNoteScreen')}
                    style={tw`px-4 py-3 bg-blue-400 rounded-full`}
                >
                    <AntDesignIcon name="plus" style={tw`text-white text-xl`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}