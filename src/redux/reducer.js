// reducer.js
import { combineReducers } from 'redux';

// Action Types 정의
export const ADD_NOTE = 'ADD_NOTE'

// Action Creators 함수
export function addNote(note) {
    return {
        type: ADD_NOTE,
        id: Math.random(),
        noteContent: note
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
        default:
            return state
    }
}

// Action Types 정의
export const CURR_NOTE_TITLE = 'CURR_NOTE_TITLE'
export const CURR_NOTE_DESCRIPTION = 'CURR_NOTE_DESCRIPTION'
export const CLEAN_CURR_NOTE_CONTENT = 'CLEAN_CURR_NOTE_CONTENT'

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

export function cleanCurrNoteSet() {
    return {
        type: CLEAN_CURR_NOTE_CONTENT,
    }
}

// Init state
const curr_note_content_initialState = {
    noteContent: {
        title: '',
        description: ''
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
        case CLEAN_CURR_NOTE_CONTENT:
            return {
                ...state,   // copy the state (level 0)
                noteContent: {
                    ...state.noteContent,   // copy level 1
                    title: '',
                    description: ''
                }
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    notes: notesReducer,
    currNote: currNoteReducer
})

export default rootReducer
