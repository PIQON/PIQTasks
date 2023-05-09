import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Wrapper } from "./wrapper";

describe("Wrapper", () => {
  it("renders children with maxWidth style attribute", () => {
    const { getByText } = render(
      <Wrapper maxWidth="30rem">
        <h1>Hello World!</h1>
      </Wrapper>
    );
    const wrapperDiv = screen.getByTestId("wrapper");
    expect(wrapperDiv).toHaveStyle(`maxWidth: 30rem`);
    expect(getByText(/Hello World!/)).toBeInTheDocument();
  });
});
