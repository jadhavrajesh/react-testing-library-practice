import CounterTwo from "./CounterTwo";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    // user event setup
    user.setup();
    const incrementHandler = jest.fn();
    const decrenentHandler = jest.fn();
    // render component
    render(
      <CounterTwo
        count={0}
        incrementHandler={incrementHandler}
        decrementHandler={decrenentHandler}
      />
    );
    // get buttons
    const incrementButton = screen.getByRole("button", {
      name: "Increment Count",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement Count",
    });
    // click buttons
    await user.click(incrementButton);
    await user.click(decrementButton);
    // assert
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrenentHandler).toHaveBeenCalledTimes(1);
  });
});
