// WriteScreen.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { currNoteDescriptionSet, currNoteTitleSet } from '../redux/reducer'
import {
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    View,
    Text,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const WriteScreen = ({ navigation }) => {

    const currNote = useSelector(state => state.currNote.noteContent)
    const currNoteObj = useSelector(state => state.notes)
    
    const dispatch = useDispatch()
    const currNoteTitleSetFunc = title => dispatch(currNoteTitleSet(title))
    const currNoteDescriptionSetFunc = description => dispatch(currNoteDescriptionSet(description))

    return (
        <SafeAreaView style={styles.container}>
            {
                console.log('currNote ',currNote),
                console.log('currNoteObj ', currNoteObj)
            }
            <TextInput
                placeholder='Type title here'
                value={currNote.title}
                mode='outlined'
                numberOfLines={1}
                onChangeText={currNoteTitleSetFunc}
                style={styles.titleText}
                autoFocus={false}
            />
            <KeyboardAvoidingView
                flex={1}
                behavior="height"
            >
                <TextInput
                    placeholder='Type discription here'
                    value={currNote.description}
                    onChangeText={currNoteDescriptionSetFunc}
                    mode='outlined'
                    multiline={true}
                    numberOfLines={50}
                    scrollEnabled={true}
                    style={styles.descriptionText}
                    autoFocus={false}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'lavender'
    },
    titleText: {
        fontSize: 25,
        backgroundColor: 'lavender',
    },
    descriptionText: {
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 22,
        backgroundColor: 'lavender',
    }
})

export default WriteScreen