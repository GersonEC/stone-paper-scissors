import { render, screen } from "@testing-library/react"
import { HumanComputer } from "../HumanComputer"
import userEvent from "@testing-library/user-event"
import { getComputerMove } from "../../utils/getComputerMove"

jest.mock('../../utils/getComputerMove', () => {
  const originalModule = jest.requireActual('../../utils/getComputerMove');
  return {
    __esModule: true,
    ...originalModule,
    getComputerMove: () => '🧻',
  };
});

describe('HumanComputer', () => {
  it('Should render correctly', async () => {
    render(
      <HumanComputer />
    )
    const title = screen.getByText(/human vs computer/i)
    expect(title).toBeInTheDocument();
  })

  it('Should computer wins when I choose stone', async () => {
    render(
      <HumanComputer />
    )
    const title = screen.getByText(/human vs computer/i)
    expect(title).toBeInTheDocument();

    const stoneButton = screen.getByText('🪨');
    await userEvent.click(stoneButton);

    const computerWinText = screen.getByText(/computer wins this round/i);
    expect(computerWinText).toBeInTheDocument();
  })
})