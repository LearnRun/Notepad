// reducer.js
import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// Action Types 정의
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

// Action Creators 함수
export function addNote(note) {

    return {
        type: ADD_NOTE,
        id: uuidv4(),
        noteContent: note
    }
}

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        removeNoteId: id
    }
}

// Init state
const note_obj_initialState = []

// Reducer 함수 정의

const notesReducer = (state = note_obj_initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [
                {
                    id: action.id,
                    noteContent: action.noteContent
                },
                ...state
            ]
        case DELETE_NOTE:
            const newArray = state.filter(noteObj => {

                if (noteObj.id === action.removeNoteId) {
                    return false;
                }
                return true
            })
            return newArray
        default:
            return state
    }
}

// Action Types 정의
export const CURR_NOTE_TITLE = 'CURR_NOTE_TITLE'
export const CURR_NOTE_DESCRIPTION = 'CURR_NOTE_DESCRIPTION'
export const CURR_NOTE_ID = 'CURR_NOTE_ID'
export const CLEAN_CURR_NOTE_CONTENT = 'CLEAN_CURR_NOTE_CONTENT'
export const CURR_MODE = 'CURR_MODE'

// Action Creators 함수
export function currNoteTitleSet(title) {
    return {
        type: CURR_NOTE_TITLE,
        noteTitle: title
    }
}

export function currNoteDescriptionSet(description) {
    return {
        type: CURR_NOTE_DESCRIPTION,
        noteDescription: description
    }
}

export function currNoteIdSet(noteId) {
    return {
        type: CURR_NOTE_ID,
        id: noteId
    }
}

export function cleanCurrNoteSet() {
    return {
        type: CLEAN_CURR_NOTE_CONTENT,
    }
}

export function currNoteModeSet(currMode) {
    return {
        type: CURR_MODE,
        mode: currMode,
    }
}

// Init state
const curr_note_content_initialState = {
    noteContent: {
        title: '',
        description: '',
        id: '',
        mode: 'NONE'
    }
}

// Reducer 함수 정의
const currNoteReducer = (state = curr_note_content_initialState, action) => {
    switch (action.type) {
        case CURR_NOTE_TITLE:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    title: action.noteTitle,
                }
            }
        case CURR_NOTE_DESCRIPTION:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    description: action.noteDescription
                }
            }
        case CURR_NOTE_ID:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    id: action.id
                }
            }
        case CURR_MODE:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    mode: action.mode
                }
            }
        case CLEAN_CURR_NOTE_CONTENT:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    title: '',
                    description: '',
                    id: '',
                    mode: 'NONE'
                }
            }
        default:
            return state
    }
}

// Action Types 정의
export const PREV_NOTE_TITLE = 'PREV_NOTE_TITLE'
export const PREV_NOTE_DESCRIPTION = 'PREV_NOTE_DESCRIPTION'

// Action Creators 함수
export function prevNoteTitleSet(title) {
    return {
        type: PREV_NOTE_TITLE,
        noteTitle: title
    }
}

export function prevNoteDescriptionSet(description) {
    return {
        type: PREV_NOTE_DESCRIPTION,
        noteDescription: description
    }
}

// Init state
const prev_note_content_initialState = {
    noteContent: {
        title: '',
        description: '',
    }
}

// Reducer 함수 정의
const prevNoteReducer = (state = prev_note_content_initialState, action) => {
    switch (action.type) {
        case PREV_NOTE_TITLE:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    title: action.noteTitle,
                }
            }
        case PREV_NOTE_DESCRIPTION:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    description: action.noteDescription
                }
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    notes: notesReducer,
    currNote: currNoteReducer,
    prevNote: prevNoteReducer
})

export default rootReducer
