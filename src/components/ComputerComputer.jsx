import { useState } from "react";
import { Play_moves } from "../utils/constants"
import { Link } from "react-router-dom";
import { calculateWinner } from "../utils/calculateWinner";

//🧻 🪨 ✂️ 📄


export const ComputerComputer =  () => {
  const [computer1Score, setComputer1Score] = useState(0);
  const [computer2Score, setComputer2Score] = useState(0);
  const [computer1Move, setComputer1Move] = useState('');
  const [computer2Move, setComputer2Move] = useState('');
  const [partialWinner, setPartialWinner] = useState('');
  const thereIsAWinner = computer1Score === 3 || computer2Score === 3;

  const play = () => () => {
    const compute1rMove = Play_moves[(Math.floor(Math.random() * 3) + 1).toString()];
    const compute2rMove = Play_moves[(Math.floor(Math.random() * 3) + 1).toString()];
    setComputer1Move(compute1rMove);
    setComputer2Move(compute2rMove);
    const winner = calculateWinner(compute1rMove, compute2rMove);
    setPartialWinner(winner);
    if (winner === 1) {
      setComputer1Score(computer1Score + 1);
    } else if (winner === 2) {
      setComputer2Score(computer2Score + 1);
    }
  }

  const handleRestart = () => {
    setComputer1Score(0);
    setComputer2Score(0);
  }

  return (
    <div>
      <Link to="/">⬅Go back to the home page</Link>
      <h1>Computer1 vs Computer2</h1>
      {!thereIsAWinner && <p>First to 3 wins!</p>}
      <h2>Computer 1: {computer1Score}</h2>
      <h2>Computer 2: {computer2Score}</h2>
      <button onClick={play()} disabled={thereIsAWinner}>Play</button>
      {computer1Move && computer2Move && <p style={{fontSize: '38px'}}>{computer1Move}🧻✂️  vs {computer2Move}🪨</p>}
      {partialWinner === 1 && !thereIsAWinner && <p>Computer 1 wins this round!</p>}
      {partialWinner === 2 && !thereIsAWinner && <p>Computer 2 wins this round!</p>}
      {partialWinner === 0 && !thereIsAWinner && <p>It's a tie!</p>}
      {computer1Score === 3 && <p>Computer 1 wins!</p>}
      {computer2Score === 3 && <p>Computer 2 wins!</p>}
      {thereIsAWinner && <button onClick={handleRestart}>Restart</button>}
    </div>
  )
}