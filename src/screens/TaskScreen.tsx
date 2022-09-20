import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, Component } from 'react'
import tw from 'twrnc'
import { LocaleConfig } from 'react-native-calendars';
import { Calendar, Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// LocaleConfig.locales['fr'] = {
//     monthNames: [
//         'Janvier',
//         'Février',
//         'Mars',
//         'Avril',
//         'Mai',
//         'Juin',
//         'Juillet',
//         'Août',
//         'Septembre',
//         'Octobre',
//         'Novembre',
//         'Décembre'
//     ],
//     monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//     dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
//     dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//     today: "Aujourd'hui"
// };
// LocaleConfig.defaultLocale = 'fr';

export default function SettingScreen() {
    const [items, setItems] = useState<any>('');

    return (
        <View style={tw`flex w-full h-full`}>
            <View style={tw``}>
                <Text style={tw`text-2xl font-medium text-black`}>Tasks</Text>
                <Calendar
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}
                    monthFormat={'yyyy MM'}
                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}
                    hideArrows={false}
                    hideExtraDays={true}
                    disableMonthChange={true}
                    firstDay={1}
                    hideDayNames={true}
                    showWeekNumbers={true}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    disableArrowLeft={false}
                    disableArrowRight={false}
                    disableAllTouchEventsForDisabledDays={true}
                    enableSwipeMonths={true}
                />
                <View style={tw`flex h-full items-center mt-10`}>
                    <EvilIconsIcon name='calendar' style={tw`text-7xl`} />
                    <Text style={tw`text-base pb-3`}>No more tasks for day</Text>
                    <TouchableOpacity
                        style={tw`p-3 py-2 rounded-full bg-blue-500`}
                    >
                        <AntDesignIcon name='plus' style={tw`text-xl text-white`} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
