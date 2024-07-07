import { useNavigate } from "react-router-dom"
import banner from '../assets/stone_paper_scissors.jpg'
export const Home = () => {
  const navigate = useNavigate();

  const handleHumanVsComputer = () => {
    navigate("/human-computer")
  };

  const handleComputerVsComputer = () => {
    navigate("/computer-computer")
  };

  return (
    <div className="home">
      <h1>Stone - Paper - Scissors</h1>
      <div className="home-body">
        <div>
          <img src={banner} />
          <ul>
            <li>Stone beats Scissors</li>
            <li>Scissors beats Paper</li>
            <li>Paper beats Stone</li>
          </ul>
        </div>
        <div className="home-cta">
          <p>Choose the game mode</p>
          <button onClick={handleHumanVsComputer}>Human vs Computer</button>
          <button onClick={handleComputerVsComputer}>Computer vs Computer</button>
        </div>
      </div>
    </div>
  )
}