import * as CONST from './constants'
import * as INF from './interfaces'

// Create note
export const createNoteStart = (payload: INF.ICreateNote) => {
    console.log('actions', payload)
    return {
        type: CONST.ADD_NOTE_START,
        payload
    }
}

export const createNoteSuccess = (payload: INF.INote) => {
    return {
        type: CONST.ADD_NOTE_SUCCESS,
        payload
    }
}

export const createNoteFailure = (error: any) => {
    return {
        type: CONST.ADD_NOTE_FAILURE,
        payload: error
    }
}

// Create quick note
export const createQuickNoteStart = (payload: INF.ICreateNote) => {
    console.log('actions', payload)
    return {
        type: CONST.ADD_NOTE_START,
        payload
    }
}

export const createQuickNoteSuccess = (payload: INF.INote) => {
    return {
        type: CONST.ADD_NOTE_SUCCESS,
        payload
    }
}

export const createQuickNoteFailure = (error: any) => {
    return {
        type: CONST.ADD_NOTE_FAILURE,
        payload: error
    }
}

// Get all
export const getNoteStart = (payload: string) => {
    return {
        type: CONST.GET_NOTES_START,
        payload
    }
}

export const getNoteSuccess = (payload: INF.INote) => {
    return {
        type: CONST.GET_NOTES_SUCCESS,
        payload
    }
}

export const getNoteFailure = (error: any) => {
    return {
        type: CONST.GET_NOTES_FAILURE,
        payload: error
    }
}
// Get by id
export const getNoteByIdStart = (payload: INF.INote) => {
    return {
        type: CONST.GET_NOTE_BY_ID_START,
        payload
    }
}

export const getNoteByIdSuccess = (payload: INF.INote) => {
    return {
        type: CONST.GET_NOTE_BY_ID_SUCCESS,
        payload
    }
}

export const getNoteByIdFailure = (error: any) => {
    return {
        type: CONST.GET_NOTE_BY_ID_FAILURE,
        payload: error
    }
}

// Update
export const updateNoteStart = (payload: INF.IUpdateNote) => {
    return {
        type: CONST.UPDATE_NOTE_START,
        payload
    }
}

export const updateNoteSuccess = (payload: INF.IUpdateNote) => {
    return {
        type: CONST.UPDATE_NOTE_SUCCESS,
        payload
    }
}

export const updateNoteFailure = (error: any) => {
    return {
        type: CONST.UPDATE_NOTE_FAILURE,
        payload: error
    }
}

// Delete
export const deleteNoteStart = (payload: INF.IDeleteNote) => {
    return {
        type: CONST.ADD_NOTE_START,
        payload
    }
}

export const deleteNoteSuccess = (payload: INF.INote) => {
    return {
        type: CONST.ADD_NOTE_START,
        payload
    }
}

export const deleteNoteFailure = (error: any) => {
    return {
        type: CONST.ADD_NOTE_START,
        payload: error
    }
}