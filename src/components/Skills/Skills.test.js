import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./Skills";
import { skills } from "./data/";

describe("Skills", () => {
  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listELem = screen.getByRole("list");
    expect(listELem).toBeInTheDocument();
  });

  test("renders a list correctly", () => {
    render(<Skills skills={skills} />);

    const listItemsElem = screen.getAllByRole("listitem");
    expect(listItemsElem).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not renderd", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button will be eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    // to print all the aria roles from the dom tree
    logRoles(view.container);

    // to visualize the formatted state of the dom tree
    // screen.debug();
    // findBy.. has default timeout of 1000ms
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    );
    // screen.debug();

    expect(startLearningButton).toBeInTheDocument();
  });
});
