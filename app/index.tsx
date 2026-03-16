import { View, Text, TextInput, StyleSheet, Button, Pressable,ScrollView } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{ margin: 12 }}>
        <Link href="/scanner" asChild>
          <Pressable>
            <Text style={styles.linkText}>Open Scanner</Text>
          </Pressable>
        </Link>
      </View>

      <TextInput
        placeholder="Type here..."
        onChangeText={(newText) => setText(newText)}
        value={text}
        style={styles.input}
      />

      <Text style={styles.text}>
        {text.split(" ").map(word => word && "😅").join(" ")}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Loader" onPress={() => router.push("/loader")} />
        <Button title="Contact" onPress={() => router.push("/contact")} />
        <Button title="Setting" onPress={() => router.push("/settings")} />
        <Button title="Inventory Scanner" onPress={() => router.push("/inventory-scanner")}/>
        <Button title="Icon" onPress={() => router.push("/icons")} />
        <Button title="Toggle" onPress={() => router.push("/toggle")} />
      </View>

    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
  },
  input: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: "white",
  },
  text: {
    padding: 10,
    fontSize: 42,
    color: "white",
  },
  linkText: {
    color: "white",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 40,
    gap: 30,
  },
});