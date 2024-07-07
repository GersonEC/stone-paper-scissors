import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { HumanComputer } from './components/HumanComputer';
import { ComputerComputer } from './components/ComputerComputer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/human-computer" element={<HumanComputer />} />
          <Route path="/computer-computer" element={<ComputerComputer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;