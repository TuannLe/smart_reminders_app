import * as CONST from './constants'
import { IResCategory } from './interfaces'
export interface initStateModel {
    arrayCategory: Array<IResCategory>,
    message: string,
}

const initState: initStateModel = {
    arrayCategory: undefined,
    message: '',
};

const CategoryReducer = (state: initStateModel = initState, action: ActionModel) => {
    switch (action.type) {
        // Create
        case CONST.ADD_CATEGORY_START:
            return {
                ...state,
            }
        case CONST.ADD_CATEGORY_SUCCESS:
            console.log("dataa", action.payload)
            const newArray = [...state.arrayCategory]
            newArray.push(action.payload)
            return {
                ...state,
                arrayCategory: newArray,
                message: 'Create category successfully'
            }
        case CONST.ADD_CATEGORY_FAILURE:
            return {
                ...state,
            }
        // Get
        case CONST.GET_CATEGORIES_START:
            return {
                ...state,
            }
        case CONST.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                arrayCategory: action.payload
            }
        case CONST.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                message: action.payload
            }
        // Update
        case CONST.UPDATE_CATEGORY_START:
            return {
                ...state,
            }
        case CONST.UPDATE_CATEGORY_SUCCESS:
            const updateArray = [...state.arrayCategory]
            updateArray.splice(updateArray.findIndex((item) => {
                return item.idCategory === action.payload.idCategory
            }), 1)
            updateArray.push(action.payload)
            return {
                ...state,
                arrayCategory: updateArray
            }
        case CONST.UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                message: action.payload
            }
        // Delete
        case CONST.DELETE_CATEGORY_START:
            return {
                ...state,
            }
        case CONST.DELETE_CATEGORY_SUCCESS:
            const removeArray = [...state.arrayCategory]
            removeArray.splice(removeArray.findIndex((item) => {
                return item.idCategory === action.payload.idCategory
            }), 1)
            return {
                ...state,
                arrayCategory: removeArray,
            }
        case CONST.DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default CategoryReducer;