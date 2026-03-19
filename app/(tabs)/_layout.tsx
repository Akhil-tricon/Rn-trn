import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#419c46' }}>
            <Tabs.Screen name="settings" options={{
                title: 'Setting',
                tabBarIcon: ({ color }) => <FontAwesome name="cog" size={32} color={color} />
            }
            }
            />
            <Tabs.Screen name="contact" options={{
                title: 'Contact',
                tabBarIcon: ({ color }) => <FontAwesome name="address-book" size={32} color={color} />,
            }}
            />
            <Tabs.Screen name="inventory-scanner" options={{
                title: 'Inventory Scanner',
                tabBarIcon: ({ color }) => <FontAwesome name="barcode" size={32} color={color} />,
            }}
            />
        </Tabs>
    );
}