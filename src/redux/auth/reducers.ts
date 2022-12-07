import * as CONST from "./constants";
import * as INF from "./interfaces";

export interface initStateModel {
    currentUser: INF.IResAuth,
    messages: string,
}

const initState: initStateModel = {
    currentUser: {
        email: '',
        username: '',
        access_token: '',
    },
    messages: undefined,
};

const AuthReducer = (state: initStateModel = initState, action: ActionModel) => {
    switch (action.type) {
        case CONST.SIGN_IN_START:
            return {
                ...state,
            }
        case CONST.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case CONST.SIGN_UP_FAILURE:
            return {
                ...state,
            }
        case CONST.SIGN_UP_START:
            return {
                ...state,
            }
        case CONST.SIGN_UP_SUCCESS:
            console.log('data', action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        case CONST.SIGN_UP_FAILURE:
            return {
                ...state,
                messages: 'Register Failure'
            }
        case CONST.LOGOUT:
            return {
                ...state,
                currentUser: {
                    email: '',
                    username: '',
                    access_token: '',
                }
            }
        default:
            return state
    }
}

export default AuthReducer