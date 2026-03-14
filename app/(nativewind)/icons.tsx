import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { router } from 'expo-router'
import useCounterState from '../store/useCounterStore'
import useUserStore from '../store/useUserStore'

export default function Icons() {
    const count = useCounterState((state) => state.count)
    const increment = useCounterState((state) => state.increment)
    const decrement = useCounterState((state) => state.decrement)
    const reset = useCounterState((state) => state.reset)

    const name = useUserStore((state) => state.name)
    const isLoggedIn = useUserStore((state) => state.isLoggedIn)
    const login = useUserStore((state) => state.login)
    const logout = useUserStore((state) => state.logout)

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'black',
            height: 600,
            width: '100%',
        },
        text: {
            fontSize: 20,
            color: 'white'
        },
        button: {
            height: 50,
            width: 50,
            borderRadius: 50,
            padding: 10,
            backgroundColor: '#52f55a',
            color: 'black',
            marginBottom: 10,
            marginTop: 10
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>IconPage</Text>
            <Pressable style={styles.button} onPress={() => router.push('/')}>
                <Ionicons title="Back to home" name="home" size={30} color="black" />
            </Pressable>
            


            <View style={{ flexDirection: 'row', gap: 10 }} className='h-50 bg-gray-700 p-4 mx-auto mb-2'>
                <Text style={styles.text}>Count: {count}</Text>
                <Pressable style={styles.button} onPress={increment}>
                    <Text style={styles.text}>+1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={decrement}>
                    <Text style={styles.text}>-1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={reset}>
                    <Text style={styles.text}>RS</Text>
                </Pressable>

            </View>

            <View className='flex-row gap-4 h-50 bg-gray-700 p-4 mx-auto'>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
                <Pressable onPress={() => login('Nandhini')} className='bg-orange-500 h-12 w-15 p-2 rounded-xl'>
                    <Text>Login</Text>
                </Pressable>
                <Pressable onPress={logout} className='bg-orange-500 h-12 w-15 p-2 rounded-xl'>
                    <Text>Logout</Text>
                </Pressable>
            </View>
        </View>

    )
}
