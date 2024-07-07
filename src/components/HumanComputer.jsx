import { Play_mode } from "../utils/constants"
import { Game } from "./Game";

export const HumanComputer =  () => {

  return (
    <div className="human-computer">
      <h1>Human vs Computer</h1>
      <Game mode={Play_mode.Manual} />
    </div>
  )
}