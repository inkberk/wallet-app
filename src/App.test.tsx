import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const linkElement = screen.getByText(/wants to add a new network/i);
  expect(linkElement).toBeInTheDocument();
});
