import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { Agenda, AgendaSchedule, DateData } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export default function SettingScreen() {
    const navigation = useNavigation()
    const day = new Date()

    const [items, setItems] = useState({})
    const vacation = { key: 'vacation', color: 'red' }
    const massage = { key: 'massage', color: 'orange' }
    const workout = { key: 'workout', color: 'blue' }

    const loadItems = (day: DateData) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            const newItems: AgendaSchedule = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('TaskDetail')}
                style={tw`px-3 py-5 bg-white border-t border border-gray-200`}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={tw`flex w-full h-full bg-white`}>
            <Text style={tw`text-2xl font-medium text-black px-3 mt-3`}>Tasks</Text>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={day.toString()}
                markingType={'multi-dot'}
                markedDates={{
                    '2022-10-09': { dots: [vacation, massage, workout] },
                    '2022-10-10': { dots: [massage, workout] }
                }}
                renderItem={renderItem}
            />
        </View>

        // <View style={tw`flex w-full h-full px-3 mt-3`}>
        //     <Text style={tw`text-2xl font-medium text-black`}>Tasks</Text>
        //     <View style={tw`flex-1 w-full h-full bg-pink-200`}>
        //         <Agenda
        //             items={items}
        //             loadItemsForMonth={loadItems}
        //             selected={'2017-05-16'} />
        //     </View>
        //     <View style={tw`flex h-full items-center mt-10`}>
        //         <EvilIconsIcon name='calendar' style={tw`text-7xl`} />
        //         <Text style={tw`text-base pb-3`}>No more tasks for day</Text>
        //         <TouchableOpacity
        //             style={tw`p-3 py-2 rounded-full bg-blue-500`}
        //         >
        //             <AntDesignIcon name='plus' style={tw`text-xl text-white`} />
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
}
