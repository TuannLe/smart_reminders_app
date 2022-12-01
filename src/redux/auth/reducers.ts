import * as CONST from "./constants";
import * as ACT from "./actions";
import * as INF from "./interfaces";

export interface initStateModel {
    currentUser: object,
    messages: string,
}

const initState: initStateModel = {
    currentUser: undefined,
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
                messages: 'Loi'
            }
        case CONST.SIGN_UP_START:
            return {
                ...state,
            }
        case CONST.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case CONST.SIGN_UP_FAILURE:
            return {
                ...state,
                messages: 'Loi roi'
            }
        default:
            return state
    }
}

export default AuthReducer