import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },
    input: {
        height: 40,
        padding: 5,
        marginHorizontal: 8,
        borderWidth: 1,
    },
    text: {
      padding: 10,
      fontSize: 42
    }
  })
  return (
    <View style={styles.container}>
      <TextInput placeholder='Type here...'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={styles.input} />
      <Text style={styles.text}> {text.split(' ').map(word => word && '😅').join(' ')} </Text>
    </View>
  )
}