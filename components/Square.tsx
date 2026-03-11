import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Square = ({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onSquareClick}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
