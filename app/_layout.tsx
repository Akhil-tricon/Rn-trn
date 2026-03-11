import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen name="counter" options={{ headerTitle: "Counter" }} />
      <Stack.Screen name="tictactoe" options={{ headerTitle: "Tic Tac Toe" }} />
    </Stack>
  );
}
