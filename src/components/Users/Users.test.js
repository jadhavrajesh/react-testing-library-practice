import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import Users from "./Users";
import { server } from "../../mocks/server";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error", async () => {
    // reset the main handler here to throw an error
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const errorText = await screen.findByText("Error while fetching Users");
    expect(errorText).toBeInTheDocument();
  });
});
