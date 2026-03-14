import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { colorScheme } from "nativewind";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons"
import { router } from 'expo-router'


export default function App() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  return (
    <View className="h-50">
      <Pressable className="bg-green-500 w-10 h-10 rounded-full px-1 py-1 m-2" onPress={() => router.push('/')}>
        <Ionicons title="Back to home" name="home" size={30} color="black" />
      </Pressable>

      <View className={`flex-1 ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'} justify-center items-center`}
      >
        <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
        <Pressable
          onPress={toggleTheme}
          className="mt-4"
        >
          <Text className={currentTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'} style={{ fontSize: 16, fontWeight: 'bold', backgroundColor: 'skyblue', padding: 4 }}>
            {`Press Me to see ${currentTheme === 'dark' ? 'Dark' : 'Light'}`}
          </Text>
        </Pressable>

        <View className="text-blue-500 font-bold">Hello ReactNative</View>

      </View>
    </View>

  );
}