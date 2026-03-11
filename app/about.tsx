import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

const about = () => {
  return (
<View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.text}>This is the about page</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: "#6366f1", padding: 10, borderRadius: 8 },
  buttonText: { color: "white", fontSize: 16 },
});

export default about