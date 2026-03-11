import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>My First React Native App</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navigation</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.button, styles.buttonIncrement]}
            onPress={() => router.push("/about")}
          >
            <Text style={styles.buttonText}>Go to about</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonDecrement]}
            onPress={() => router.push("/counter")}
          >
            <Text style={styles.buttonText}>Go to counter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fun Time</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.button, styles.buttonGame]}
            onPress={() => router.push("/tictactoe")}
          >
            <Text style={styles.buttonText}>Tic Tac Toe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#6366f1",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#e0e3ff",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 16,
  },

  button: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIncrement: {
    backgroundColor: "#10b981",
  },
  buttonDecrement: {
    backgroundColor: "#ef4444",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonGame: {
    backgroundColor: "#6366f1",
  },
});
