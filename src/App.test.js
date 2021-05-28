import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders learn react link", () => {
//   render(<App />);
//   const buyButtonElement = screen.getByTestId("buy-button");
//   fireEvent.click(buyButtonElement);
//   expect(screen.queryByText("Cart(1)")).toBeInTheDocument();
// });
