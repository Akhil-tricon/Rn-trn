import {View,Text,StyleSheet, Pressable} from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { router } from 'expo-router'

export default function Icons(){

    const styles=StyleSheet.create({
        container:{
            backgroundColor:'black',
            height:600,
            width:'100%',
            },
        text:{
            fontSize:20,
            color:'white'
        },
        button:{
            height:50,
            width:50,
            borderRadius:50,
            padding:10,
            backgroundColor:'#52f55a',
            color:'black',
            marginBottom:10,
            marginTop:10
    }
        })
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>IconPage</Text>
            <Pressable style={styles.button} onPress={() => router.push('/')}>
                <Ionicons title="Back to home"name="home" size={30} color="black" />
            </Pressable>
        </View>
        
    )


}