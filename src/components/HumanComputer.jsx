import { Link } from "react-router-dom";
import { Play_mode } from "../utils/constants"
import { Game } from "./Game";

export const HumanComputer =  () => {

  return (
    <div>
      <Link to="/">⬅Go back to the home page</Link>
      <h1>Human vs Computer</h1>
      <Game mode={Play_mode.Manual} />
    </div>
  )
}