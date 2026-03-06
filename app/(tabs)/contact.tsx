import {View,Text,Pressable,StyleSheet,SectionList} from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";

const data=[
        {
            name:'Nandhini',
            data:['nan@gmail.com','0123456789']
        },
        {
            name:'Kavi',
            data:['kavi@gmail.com','9876543210']
        }
    ];

export default function Contact(){
    const styles=StyleSheet.create({
        container:{
            backgroundColor:'black',
            height:600,
            width:'100%',
            },
        text:{
            fontSize:20,
            color:'white',
            textAlign:'center'
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
        },
        header:{
            fontSize:24,
            color:'#31c531',
            fontWeight:'bold',
            backgroundColor:'#434b44',
            textAlign:'center',
            padding:5,
            marginBottom:10,
            marginTop:10
        },

        })
    return(
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => router.push('/')}>
                <Ionicons title="Back to home"name="home" size={30} color="black" />
            </Pressable>
            <View>
                <SectionList sections={data} keyExtractor={(item,index)=>item+index} renderItem={({item})=>(
                    <View>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section:{name}})=>(
                    <Text style={styles.header}>{name}</Text>
                )}
                />
            </View>
        </View>
    )
}