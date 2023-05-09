import { render } from "@testing-library/react";
import { TodosEdit } from "./todos-edit";
import iconCheck from "./../../../assets/images/icon-check.svg";

describe("Todos Edit tests", () => {
  test("renders TodosEdit component with correct props", () => {
    const isCompleteState = false;
    const changeCompleteState = jest.fn();

    const { getByRole } = render(
      <TodosEdit
        isCompleteState={isCompleteState}
        changeCompleteState={changeCompleteState}
      />
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBeTruthy();
  });
  test("renders TodosEdit component with complete state props", () => {
    const isCompleteState = true;
    const changeCompleteState = jest.fn();

    const { getByRole } = render(
      <TodosEdit
        isCompleteState={isCompleteState}
        changeCompleteState={changeCompleteState}
      />
    );

    const button = getByRole("button");
    const img = getByRole("img");
    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Complete todo");
    expect(img).toHaveAttribute("src", iconCheck);
  });
});
