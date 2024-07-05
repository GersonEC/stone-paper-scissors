import { Play_moves } from "./constants";

export const getComputerMove = () => {
  const playMovesKeys = Object.keys(Play_moves)
  const computerMove = Play_moves[playMovesKeys[Math.floor(Math.random() * playMovesKeys.length)]]
  return computerMove;
}
