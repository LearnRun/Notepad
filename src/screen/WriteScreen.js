// WriteScreen.js
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    StyleSheet,
    SafeAreaView,
    BackHandler,
} from 'react-native';
import {
    addNote,
    deleteNote,
    currNoteModeSet,
} from '../redux/reducer'
import NoteTextInput from '../component/NoteTextInput'
import CustomAlertComponent from '../component/CustomAlertComponent'

const WriteScreen = ({ navigation }) => {

    const [exitAlarmFlag, setExitAlarmFlag] = useState(false)
    const notes = useSelector(state => state.notes)
    const currNote = useSelector(state => state.currNote.noteContent)
    const prevNote = useSelector(state => state.prevNote.noteContent)

    const dispatch = useDispatch();
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
    const backActionHandler = () => {
        ((currNote.title == prevNote.title) && (currNote.description == prevNote.description))
            ? (setExitAlarmFlag(false), navigation.goBack()) 
            : setExitAlarmFlag(true)
        return true;
    };

    useEffect(() => {
        // Add event listener for hardware back button press on Android
        BackHandler.addEventListener("hardwareBackPress", backActionHandler)
        return () => {
            // clear/remove event listener
            BackHandler.removeEventListener("hardwareBackPress", backActionHandler)
        }
    }, [backActionHandler]);

    return (
        <SafeAreaView style={styles.container}>
            {
                // console.log('currNote ', currNote),
                // console.log('prevNote ', prevNote)
            }
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
            <NoteTextInput navigation={navigation} />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender'
    },

})

export default WriteScreen