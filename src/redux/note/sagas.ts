import { put, call, takeLatest, take } from "redux-saga/effects";

import * as CONST from "./constants";
import * as ACT from "./actions";
import * as INF from "./interfaces";
import * as APIS from '../../apis/noteAPI'

function* create(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.create, payload)
        const data: INF.INote = response.data
        if (response.status === 200) {
            yield put(ACT.createNoteSuccess(data))
        } else {
            yield put(ACT.createNoteFailure(data))
        }
    } catch (error) {
        yield put(ACT.createNoteFailure(error))
    }
}

function* getAll(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.getAll, payload)
        const data: INF.INote = response.data
        if (response.status === 200) {
            yield put(ACT.getNoteSuccess(data))
        } else {
            yield put(ACT.getNoteFailure(data))
        }
    } catch (error) {
        yield put(ACT.getNoteFailure(error))
    }
}

function* getById(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.getById, payload)
        const data: INF.INote = response.data
        if (response.status === 200) {
            yield put(ACT.getNoteByIdSuccess(data))
        } else {
            yield put(ACT.getNoteByIdFailure(data))
        }
    } catch (error) {
        yield put(ACT.getNoteByIdFailure(error))
    }
}

function* update(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.update, payload)
        const data: INF.IUpdateNote = response.data
        if (response.status === 200) {
            yield put(ACT.updateNoteSuccess(data))
        } else {
            yield put(ACT.updateNoteFailure(data))
        }
    } catch (error) {
        yield put(ACT.updateNoteFailure(error))
    }
}

function* remove(action: any) {
    const payload = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.remove, payload)
        const data: INF.INote = response.data
        if (response.status === 200) {
            yield put(ACT.deleteNoteSuccess(data))
        } else {
            yield put(ACT.deleteNoteFailure(data))
        }
    } catch (error) {
        yield put(ACT.deleteNoteFailure(error))
    }
}

const CategorySaga = [
    takeLatest(CONST.ADD_NOTE_START, create),
    takeLatest(CONST.GET_NOTES_START, getAll),
    takeLatest(CONST.GET_NOTE_BY_ID_START, getById),
    takeLatest(CONST.UPDATE_NOTE_START, update),
    takeLatest(CONST.DELETE_NOTE_START, remove)

];

export default CategorySaga;