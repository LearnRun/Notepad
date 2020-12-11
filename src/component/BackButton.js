// BackButton.js
import React from 'react'
import { useDispatch } from 'react-redux'
import { cleanCurrNoteSet } from '../redux/reducer'
import {
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BackButton = ({navigation}) => {

    const dispatch = useDispatch()
    const cleanCurrNoteFunc = () => dispatch(cleanCurrNoteSet())

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{navigation.goBack(), cleanCurrNoteFunc()}}
        >
            <Icon name='back' size={35} color='white'/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding:7,
        left: 9,
    }
})

export default BackButton