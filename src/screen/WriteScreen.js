// WriteScreen.js
import React, { useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    View,
    Text,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const WriteScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                placeholder='Type title here'
                value={title}
                mode='outlined'
                numberOfLines={1}
                onChangeText={setTitle}
                style={styles.titleText}
                autoFocus={false}
            />
            <KeyboardAvoidingView
                flex={1}
                behavior="height"
            >
                <TextInput
                    placeholder='Type discription here'
                    value={description}
                    onChangeText={setDescription}
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