import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
export default function TabLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'#419c46'}}>
            <Tabs.Screen name="settings" options={{
                title:'Setting',
                tabBarIcon:({color})=><FontAwesome size={28} color={color}/>,
            }}
            />
            <Tabs.Screen name="contact" options={{
                title:'Contact',
                tabBarIcon:({color})=><FontAwesome size={28} color={color}/>,
            }}
            />
        </Tabs>
    );
}