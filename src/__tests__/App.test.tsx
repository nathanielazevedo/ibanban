import { render, screen } from "@testing-library/react";

// Component in test
import App from "../App";

test("Renders main page correctly", async () => {
  // Setup
  render(<App />);

  // Assert
  expect(await screen.findByText("Ibanban")).toBeVisible();
});
