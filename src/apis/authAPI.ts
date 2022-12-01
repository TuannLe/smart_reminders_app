import AXIOS from './index'
import { ISignIn, ISignUp } from '../redux/auth/interfaces'

const subdirectory = '/auth'

export const signIn = async (data: ISignIn) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/login`, data)
        return res
    } catch (error) {
        return error
    }
}

export const signUP = async (data: ISignUp) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/register`, data)
        return res
    } catch (error) {
        return error
    }
}


