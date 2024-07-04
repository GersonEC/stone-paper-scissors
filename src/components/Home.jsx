import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate();

  const handleHumanVsComputer = () => {
    navigate("/human-computer")
  };

  const handleComputerVsComputer = () => {
    navigate("/computer-computer")
  };

  return (
    <div>
      <h1>Stone - Paper - Scissors</h1>
      <p>Choose the play mode</p>
      <button onClick={handleHumanVsComputer}>Human vs Computer</button>
      <button onClick={handleComputerVsComputer}>Computer vs Computer</button>
    </div>
  )
}