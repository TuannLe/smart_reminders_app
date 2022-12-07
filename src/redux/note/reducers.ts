import * as CONST from './constants'
import { INote } from './interfaces'


export interface initStateModel {
    arrayNote: Array<INote>,
    message: string,
}

const initState: initStateModel = {
    arrayNote: undefined,
    message: '',
};

const reducer = (state: initStateModel = initState, action: ActionModel) => {
    switch (action.type) {
        // Add
        case CONST.ADD_NOTE_START:
            return {
                ...state,
            }
        case CONST.ADD_NOTE_SUCCESS:
            const createArray = [...state.arrayNote]
            createArray.push(action.payload)
            return {
                ...state,
                arrayNote: createArray
            }
        case CONST.ADD_NOTE_FAILURE:
            return {
                ...state,
            }
        // Get all
        case CONST.GET_NOTES_START:
            return {
                ...state,
            }
        case CONST.GET_NOTES_SUCCESS:
            return {
                ...state,
                arrayNote: action.payload
            }
        case CONST.GET_NOTES_FAILURE:
            return {
                ...state,
            }
        // Get by id
        case CONST.GET_NOTE_BY_ID_START:
            return {
                ...state,
            }
        case CONST.GET_NOTE_BY_ID_SUCCESS:
            return {
                ...state,
                arrayNote: action.payload
            }
        case CONST.GET_NOTE_BY_ID_FAILURE:
            return {
                ...state,
            }
        // Update
        case CONST.UPDATE_NOTE_START:
            return {
                ...state,
            }
        case CONST.UPDATE_NOTE_SUCCESS:
            return {
                ...state,
                arrayNote: action.payload
            }
        case CONST.UPDATE_NOTE_FAILURE:
            return {
                ...state,
            }
        // Delete
        case CONST.DELETE_NOTE_START:
            return {
                ...state,
            }
        case CONST.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                arrayNote: action.payload
            }
        case CONST.DELETE_NOTE_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer;