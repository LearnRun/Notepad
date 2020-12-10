// SaveButton.js
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SaveButton = () => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>Alert.alert("SAVE")}
        >
            <Icon name='save' size={35} color='white'/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:7,
        right: 9,
    }
})

export default SaveButton