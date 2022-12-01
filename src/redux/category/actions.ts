import * as CONST from './constants'
import * as INF from './interfaces'

export const createCategoryStart = (payload: INF.ICreateCategory) => {
    return {
        type: CONST.ADD_CATEGORY_START,
        payload
    }
}

export const createCategorySuccess = (payload: INF.ICreateCategory) => {
    return {
        type: CONST.ADD_CATEGORY_SUCCESS,
        payload
    }
}

export const createCategoryFailure = (error: any) => {
    return {
        type: CONST.ADD_CATEGORY_FAILURE,
        payload: error
    }
}

export const getCategoryStart = (payload: INF.ICategory) => {
    return {
        type: CONST.GET_CATEGORIES_START,
        payload
    }
}

export const getCategorySuccess = (payload: INF.ICategory) => {
    return {
        type: CONST.GET_CATEGORIES_SUCCESS,
        payload
    }
}

export const getCategoryFailure = (error: any) => {
    return {
        type: CONST.GET_CATEGORIES_FAILURE,
        payload: error
    }
}

export const updateCategoryStart = (payload: INF.IUpdateCategory) => {
    return {
        type: CONST.UPDATE_CATEGORY_START,
        payload
    }
}

export const updateCategorySuccess = (payload: INF.IUpdateCategory) => {
    return {
        type: CONST.UPDATE_CATEGORY_SUCCESS,
        payload
    }
}

export const updateCategoryFailure = (error: any) => {
    return {
        type: CONST.UPDATE_CATEGORY_FAILURE,
        payload: error
    }
}

export const deleteCategoryStart = (payload: INF.IDeleteCategory) => {
    return {
        type: CONST.DELETE_CATEGORY_START,
        payload
    }
}

export const deleteCategorySuccess = (payload: INF.IDeleteCategory) => {
    return {
        type: CONST.DELETE_CATEGORY_SUCCESS,
        payload
    }
}

export const deleteCategoryFailure = (error: any) => {
    return {
        type: CONST.DELETE_CATEGORY_FAILURE,
        payload: error
    }
}