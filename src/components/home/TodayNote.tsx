import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import { IRootReducer } from '../../redux/rootReducer'

export default function TodayNote() {
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
        ,
        {
            id: '127',
            task: 'Meeting',
            color: 'green-500',
            necessity: 'red-500',
            time: '09.30',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
        }
        ,
        {
            id: '128',
            task: 'Meeting',
            color: 'green-500',
            necessity: 'red-500',
            time: '09.30',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
        }
        ,
        {
            id: '129',
            task: 'Meeting',
            color: 'green-500',
            necessity: 'red-500',
            time: '09.30',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo assumenda consequuntur maxime culpa! Nisi, officia? Cumque molestiae sunt aliquam veritatis perferendis nihil eligendi amet doloribus. Impedit maiores officia voluptatem!'
        }
    ]
    const listNote = useSelector((state: IRootReducer) => state.note.arrayNote)
    return (
        <View style={tw`flex w-full`}>
            <View style={tw`flex flex-row items-center px-3`}>
                <Text style={tw`text-3xl text-blue-500 font-medium mb-2`}>Today</Text>
                <View style={tw`border border-gray-300 px-2 rounded-xl ml-3`}>
                    <Text style={tw`text-base text-black`}>0/5</Text>
                </View>
            </View>
            <FlatList
                data={listNote}
                renderItem={(item) => (<TaskItem item={item} />)}
                // keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}