import React from 'react';
import './App.css';

/* 
Acceptance Criteria
Posso giocare Umano vs Computer?
Posso giocare Computer vs Computer?
Posso giocare una nuova partita conclusa quella precedente?

User Story Back - Technical Constraints
Non è necessaria una GUI appariscente (può essere semplice)
Non dovrebbero essere necessarie librerie o moduli esterni se non per i test
Usa le pratiche riconosciute nell’industry dello sviluppo software
Considera di scrivere codice estendibile. Se lo farai dovrebbe essere relativamente semplice estendere il gioco alla variante Rock, paper, scissors, lizard and Spock 
Questo è un Minimum Viable Product: eleganza e semplicità battono una ricca lista di feature
*/
function App() {

  const handleHumanVsComputer = () => {
    console.log('Human vs Computer')
  }
  
  const handleComputerVsComputer = () => {
    console.log('Computer vs Computer')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stone - Paper - Scissors
        </h1>
      </header>
      <main>
        <p>Choose the mode to play</p>
        <button onClick={handleHumanVsComputer}>Human vs Computer</button>
        <button onClick={handleComputerVsComputer}>Computer vs Computer</button>
      </main>
    </div>
  );
}

export default App;
