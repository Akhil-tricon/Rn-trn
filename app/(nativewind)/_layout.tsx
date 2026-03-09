import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
export default function TabLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'#419c46'}}>
            <Tabs.Screen name="toggle" options={{
                title:'Toggle',
                tabBarIcon:({color})=><FontAwesome size={38} color={color}/>,
            }}
            />
            <Tabs.Screen name="icons" options={{
                title:'Icon',
                tabBarIcon:({color})=><FontAwesome size={38} color={color}/>,
            }}
            />
        </Tabs>
    );
}