import { render, screen } from "@testing-library/react";

// Component in test
import App from "../App";

test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");

  // Pre Expectations
  expect(buttonCount.innerHTML).toContain("Decks");

  // Post Expctations
  expect(true).toBeTruthy();
});
