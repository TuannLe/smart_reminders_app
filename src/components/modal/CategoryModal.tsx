import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { IRootReducer } from '../../redux/rootReducer'
import { deleteCategoryStart } from '../../redux/category/actions'

export default function CategoryModal({ isVisible, handleVisible, idCategory, item }) {
    const token = useSelector((state: IRootReducer) => state.auth.currentUser.access_token)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const showConfirmDialog = () => {
        return Alert.alert(
            "Confirm",
            "Are you sure you want to delete all favorite video?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        dispatch(deleteCategoryStart({ idCategory, token }));
                        handleVisible()
                        return
                    }
                },
                {
                    text: "No",
                    onPress: () => {
                        return
                    }
                }
            ]
        )
    }

    const handleDelete = () => {
        showConfirmDialog()
    }
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
        >
            <View style={[tw`w-full h-full justify-end p-3`, { backgroundColor: 'rgba(0,0,0,0.9)' }]}>
                <View style={tw`mb-4`}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EditCategory', { item: item })}
                        style={tw`p-3 bg-[#363636] rounded-md mb-2`}
                    >
                        <Text style={tw`text-lg text-white text-center font-medium`}>Edit category</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleDelete}
                        style={tw`p-3 bg-[#363636] rounded-md`}
                    >
                        <Text style={tw`text-lg text-white text-center font-medium`}>Delete category</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleVisible}
                    style={tw`p-3 bg-[#363636] rounded-md`}
                >
                    <Text style={tw`text-lg text-red-500 text-center font-medium`}>Back</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}