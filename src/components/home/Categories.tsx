import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import CategoryItem from '../category/CategoryItem'
import AddCategory from '../category/AddCategory'
import CategoryModal from '../modal/CategoryModal'
import { IRootReducer } from '../../redux/rootReducer'

export default function Categories() {
    const listCategories = useSelector((state: IRootReducer) => state.category.arrayCategory)

    const [isVisible, setVisible] = useState(false)
    const [idCategory, setIdCategory] = useState('')
    const [item, setItem] = useState({})

    const handleVisible = () => {
        setVisible(!isVisible)
    }

    return (
        <View style={tw`p-3 mb-3`}>
            <Text style={tw`text-3xl text-blue-500 font-medium mb-2`}>Categories</Text>
            <FlatList
                data={listCategories}
                renderItem={(item) => (<CategoryItem item={item} handleVisible={handleVisible} setIdCategory={setIdCategory} setItem={setItem} />)}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => {
                    return <View style={tw`w-3`}></View>
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                ListFooterComponent={AddCategory}
            />
            <CategoryModal
                isVisible={isVisible}
                handleVisible={handleVisible}
                idCategory={idCategory}
                item={item}
            />
        </View>
    )
}