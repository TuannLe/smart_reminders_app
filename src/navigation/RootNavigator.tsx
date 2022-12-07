import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { RootStackParamList } from './types'
import BottomNavigator from './BottomNavigator'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import TaskDetail from '../components/home/TaskDetail'
import RepeatItem from '../components/home/RepeatItem'
import EndRepeat from '../screens/EndRepeat'
import NewCategory from '../components/category/NewCategory'
import EditCategory from '../components/category/EditCategory'
import CreateNoteScreen from '../screens/CreateNoteScreen'
import TaskList from '../components/category/TaskList'
import { IRootReducer } from '../redux/rootReducer'

export default function RootNavigator() {
    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token);
    const Stack = createNativeStackNavigator<RootStackParamList>()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {!token ? (
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Root"
                        component={BottomNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TaskDetail"
                        component={TaskDetail}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RepeatItem"
                        component={RepeatItem}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="EndRepeat"
                        component={EndRepeat}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="NewCategory"
                        component={NewCategory}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="EditCategory"
                        component={EditCategory}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TaskList"
                        component={TaskList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="CreateNoteScreen"
                        component={CreateNoteScreen}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}