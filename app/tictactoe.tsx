import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Board from "../components/Board";

const tictactoe = () => {
  return (
    <ScrollView style={styles.container}>
      <Board></Board>
    </ScrollView>
  );
};

export default tictactoe;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});
