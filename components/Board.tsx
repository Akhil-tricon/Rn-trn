import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
  const jumpToMove = useGameStore((state) => state.jumpToMove);
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

      <Button title="Restart Game" onPress={resetGame} />
      {history.map((_, move) => (
        <Button
          key={move}
          title={`Go to move ${move}`}
          onPress={() => jumpToMove(move)}
        />
      ))}
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
});
