import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from "react-native";


function NoteInput(props){
    const [enteredNotesText, setEnteredNoteText] = useState('');

    function noteInputHandler(enteredText){
        setEnteredNoteText(enteredText);
    }

    function addNoteHandler(){
       props.onAddNote(enteredNotesText);
       setEnteredNoteText('');
    }

    return(      
        <View style = {styles.inputContainer}>
        <TextInput
            placeholder='Add Note...' 
            placeholderTextColor={'#171717'}
            flex = '0.7'
            style = {styles.TextInput}
            onChangeText={noteInputHandler}
            value={enteredNotesText}
        />
        <Button
            title="+"
            onPress={addNoteHandler}
        />
        </View>
    );

};

export default NoteInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderColor: 'grey',
        textAlign: 'center',
    },
    TextInput:{
        borderWidth: 1,
        padding: 10, 
        paddingLeft: 20, 
        borderColor: 'white', 
        backgroundColor:'grey',
        borderRadius: '12', 
        margin: 5, 
        height:35
    }
});