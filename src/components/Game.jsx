import { useState } from "react";
import { Play_mode, Play_moves } from "../utils/constants"
import { calculateWinner } from "../utils/calculateWinner";
import { getComputerMove } from "../utils/getComputerMove";

export const Game = ({
  mode
}) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Move, setPlayer1Move] = useState('');
  const [player2Move, setPlayer2Move] = useState('');
  const [partialWinner, setPartialWinner] = useState('');
  const thereIsAWinner = player1Score === 3 || player2Score === 3;

  function play(move) {
    const player1Move = move ? move : getComputerMove();
    const player2Move = getComputerMove();
    const winner = calculateWinner(player1Move.text, player2Move.text);
    setPartialWinner(winner);
    if (winner === 1) {
      setPlayer1Score(player1Score + 1);
    } else if (winner === 2) {
      setPlayer2Score(player2Score + 1);
    }
    setPlayer1Move(player1Move.image);
    setPlayer2Move(player2Move.image);
  }

  const handleRestart = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  const renderManualMode = () => {
    return (
      <div>
        <p>Choose your next move:</p>
        <button onClick={() => play(Play_moves.Stone)} disabled={thereIsAWinner}>{Play_moves.Stone.text}</button>
        <button onClick={() => play(Play_moves.Paper)} disabled={thereIsAWinner}>{Play_moves.Paper.text}</button>
        <button onClick={() => play(Play_moves.Scissors)} disabled={thereIsAWinner}>{Play_moves.Scissors.text}</button>
        {partialWinner === 1 && !thereIsAWinner && <p>You win this round!</p>}
        {partialWinner === 2 && !thereIsAWinner && <p>Computer wins this round!</p>}
        {partialWinner === 0 && !thereIsAWinner && <p>It's a tie!</p>}
        {player1Score === 3 && <p>You win!</p>}
        {player2Score === 3 && <p>Computer wins!</p>}
      </div>
    )
  }

  const renderAutoMode = () => {
    return (
      <div>
        <button onClick={() => play()} disabled={thereIsAWinner}>Play</button>
      </div>
    )
  }

  return (
    <div>
      {!thereIsAWinner && <p>First to 3 wins!</p>}
      <h2>{mode === Play_mode.Auto ? 'Computer:' : 'You:'} {player1Score}</h2>
      <h2>Computer: {player2Score}</h2>
      {mode === Play_mode.Manual ? renderManualMode() : renderAutoMode()}
      {player1Move && player2Move && <p>{player1Move} vs {player2Move}</p>}
      {thereIsAWinner && <button onClick={handleRestart}>Restart</button>}
    </div>
  )
}