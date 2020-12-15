// BackButton.js
import React , { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, currNoteModeSet, deleteNote } from '../redux/reducer'
import {
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomAlertComponent from '../component/CustomAlertComponent'

const BackButton = ({ navigation }) => {

    const [exitAlarmFlag, setExitAlarmFlag] = useState(false)
    const currNote = useSelector(state => state.currNote.noteContent)
    const prevNote = useSelector(state => state.prevNote.noteContent)
    const dispatch = useDispatch()
    const addNoteFunc = noteContent => dispatch(addNote(noteContent))
    const deleteNoteFunc = id => dispatch(deleteNote(id))
    const currNoteModeSetFunc = mode => dispatch(currNoteModeSet(mode))

    const onPressAlertPositiveButton = () => {
        currNote.mode == 'ADD' ? (addNoteFunc({ title: currNote.title, description: currNote.description }), currNoteModeSetFunc('NONE'))
            : (deleteNoteFunc(currNote.id), addNoteFunc({ title: currNote.title, description: currNote.description }))
            
        setExitAlarmFlag(false)
        navigation.goBack()
    }

    const onPressAlertNegativeButton = () => {
        setExitAlarmFlag(false)
        navigation.goBack()
    }

    // Call back function when back button is pressed
    const onPressHandler = () => {
        ((currNote.title == prevNote.title) && (currNote.description == prevNote.description))
            ? (setExitAlarmFlag(false), navigation.goBack()) 
            : setExitAlarmFlag(true)
    };

    return (
        <>
            <CustomAlertComponent
                displayAlert={true}
                displayAlertIcon={true}
                alertTitleText={'Save'}
                alertMessageText={'This is a goBack button.' + '\n' + 'Do you want to save this note?'}
                displayPositiveButton={true}
                positiveButtonText={'OK'}
                displayNegativeButton={true}
                negativeButtonText={'CANCEL'}
                onPressPositiveButton={onPressAlertPositiveButton}
                onPressNegativeButton={onPressAlertNegativeButton}
                exitAlarmOnOffFlag={exitAlarmFlag}
            />
            <TouchableOpacity
                style={styles.container}
                onPress={onPressHandler}
            >
                <Icon name='back' size={35} color='white' />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 7,
        left: 9,
    }
})

export default BackButton