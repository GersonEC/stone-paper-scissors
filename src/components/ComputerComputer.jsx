import { Link } from "react-router-dom"
import { Play_mode } from "../utils/constants"
import { Game } from "./Game"

export const ComputerComputer =  () => {

  return (
    <div>
      <Link to="/">⬅Go back to the home page</Link>
      <h1>Computer vs Computer</h1>
      <Game mode={Play_mode.Auto} />
    </div>
  )
}