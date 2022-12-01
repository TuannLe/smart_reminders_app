import { put, call, takeLatest } from "redux-saga/effects";

import * as CONST from "./constants";
import * as ACT from "./actions";
import * as INF from "./interfaces";
import * as APIS from '../../apis/authAPI'


function* signIn(action: any) {
    const payload: INF.ISignIn = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.signIn, payload)
        const data: INF.IResAuth = response.data
        if (response.status === 200) {
            yield put(ACT.signInSuccess(data))
        } else {
            yield put(ACT.signInFailure(data))
        }
    } catch (error) {
        yield put(ACT.signInFailure(error));
    }
}

function* signUp(action: any) {
    const payload: INF.ISignUp = action.payload
    try {
        const response: ResponseGenerator = yield call(APIS.signUP, payload)
        const data: INF.IResAuth = response.data
        if (response.status === 200) {
            yield put(ACT.signUpSuccess(data))
        } else {
            yield put(ACT.signUpFailure(data))
        }
    } catch (error) {
        yield put(ACT.signUpFailure(error));
    }
}

const AuthSaga = [
    takeLatest(CONST.SIGN_IN_START, signIn),
    takeLatest(CONST.SIGN_UP_START, signUp),
];

export default AuthSaga;