// NoteTextInput.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    currNoteDescriptionSet, 
    currNoteTitleSet,
} from '../redux/reducer'
import {
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    View,
} from 'react-native';

const NoteTextInput = (props) => {

    const currNote = useSelector(state => state.currNote.noteContent)
    const prevNote = useSelector(state => state.prevNote.noteContent)
    const dispatch = useDispatch()
    const currNoteTitleSetFunc = title => dispatch(currNoteTitleSet(title))
    const currNoteDescriptionSetFunc = description => dispatch(currNoteDescriptionSet(description))

    return (
        <>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={[styles.textInput, styles.titleInput]}
                    placeholder='Type title here'
                    onChangeText={currNoteTitleSetFunc}
                    value={currNote.title}
                    autoFocus={currNote.mode == 'ADD' ? true : false}
                />
                <View height={10} />
                <View style={styles.descriptionFrame}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <KeyboardAvoidingView
                            flex={1}
                            behavior='height'
                        >
                            <TextInput
                                style={[styles.textInput, styles.descriptionInput]}
                                multiline={true}
                                numberOfLines={30}
                                placeholder='Type discription here'
                                onChangeText={currNoteDescriptionSetFunc}
                                value={currNote.description}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'lavender',
    },
    textInput: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleInput: {
        color: 'black',
        fontSize: 20,
        borderRadius: 5,
        borderColor: 'lightskyblue',
        borderWidth: 1,
        margin: 1,
    },
    descriptionFrame: {
        flex: 1,
        borderRadius: 5,
        borderColor: 'lightskyblue',
        borderWidth: 1,
        margin: 1,
        // borderWidth: StyleSheet.hairlineWidth,
        // margin: StyleSheet.hairlineWidth,
    },
    descriptionInput: {
        color: 'black',
        fontSize: 20,
        textAlignVertical: 'top',
    },
})

export default NoteTextInput