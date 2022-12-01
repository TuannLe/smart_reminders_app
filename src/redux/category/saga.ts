import { put, call, takeLatest } from "redux-saga/effects";

import * as CONST from "./constants";
import * as ACT from "./actions";
import * as INF from "./interfaces";
import * as APIS from '../../apis/categoryAPI'

function* create(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.create, {
            data: payload.data,
            token: payload.token
        })
        const data: INF.ICategory = response.data
        if (response.status === 200) {
            yield put(ACT.createCategorySuccess(data))
        } else {
            yield put(ACT.createCategoryFailure(data))
        }
    } catch (error) {
        yield put(ACT.createCategoryFailure(error))
    }
}

function* get(action: any) {
    const token = action.payload.token
    try {
        const response: ResponseGenerator = yield call(APIS.get, token)
        const data: INF.ICategory = response.data
        if (response.status === 200) {
            yield put(ACT.getCategorySuccess(data))
        } else {
            yield put(ACT.getCategoryFailure(data))
        }
    } catch (error) {
        yield put(ACT.getCategoryFailure(error))
    }
}

function* update(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.update, payload)
        const data: INF.IUpdateCategory = response.data
        if (response.status === 200) {
            yield put(ACT.updateCategorySuccess(data))
        } else {
            yield put(ACT.updateCategoryFailure(data))
        }
    } catch (error) {
        yield put(ACT.updateCategoryFailure(error))
    }
}

function* remove(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.remove, payload)
        const data: INF.IDeleteCategory = response.data
        if (response.status === 200) {
            yield put(ACT.deleteCategorySuccess(data))
        } else {
            yield put(ACT.deleteCategoryFailure(data))
        }
    } catch (error) {
        yield put(ACT.deleteCategoryFailure(error))
    }
}

const CategorySaga = [
    takeLatest(CONST.ADD_CATEGORY_START, create),
    takeLatest(CONST.GET_CATEGORIES_START, get),
    takeLatest(CONST.UPDATE_CATEGORY_START, update),
    takeLatest(CONST.DELETE_CATEGORY_START, remove)
];

export default CategorySaga;