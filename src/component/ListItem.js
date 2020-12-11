// ListItem.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/reducer'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

const ListItem = (props) => {

    const dispatch = useDispatch()
    const deleteNoteFunc = (deleteId) => dispatch(deleteNote(deleteId))

    return (
        <>
            <TouchableOpacity onLongPress={()=>{deleteNoteFunc(props.id)}}>
                <View style={styles.listContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} numberOfLines={1}>{props.title}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText} numberOfLines={1}>{props.description}</Text>
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