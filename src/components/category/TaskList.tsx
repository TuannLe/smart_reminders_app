import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TaskItem from '../home/TaskItem'

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


export default function TaskList({ navigation }) {
    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw`flex flex-row items-center justify-center relative py-3 border border-gray-300 bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`p-2.5 absolute top-0 left-0`}
                >
                    <Ionicons name='ios-chevron-back-outline' style={tw`text-2xl text-black`} />
                </TouchableOpacity>
                <Text style={tw`text-xl text-black font-medium`}>Tasks</Text>
            </View>
            <View style={tw`mt-3`}>
                <FlatList
                    data={data}
                    renderItem={(item) => (<TaskItem item={item} />)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}