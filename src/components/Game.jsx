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
        <div className="game-moves">
          <button className="move" onClick={() => play(Play_moves.Stone)} disabled={thereIsAWinner}>{Play_moves.Stone.image}</button>
          <button className="move" onClick={() => play(Play_moves.Paper)} disabled={thereIsAWinner}>{Play_moves.Paper.image}</button>
          <button className="move" onClick={() => play(Play_moves.Scissors)} disabled={thereIsAWinner}>{Play_moves.Scissors.image}</button>
        </div>
        <p>
          {!thereIsAWinner && partialWinner === 1 ? 'You win this round!' :
          partialWinner === 2 ? 'Computer wins this round!' :
          partialWinner === 0 ? 'It is a tie!' : null}
        </p>
        <p>{player1Score === 3 ? 'You win!' : player2Score === 3 ? 'Computer wins!' : null}</p>
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
    <div className="game">
      <div className="game-board">
        <div>
          <h2>{mode === Play_mode.Auto ? 'Computer' : 'You'}</h2>
          <h3 className="game-board-player1">{player1Score}</h3>
        </div>
        <div>
          <h2>Computer</h2>
          <h3 className="game-board-player2">{player2Score}</h3>
        </div>
        <div className='game-board_main'>
          {mode === Play_mode.Manual ? renderManualMode() : renderAutoMode()}
          {player1Move && player2Move && <p className="game-move_result">{player1Move} vs {player2Move}</p>}
          {thereIsAWinner && <button onClick={handleRestart}>Restart</button>}
        </div>
      </div>
    </div>
  )
}