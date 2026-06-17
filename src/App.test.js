import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the portfolio homepage", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	const headline = screen.getByText(
		/I build practical software projects in public on GitHub./i
	);
	expect(headline).toBeInTheDocument();
});
