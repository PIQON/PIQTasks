import { render, screen } from "@testing-library/react";
import { TodosFilter } from "./todos-filter";
import { FilterActions } from "./filter-actions/filter-actions";
import { fireEvent } from "@testing-library/react";
import { useTodosFilterContext } from "../store/filter/use-todos-filter-context";

jest.mock("./../store/filter/use-todos-filter-context.ts");

describe("Todos Filter tests", () => {
  const mockChangeFilter = jest.fn();
  beforeAll(() => {
    (useTodosFilterContext as jest.Mock).mockReturnValue({
      changeFilter: mockChangeFilter,
    });
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
    });
  });

  test("Renders filter with correct number of items left", () => {
    render(<TodosFilter itemsLeft={5} />);
    const itemsText = screen.getByText(/5 items left/i);
    expect(itemsText).toBeInTheDocument();
  });

  test("Renders filter actions correctly", () => {
    render(<FilterActions />);
    const allButton = screen.getByRole("button", { name: /all/i });
    const activeButton = screen.getByRole("button", { name: /active/i });
    const completedButton = screen.getByRole("button", {
      name: /completed/i,
    });

    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });

  test("Correctly call a click on button filter", () => {
    render(<FilterActions />);

    const allButton = screen.getByRole("button", { name: /all/i });
    fireEvent.click(allButton);

    expect(mockChangeFilter).toHaveBeenCalledWith("All");
  });
});
