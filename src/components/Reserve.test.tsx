import { render, screen } from "@testing-library/react";
import { Reserve } from "./Reserve";

describe("Reserve Form", () => {
  render(<Reserve />);

  test("Renders the form", () => {
    const form = screen.getByTestId("reserve-form");
    expect(form).toBeInTheDocument();
  });
});
