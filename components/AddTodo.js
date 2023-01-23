import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Pressable } from 'react-native';

export default function AddTodo(props) {
    const [ text, setText ] = useState('')
    
    const inputHandler = (inputVal) => {
        setText(inputVal)
    }

    return (
        <View>
            <TextInput
                onChangeText={(val) => inputHandler(val)}
                style={styles.input}
                placeholder='New todo'
            />
            <Pressable style={styles.button} onPress={() => props.addHandler(text)}>
                <Text style={styles.btnText}>Add</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 18,
        borderBottomWidth: 1,
        padding: 8,
        borderRadius: 4
    },
    button: {
        padding: 8,
        backgroundColor: 'coral',
        marginBottom: 18
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})  