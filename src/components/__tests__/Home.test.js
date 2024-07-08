import { act, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Home } from "../Home"
import userEvent from "@testing-library/user-event";

// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

// const useNavigateMock = jest.mocked(useNavigate)

describe('Home', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const title = screen.getByText(/Stone - Paper - Scissors/i);
    const rule1 = screen.getByText(/Stone beats Scissors/i);
    const rule2 = screen.getByText(/Scissors beats Paper/i);
    const rule3 = screen.getByText(/Paper beats Stone/i);
    const button1 = screen.getByRole('button', {name: /human vs computer/i});
    const button2 = screen.getByRole('button', {name: /computer vs computer/i});
  
    expect(title).toBeInTheDocument();
    expect(rule1).toBeInTheDocument();
    expect(rule2).toBeInTheDocument();
    expect(rule3).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });

  // it('should navigate to human vs computer when clicking on the relative button', () => {
  //   // const navigateMock = jest.fn()
  //   // useNavigateMock.mockReturnValue(navigateMock)

  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Home />
  //     </MemoryRouter>
  //   )
  //   // Interact with page
  //   act(async () => {
  //     const button = screen.getByRole('button', {name: /human vs computer/i});
  //     await userEvent.click(button)
  // });

  // // Check correct page content showed up
  // screen.debug()
  // // expect(document.body.textContent).toBe('Welcome');

  // })
})