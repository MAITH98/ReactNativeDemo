import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";

function NoteItem(props) { 

  return (
    <Pressable 
    onPress={props.onDeleteItem.bind(this, props.id)}
    style={({pressed}) => pressed && styles.deletedItem}
    >
      <View style={styles.noteItem}>
        <Text style={styles.noteText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default NoteItem;

const styles = StyleSheet.create({
    noteItem: {
        width: 300,
        padding: 10,
        margin: 8,
        backgroundColor: '#0D47A1',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:15,
        fontWeight: '500',
        borderRadius: 12
    },
    noteText: {
        color: 'white',
    },
    pressedItem:{
      textDecorationLine: 'line-through',
      textDecorationColor: 'red',
    },
    deletedItem:{
      opacity: 0.5,
    }
});


