import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { colorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function App() {

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  return (
    <View className="flex-1">

      {/* Home Button */}
      <Pressable
        className="bg-green-500 w-10 h-10 rounded-full items-center justify-center m-2"
        onPress={() => router.push("/")}
      >
        <Ionicons name="home" size={24} color="black" />
      </Pressable>

      {/* Main Content */}
      <View
        className={`flex-1 justify-center items-center ${
          currentTheme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />

        <Pressable onPress={toggleTheme} className="mt-4">
          <Text
            className={currentTheme === "dark" ? "text-gray-100" : "text-gray-900"}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              backgroundColor: "skyblue",
              padding: 6,
              borderRadius: 6,
            }}
          >
            {`Press Me to switch to ${
              currentTheme === "dark" ? "Light" : "Dark"
            } mode`}
          </Text>
        </Pressable>

        <Text className="text-blue-500 font-bold mt-4">
          Hello React Native
        </Text>

      </View>

    </View>
  );
}