// SaveButton.js
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    addNote,
    cleanCurrNoteSet,
    deleteNote,
    prevNoteTitleSet,
    prevNoteDescriptionSet,
    currNoteModeSet,
    currNoteIdSet,
} from '../redux/reducer'
import {
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SaveButton = ({ navigation }) => {

    const notes = useSelector(state => state.notes)
    const currNote = useSelector(state => state.currNote.noteContent)
    const prevNote = useSelector(state => state.prevNote.noteContent)

    const dispatch = useDispatch()
    const addNoteFunc = noteContent => dispatch(addNote(noteContent))
    const deleteNoteFunc = id => dispatch(deleteNote(id))

    useEffect(()=>{
        if(notes.length > 0 && currNote.mode == 'EDIT_SAVED')
        {
            dispatch(currNoteIdSet(notes[0].id.toString()))
            console.log("notes[0].id ", notes[0].id.toString())
        }
    },[notes])

    return (
        <TouchableOpacity
            disabled={(((currNote.title === prevNote.title) && (currNote.description === prevNote.description)) ?
                (true) : (false))}
            style={styles.container}
            onPress={() => {
                currNote.mode == 'ADD' ? (addNoteFunc({ title: currNote.title, description: currNote.description }))
                    : (deleteNoteFunc(currNote.id), addNoteFunc({ title: currNote.title, description: currNote.description}))
                // cleanCurrNoteFunc(),
                dispatch(currNoteModeSet('EDIT_SAVED'))
                dispatch(prevNoteTitleSet(currNote.title)),
                dispatch(prevNoteDescriptionSet(currNote.description))
            }}
        >
            <Icon
                name='save'
                size={35}
                color={(((currNote.title === prevNote.title) && (currNote.description === prevNote.description)) ?
                    ('steelblue') : ('white'))}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 7,
        right: 9,
    }
})

export default SaveButton