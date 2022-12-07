import AXIOS from './index'
import { ISignIn, ISignUp } from '../redux/auth/interfaces'

const subdirectory = '/auth'

export const signIn = async (data: ISignIn) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/signin`, data)
        return res
    } catch (error) {
        return error
    }
}

export const signUp = async (data: ISignUp) => {
    try {
        const res = await AXIOS.post(`${subdirectory}/signup`, data)
        return res
    } catch (error) {
        return error
    }
}


