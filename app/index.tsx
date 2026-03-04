import { View, Text, TextInput, StyleSheet,Button} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router'

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
        margin:'auto'
    },
    text: {
      padding: 10,
      fontSize: 42
    },
    button:{
      height:60,
      width:150,
      borderRadius:50,
      padding:10,
      margin:'auto'
    }
  })
  return (
    <View style={styles.container}>
      <TextInput placeholder='Type here...'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={styles.input} />
      <Text style={styles.text}> {text.split(' ').map(word => word && '😅').join(' ')} </Text>
      <View style={styles.button}>
        <Button title="Go to loader" onPress={()=>router.push('/loader')}></Button>
      </View>
    </View>
      
  )
}