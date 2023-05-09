import { render } from "@testing-library/react";
import { FormElement } from "./form-element";

describe("FormElement tests", () => {
  const inputTestId = "input-test-id";
  const label = "Test Label";
  const placeholder = "Test Placeholder";
  const error = "Test Error";

  it("Renders input with label", () => {
    const { getByLabelText } = render(
      <FormElement id={inputTestId} label={label} type="text" />
    );
    const input = getByLabelText(label) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.id).toBe(inputTestId);
  });

  it("renders input with placeholder", () => {
    const { getByPlaceholderText } = render(
      <FormElement
        id={inputTestId}
        label={label}
        placeholder={placeholder}
        type="text"
      />
    );
    const input = getByPlaceholderText(placeholder) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.id).toBe(inputTestId);
  });

  it("renders input with error", () => {
    const { getByText } = render(
      <FormElement id={inputTestId} label={label} error={error} type="text" />
    );
    const errorText = getByText(error);

    expect(errorText).toBeInTheDocument();
  });
});
