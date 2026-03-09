import { useState } from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
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
    <SafeAreaView
    
      className={`flex-1 ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'} justify-center items-center`}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <Pressable
        onPress={toggleTheme}
        className="mt-4"
      >
        <Text className={currentTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'} style={{ fontSize: 16, fontWeight: 'bold' }}>
          {currentTheme === 'dark' ? 'Dark' : 'Light'}
        </Text>
      </Pressable>
      <Pressable onPress={() => router.push('/')}>
          <Ionicons title="Back to home"name="home" size={30} color="black" />
      </Pressable>
    </SafeAreaView>
  );
}