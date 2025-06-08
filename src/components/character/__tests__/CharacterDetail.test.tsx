import CharacterDetail from "@/components/character/detail/CharacterDetail";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import { useFavorites } from "@/context/FavoritesContext";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/context/FavoritesContext", () => ({
  useFavorites: jest.fn(),
}));

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  image: "https://rick.com/image.jpg",
  species: "Human",
  status: "Alive",
  origin: { name: "Earth", url: "" },
  location: { name: "Citadel", url: "" },
  gender: "Male",
  type: "",
  episode: [],
  url: "",
  created: "",
};

describe("CharacterDetail", () => {
  const pushMock = jest.fn();
  const toggleFavoriteMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: toggleFavoriteMock,
    });
    pushMock.mockReset();
    toggleFavoriteMock.mockReset();
  });

  it("should show the spinner when isLoading is true", () => {
    render(<CharacterDetail isLoading={true} isError={false} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should display the error when isError is true", () => {
    render(<CharacterDetail isLoading={false} isError={true} errorMessage="An error occurred" />);
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });

  it("should show character information when there is no error or loading", () => {
    render(<CharacterDetail isLoading={false} isError={false} character={mockCharacter} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
  });

  it("should navigate to the home page when clicking the arrow", () => {
    render(<CharacterDetail isLoading={false} isError={false} character={mockCharacter} />);
    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
    expect(pushMock).toHaveBeenCalledWith("/");
  });

  it("toggleFavorite by clicking on the favorite icon", () => {
    render(<CharacterDetail isLoading={false} isError={false} character={mockCharacter} />);
    const toggleButton = screen.getByTestId("favorite-button");
    fireEvent.click(toggleButton);
    expect(toggleFavoriteMock).toHaveBeenCalledWith(mockCharacter);
  });
});
