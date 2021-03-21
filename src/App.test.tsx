import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders message", () => {
	render(<App />);
	const messageElement = screen.getByText(/Make something beautiful/i);
	expect(messageElement).toBeInTheDocument();
});
