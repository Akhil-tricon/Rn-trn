import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useGameStore } from "../store/gameStore";
import Square from "./Square";

const Board = () => {
  const history = useGameStore((state) => state.history);
  const currentMove = useGameStore((state) => state.currentMove);

  const squares = history[currentMove];
  const playMove = useGameStore((state) => state.playMove);
  const winner = useGameStore((state) => state.winner);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const resetGame = useGameStore((state) => state.resetGame);
  const draw = useGameStore((state) => state.draw);


  const player = xIsNext ? "X" : "O";

  return (
    <View style={styles.board}>
      <Text style={styles.status}>
        {winner
          ? `Winner: ${winner}`
          : draw
            ? "It's a draw!"
            : `Next Player: ${player}`}
      </Text>

      <View style={styles.row}>
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => playMove(index)}
          />
        ))}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={resetGame}>
          <Text>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  controls: {
    marginTop: 20,
  },
  controlButton: {
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#808080', 
  },
});
