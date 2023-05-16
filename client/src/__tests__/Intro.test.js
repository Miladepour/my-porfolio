import { render, screen } from "@testing-library/react";
import Intro from "../Hero/Intro.js";

describe("Intro component", () => {
  it("renders correctly", () => {
    render(<Intro />);
    expect(screen.getByText("Hi, my name is 👋🏼")).toBeInTheDocument();
    expect(screen.getByText("{Milad E-Pour}")).toBeInTheDocument();
    expect(screen.getByText("I build things for the web.")).toBeInTheDocument();
  });
});
