import {View,Text,Button,StyleSheet} from 'react-native'
import { router } from 'expo-router'

export default function Contact(){

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
            height:80,
            width:150,
            borderRadius:50,
            padding:20,
            margin:'auto'
    }
        })
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hii from Contact Page</Text>
            <View style={styles.button}>
                <Button title="Loader" onPress={()=>router.push('/')}/>
            </View>    
        </View>
    )
}