import { Play_mode } from "../utils/constants"
import { Game } from "./Game"

export const ComputerComputer =  () => {

  return (
    <div>
      <h1>Computer vs Computer</h1>
      <Game mode={Play_mode.Auto} />
    </div>
  )
}