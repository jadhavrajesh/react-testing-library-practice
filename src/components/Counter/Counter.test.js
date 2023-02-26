import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toBeInTheDocument();

    const incrementButtonElem = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElem).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent(0);
  });

  test("renders a count of 1 after clicking the render button", async () => {
    // create a user instance
    user.setup();

    render(<Counter />);
    const incrementButtonElem = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButtonElem);
    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent(1);
  });

  test("renders a count of 2 after clicking the button twice", async () => {
    user.setup();

    render(<Counter />);
    const incrementButtonElem = screen.getByRole("button", {
      title: "Increment",
    });
    expect(incrementButtonElem).toBeInTheDocument();

    await user.click(incrementButtonElem);
    await user.click(incrementButtonElem);
    const headingElem = screen.getByRole("heading", { level: 1 });
    expect(headingElem).toHaveTextContent(2);
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    // input of type number, the role is spinbutton
    const amountInputElem = screen.getByRole("spinbutton");
    expect(amountInputElem).toBeInTheDocument();
    
    // set value as 10 in amount input
    await user.type(amountInputElem, "10");    
    expect(amountInputElem).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    // simulate the button interaction
    await user.click(setButton);    
    
    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent(10);
  });
});
