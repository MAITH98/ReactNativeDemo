import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen({navigation}){

    const [inputValue, setInputValue] = useState('');

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            
            {/* Only render the QRCode when there is a valid value to display */}
            {inputValue ? (
                <QRCode value={inputValue}/>
            ) : (
                <Text style={{ fontSize: 18, color: 'gray' }}>
                    Please enter text to generate a QR code
                </Text>
            )}
            
            <Text 
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 23, fontWeight: 'bold', marginVertical: 10 }}
            >
                Generate New Code
            </Text>
            
            <TextInput 
                style={styles.input}
                placeholder="Enter your text"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        width: '80%',
    },
});
