import { View, Text, TextInput, StyleSheet,Button} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router'

export default function Home() {
  const [text, setText] = useState('');

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor:'black'
    },
    input: {
        height: 40,
        padding: 5,
        marginHorizontal: 8,
        borderWidth: 1,
        margin:'auto',
        backgroundColor:'white'
    },
    text: {
      padding: 10,
      fontSize: 42,
      color:'white'
    },
    button:{
      display:'flex',
      flexDirection:'row',
      gap:10,
      height:80,
      width:150,
      borderRadius:50,
      padding:20,
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
        <Button title="Loader" onPress={()=>router.push('/loader')}/>
        <Button title="Contact" onPress={()=>router.push('/contact')}/>
        <Button title="Setting" onPress={()=>router.push('/settings')}/>
      </View>
    </View>
      
  )
}