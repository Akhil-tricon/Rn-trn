import { create } from "zustand";

type GameState = {
  history: (string | null)[][];
  currentMove: number;
  xIsNext: boolean;
  winner: string | null;
  draw: boolean;

  playMove: (index: number) => void;
  jumpToMove: (move: number) => void;
  resetGame: () => void;
};

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function isBoardFull(squares: (string | null)[]) {
  return (
    squares.every((square) => square !== null) && !calculateWinner(squares)
  );
}

export const useGameStore = create<GameState>((set, get) => ({
  history: [Array(9).fill(null)],
  currentMove: 0,
  xIsNext: true,
  winner: null,
  draw: false,

  playMove: (index) => {
    const { history, currentMove, xIsNext, winner } = get();

    const currentSquares = history[currentMove];

    if (currentSquares[index] || winner) return;

    const nextSquares = [...currentSquares];
    nextSquares[index] = xIsNext ? "X" : "O";

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    const nextWinner = calculateWinner(nextSquares);
    const isDraw = isBoardFull(nextSquares);

    set({
      history: nextHistory,
      currentMove: currentMove + 1,
      xIsNext: !xIsNext,
      winner: nextWinner,
      draw: isDraw,
    });
  },

  resetGame: () => {
    set({
      history: [Array(9).fill(null)],
      currentMove: 0,
      xIsNext: true,
      winner: null,
      draw: false,
    });
  },

  jumpToMove: (move) => {
    const { history } = get();
    const squares = history[move];
    const winner = calculateWinner(squares);

    set({
      currentMove: move,
      xIsNext: move % 2 === 0,
      winner,
    });
  },
}));
