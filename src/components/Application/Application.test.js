import { screen, render } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    /** getByRole */
    const pageHeadingElem = screen.getByRole("heading", {
      name: "Job Application Form",
      level: 1,
    });
    expect(pageHeadingElem).toBeInTheDocument();

    const sectionHeadingElem = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeadingElem).toBeInTheDocument();

    const nameElem = screen.getByRole("textbox", { name: "Name" });
    expect(nameElem).toBeInTheDocument();

    const bioElem = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElem).toBeInTheDocument();

    const locationElem = screen.getByRole("combobox");
    expect(locationElem).toBeInTheDocument();

    const termsElem = screen.getByRole("checkbox");
    expect(termsElem).toBeInTheDocument();

    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toBeInTheDocument();

    /** getByLabelText */
    const nameElem2 = screen.getByLabelText("Name");
    expect(nameElem2).toBeInTheDocument();

    const nameElem3 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElem3).toBeInTheDocument();

    const termsElem2 = screen.getByLabelText("I agree to terms & conditions");
    expect(termsElem2).toBeInTheDocument();

    /** getByPlaceHolderText */
    const nameElem4 = screen.getByPlaceholderText("Full Name");
    expect(nameElem4).toBeInTheDocument();

    /** getByText */
    const paragraphElem = screen.getByText("All fields are mandatory");
    expect(paragraphElem).toBeInTheDocument();

    // substring match
    const paragraphElem2 = screen.getByText("are mandatory", {exact:false});
    expect(paragraphElem2).toBeInTheDocument();

    // ignore case
    const paragraphElem3 = screen.getByText("all fields are mandatory", {exact: false});
    expect(paragraphElem3).toBeInTheDocument();

    /** getByDisplayValue */
    const nameElem5 = screen.getByDisplayValue("Rajesh");
    expect(nameElem5).toBeInTheDocument();

    /** getByAltText */
    const imgElem = screen.getByAltText("a person with a laptop");
    expect(imgElem).toBeInTheDocument();

    /** getByTitle */
    const closeElem = screen.getByTitle("Close");
    expect(closeElem).toBeInTheDocument();

    /** getByTestId */
    const customElem = screen.getByTestId("custom-element");
    expect(customElem).toBeInTheDocument();
  });
});
