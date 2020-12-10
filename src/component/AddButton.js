// AddButton.js
import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

const AddButton = (props) => {

    const onPressCustomAddButtonHandler = () => {
        props.onPressCustomAddButton()
    }

    return (
        <>
            <TouchableOpacity
                style={styles.addButton}
                onPress={onPressCustomAddButtonHandler}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        zIndex: 1,  // priority
        backgroundColor: 'deepskyblue',
        bottom: 80,
        right: 25,
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8, // shadow
    },
    addButtonText: {
        paddingBottom: 5,
        color: 'white',
        fontSize: 50,
    },
})

export default AddButton