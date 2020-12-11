// HomeScreen.js
import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Button,
    Alert,
    View,
    Text,
} from 'react-native';
import AddButton from '../component/AddButton'
import ListItem from '../component/ListItem'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {

    const currNoteObj = useSelector(state => state.notes)

    const onPressCustomAddButtonHandler = () => {
        navigation.navigate('WriteScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                console.log('currNoteObj ', currNoteObj)
            }
            <FlatList
                data={currNoteObj}
                renderItem={({ item }) => (
                    <ListItem 
                        title={item.noteContent.title} 
                        description={item.noteContent.description}
                        id={item.id}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
            <AddButton onPressCustomAddButton={onPressCustomAddButtonHandler} />
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