import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
import NoteItem from './components/noteItem';
import NoteInput from './components/noteInput';

function TodoScreen({navigation}){

        const [Notes, setNotes] = useState([]);
      
        function addNoteHandler(enteredNotesText){
          setNotes(currentNotes => [
            ...currentNotes, 
            {
              text: enteredNotesText,
              id: Math.random().toString()
            },
          ]);
        }
      
        function deleteGoalHandler(id){
          setNotes(currentNotes =>{
            return currentNotes.filter((note) => note.id !== id);
          });
        }
      
      
      const styles = StyleSheet.create({
      
        appcontainer: {
          flex: 1,
          backgroundColor: '#160653',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        notesContainer:{
          flex: 7,
          height: 400,
          flexDirection: 'column',
          marginVertical: 10
        },
      
      });
      
    return(

        <View style={styles.appcontainer}>
            <View >
                <Image
                    style={{
                        marginTop: 50,
                        alignSelf: 'center',
                        width: 200,
                        height: 200,
                    }}
                 source={require('../../../../assets/todo.png')}
                />
                <View style={{
                    borderRadius: 30,
                    flexDirection: 'row',
                    marginBottom: 20,
                    }}>
                    <Text style={{color:'white',fontSize:25,fontWeight:'bold',fontFamily:'Quicksand', marginHorizontal: 15}}>Track your daily tasks</Text>
                </View>
            </View>
    
            <NoteInput onAddNote={addNoteHandler}/>
            
            <View style={styles.notesContainer}>
                <FlatList
                    data={Notes} 
                    renderItem={(itemData) => {
                    return(
                        <NoteItem 
                        text={itemData.item.text} 
                        id={itemData.item.id}
                        onDeleteItem={deleteGoalHandler}/>
                    );
                    }} 
                    keyExtractor={(item,index) => {
                    return item.id;
                    }}
                    alwaysBounceVertical ={false}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default TodoScreen;

const styles = StyleSheet.create({

    appcontainer: {
      flex: 1,
      backgroundColor: '#160653',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    notesContainer:{
      flex: 7,
      height: 400,
      flexDirection: 'column',
      marginVertical: 10
    },
  
  });