import * as CONSTANTS from './constants'
import * as INF from './interfaces'

export const signInStart = (payload: INF.ISignIn) => {
    return {
        type: CONSTANTS.SIGN_IN_START,
        payload
    }
}

export const signInSuccess = (payload: INF.IResAuth) => {
    return {
        type: CONSTANTS.SIGN_IN_SUCCESS,
        payload
    }
}

export const signInFailure = (error: any) => {
    return {
        type: CONSTANTS.SIGN_IN_FAILURE,
        payload: error
    }
}

export const signUpStart = (payload: INF.ISignUp) => {
    return {
        type: CONSTANTS.SIGN_UP_START,
        payload
    }
}

export const signUpSuccess = (payload: INF.IResAuth) => {
    return {
        type: CONSTANTS.SIGN_UP_SUCCESS,
        payload
    }
}

export const signUpFailure = (error: any) => {
    return {
        type: CONSTANTS.SIGN_UP_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: CONSTANTS.LOGOUT,
    }
}