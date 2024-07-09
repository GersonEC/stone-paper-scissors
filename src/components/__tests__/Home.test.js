import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Home } from "../Home"

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

})