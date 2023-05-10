import { render, fireEvent } from "@testing-library/react";
import { TodosHeader } from "./todos-header";
import { useThemeContext } from "../../../store/theme/use-theme-context";

jest.mock("../../../store/theme/use-theme-context");

describe("TodosHeader", () => {
  const mockChangeTheme = jest.fn();

  beforeAll(() => {
    (useThemeContext as jest.Mock).mockReturnValue({
      theme: "dark",
      changeTheme: mockChangeTheme,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render primary heading", () => {
    const { getByText } = render(<TodosHeader />);
    const headerTitle = getByText("Todo");
    expect(headerTitle).toBeInTheDocument();
  });

  it("Should call changeTheme when button is clicked", () => {
    const { getByRole } = render(<TodosHeader />);
    const themeButton = getByRole("button");
    fireEvent.click(themeButton);
    expect(mockChangeTheme).toHaveBeenCalled();
  });

  it("Should render the correct theme icon for light theme", () => {
    (useThemeContext as jest.Mock).mockReturnValue({
      theme: "light",
      changeTheme: mockChangeTheme,
    });

    const { getByAltText } = render(<TodosHeader />);
    const lightThemeIcon = getByAltText("Dark theme");
    expect(lightThemeIcon).toBeInTheDocument();
  });
  it("Should render the coorect theme icon for dark theme", () => {
    (useThemeContext as jest.Mock).mockReturnValue({
      theme: "dark",
      changeTheme: mockChangeTheme,
    });

    const { getByAltText: getByAltText2 } = render(<TodosHeader />);
    const darkThemeIcon = getByAltText2("Light theme");
    expect(darkThemeIcon).toBeInTheDocument();
  });
});
