import { render, screen } from "@testing-library/react"
import { HumanComputer } from "../HumanComputer"
import userEvent from "@testing-library/user-event"

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

  it('Should computer wins the round when I choose stone', async () => {
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

  it('Should computer wins the game when I choose stone for 3 times', async () => {
    render(
      <HumanComputer />
    )
    const title = screen.getByText(/human vs computer/i)
    expect(title).toBeInTheDocument();

    const stoneButton = screen.getByText('🪨');
    await userEvent.click(stoneButton);
    await userEvent.click(stoneButton);
    await userEvent.click(stoneButton);

    const computerWinText = screen.getByText(/computer wins!/i);
    expect(computerWinText).toBeInTheDocument();

    const restartButton = screen.getByRole('button', {name: /restart/i});
    expect(restartButton).toBeInTheDocument();
  })
})