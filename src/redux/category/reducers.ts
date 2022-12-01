import * as CONST from './constants'

export interface initStateModel {
    arrayCategory: Array<Object>,
    message: string,
}

const initState: initStateModel = {
    arrayCategory: undefined,
    message: undefined,
};

const CategoryReducer = (state: initStateModel = initState, action: ActionModel) => {
    switch (action.type) {
        // Create
        case CONST.ADD_CATEGORY_START:
            return {
                ...state,
            }
        case CONST.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                arrayCategory: action.payload
            }
        case CONST.ADD_CATEGORY_FAILURE:
            return {
                ...state,
                message: action.payload
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
            return {
                ...state,
                arrayCategory: action.payload
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
            return {
                ...state,
                arrayCategory: action.payload
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