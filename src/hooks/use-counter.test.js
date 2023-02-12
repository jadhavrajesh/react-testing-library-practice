import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
  // test("should render the initial counter", () => {
  //   const { result } = renderHook(useCounter);
  //   expect(result.current.count).toBe(0);
  // });

  test("should render and accpet inital count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 20,
      },
    });

    expect(result.current.count).toBe(20);
  });

  test("should increment the count after clicking on increment", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0,
      },
    });
    act(() => {
      result.current.inc();
    });
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count after clicking on decrement", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0,
      },
    });
    act(() => {
      result.current.dec();
    });
    expect(result.current.count).toBe(-1);
  });
});
