import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import tw from 'twrnc'
import ItemCategory from '../components/category/ItemCategory';
import * as MODELS from '../redux/category/models'
import AddCategory from '../components/category/AddCategory'
export interface ItemCategory {
    id: string,
    name: string,
    color: string
}
const data: MODELS.CategoryModel[] = [
    {
        _id: "7657",
        name: "Personal",
        color: "red-500"
    },
    {
        _id: "7658",
        name: "Homework",
        color: "orange-500"
    },
    {
        _id: "7659",
        name: "Meeting",
        color: "blue-500"
    }
]

export default function CategoriesScreen() {
    return (
        <View style={tw`w-full h-full bg-white`}>
            <Text style={tw`text-2xl font-medium text-black px-2.5`}>Boards</Text>
            <FlatGrid
                data={data}
                itemDimension={150}
                renderItem={(item: MODELS.CategoryModel | any) =>
                    <ItemCategory
                        item={item}
                    // handleVisible={handleVisibleDeleteModal}
                    // setIdPostSelected={setIdPostSelected}
                    />
                }
                style={tw`bg-white`}
                keyExtractor={item => item._id}
                spacing={10}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={AddCategory}
                ListFooterComponentStyle={tw``}
            />
        </View>
    )
}