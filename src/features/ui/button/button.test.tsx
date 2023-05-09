import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button tests", () => {
  it("Renders correctly with the given props", () => {
    const onClickMock = jest.fn();
    render(
      <Button classNames={["btn"]} type="submit" onClick={onClickMock}>
        Click me!
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "Click me!",
    }) as HTMLButtonElement;
    expect(button.type).toBe("submit");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
