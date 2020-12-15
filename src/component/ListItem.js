// ListItem.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { 
    currNoteDescriptionSet, 
    currNoteTitleSet, 
    currNoteIdSet, 
    currNoteModeSet, 
    prevNoteTitleSet, 
    prevNoteDescriptionSet 
} from '../redux/reducer'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

const ListItem = ({note,onPressListItem,onLongPressListItem}) => {

    const dispatch = useDispatch()

    const onLongPressListItemHandler = () => {
        onLongPressListItem(note.id)
    }

    const editSetFunc = () => {
        dispatch(currNoteModeSet('EDIT'))
        dispatch(currNoteTitleSet(note.noteContent.title))
        dispatch(currNoteDescriptionSet(note.noteContent.description))
        dispatch(currNoteIdSet(note.id))

        dispatch(prevNoteTitleSet(note.noteContent.title))
        dispatch(prevNoteDescriptionSet(note.noteContent.description))
        onPressListItem()
    }

    return (
        <>
            <TouchableOpacity 
                onPress={editSetFunc}
                onLongPress={onLongPressListItemHandler}
            >
                <View style={styles.listContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} numberOfLines={1}>{note.noteContent.title}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText} numberOfLines={1}>{note.noteContent.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    titleText: {
        fontSize: 23,
    },
    descriptionText: {
        fontSize: 15,
        color: 'gray',
    }
})

export default ListItem