import { useEffect, useState } from "react";
import { Play_moves } from "../utils/constants"

// Function to calculate the winner of the game
// 1 is returned if the human wins, 2 if the computer wins, and 0 if it is a tie
const calculateWinner = (humanMove, computerMove) => {
  if (humanMove === computerMove) {
    return 0;
  } else if (
    (humanMove === 'stone' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'stone') ||
    (humanMove === 'scissors' && computerMove === 'paper')
  ) {
    return 1;
  } else {
    return 2;
  }
}

export const HumanComputer =  () => {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [humanMove, setHumanMove] = useState('');
  const [computerMove, setComputerMove] = useState('');
  const [partialWinner, setPartialWinner] = useState('');
  const thereIsAWinner = humanScore === 3 || computerScore === 3;

  const play = (move) => () => {
    const computerMove = Play_moves[(Math.floor(Math.random() * 3) + 1).toString()];
    setHumanMove(move);
    setComputerMove(computerMove);
    const winner = calculateWinner(move, computerMove);
    setPartialWinner(winner);
    if (winner === 1) {
      setHumanScore(humanScore + 1);
    } else if (winner === 2) {
      setComputerScore(computerScore + 1);
    }
  }

  const handleRestart = () => {
    setHumanScore(0);
    setComputerScore(0);
  }

  return (
    <div>
      <h1>Human vs Computer</h1>
      {!thereIsAWinner && <p>First to 3 wins!</p>}
      <h2>You: {humanScore}</h2>
      <h2>Computer: {computerScore}</h2>
      <p>Choose your next move:</p>
      <button onClick={play('stone')} disabled={thereIsAWinner}>{Play_moves['1']}</button>
      <button onClick={play('paper')} disabled={thereIsAWinner}>{Play_moves['2']}</button>
      <button onClick={play('scissors')} disabled={thereIsAWinner}>{Play_moves['3']}</button>
      {humanMove && computerMove && <p>{humanMove}🧻 vs {computerMove}🪨</p>}
      {partialWinner === 1 && !thereIsAWinner && <p>You win this round!</p>}
      {partialWinner === 2 && !thereIsAWinner && <p>Computer wins this round!</p>}
      {partialWinner === 0 && !thereIsAWinner && <p>It's a tie!</p>}
      {humanScore === 3 && <p>You win!</p>}
      {computerScore === 3 && <p>Computer wins!</p>}
      {thereIsAWinner && <button onClick={handleRestart}>Restart</button>}
    </div>
  )
}