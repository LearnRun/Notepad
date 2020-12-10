// HomeScreen.js
import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    Button,
    View,
    Text,
} from 'react-native';
import AddButton from '../component/AddButton'

const HomeScreen = ({ navigation }) => {

    const onPressCustomAddButtonHandler = () => {
        navigation.navigate('WriteScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <AddButton onPressCustomAddButton={onPressCustomAddButtonHandler}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen