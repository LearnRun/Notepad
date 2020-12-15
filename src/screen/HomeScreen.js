// HomeScreen.js
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cleanCurrNoteSet, deleteNote, currNoteModeSet } from '../redux/reducer'
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    Alert,
    View,
    Button,
    BackHandler,
    Text,
} from 'react-native';
import AddButton from '../component/AddButton'
import ListItem from '../component/ListItem'

const HomeScreen = ({ navigation }) => {

    const currNoteObj = useSelector(state => state.notes)
    const currNoteMode = useSelector(state => state.currNote.noteContent.mode)
    const dispatch = useDispatch()


    // Call back function when back button is pressed
    const backActionHandler = () => {
        dispatch(cleanCurrNoteSet())
        BackHandler.exitApp()
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

    const onPressEditHandler = () => {
        navigation.navigate('WriteScreen')
    }

    const onPressAddHandler = () => {
        navigation.navigate('WriteScreen')
        dispatch(cleanCurrNoteSet())
        dispatch(currNoteModeSet('ADD'))
    }

    const onLongPressHandler = (id) => {
        dispatch(deleteNote(id))
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                // console.log('notes.slice(0,1).id ', currNoteObj[0].id),
                // console.log('currNoteObj ', currNoteObj),
                // console.log('currNoteMode ', currNoteMode)
            }
            <FlatList
                data={currNoteObj}
                renderItem={({ item }) => (
                    <ListItem
                        note={item}
                        onPressListItem={onPressEditHandler}
                        onLongPressListItem={onLongPressHandler}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
            <AddButton onPressCustomAddButton={onPressAddHandler} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
})

export default HomeScreen