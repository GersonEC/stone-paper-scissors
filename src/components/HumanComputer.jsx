import { Play_moves } from "../utils/constants"

const calculateWinner = (humanMove, computerMove) => {
  if (humanMove === computerMove) {
    return 'It is a tie!';
  } else if (
    (humanMove === 'stone' && computerMove === 'scissors') ||
    (humanMove === 'paper' && computerMove === 'stone') ||
    (humanMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

export const HumanComputer =  () => {

  const play = (move) => () => {
    console.log(move)
    const computerMove = Play_moves[(Math.floor(Math.random() * 3) + 1).toString()];
    console.log(computerMove)
    const winner = calculateWinner(move, computerMove);
    console.log(winner)
  }

  return (
    <div>
      <h1>Human vs Computer</h1>
      <h2>You: 0</h2>
      <h2>Computer: 0</h2>
      <p>Choose your next move:</p>
      <button onClick={play('stone')}>{Play_moves['1']}</button>
      <button onClick={play('paper')}>{Play_moves['2']}</button>
      <button onClick={play('scissors')}>{Play_moves['3']}</button>
    </div>
  )
}