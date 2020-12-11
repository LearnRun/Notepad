// HomeScreen.js
import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    Alert,
    View,
    Text,
} from 'react-native';
import AddButton from '../component/AddButton'
import { List } from 'react-native-paper'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {

    const currNoteObj = useSelector(state => state.notes)

    const onPressCustomAddButtonHandler = () => {
        navigation.navigate('WriteScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={currNoteObj}
                renderItem={({ item }) => (
                    <List.Item
                        onPress={()=>{}}
                        title={item.noteContent.title}
                        description={item.noteContent.description}
                        titleNumberOfLines={1}
                        descriptionNumberOfLines={1}
                        titleStyle={styles.listTitle}
                        descriptionStyle={styles.listDescription}
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
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    listTitle: {
        fontSize: 23,
    },
})

export default HomeScreen