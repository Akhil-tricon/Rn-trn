import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const Result = () => {
  const { code } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanned Result</Text>
      <Text style={styles.code}>{code}</Text>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  code: {
    fontSize: 20,
    color: "blue",
  },
});