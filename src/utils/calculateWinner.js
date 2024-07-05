// Function to calculate the winner of the game
// 1 is returned if the first wins, 2 if the second wins, and 0 if it is a tie
export const calculateWinner = (first, second) => {
  if (first === second) {
    return 0;
  } else if (
    (first === 'stone' && second === 'scissors') ||
    (first === 'paper' && second === 'stone') ||
    (first === 'scissors' && second === 'paper')
  ) {
    return 1;
  } else {
    return 2;
  }
}