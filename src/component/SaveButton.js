// SaveButton.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNote, cleanCurrNoteSet } from '../redux/reducer'
import {
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SaveButton = ({navigation}) => {

    const currNote = useSelector(state => state.currNote.noteContent)
    
    const dispatch = useDispatch()
    const addNoteFunc = noteContent => dispatch(addNote(noteContent))
    const cleanCurrNoteFunc = () => dispatch(cleanCurrNoteSet())

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{addNoteFunc(currNote), cleanCurrNoteFunc(), navigation.goBack()}}
        >
            <Icon name='save' size={35} color='white'/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:7,
        right: 9,
    }
})

export default SaveButton