import { useCharacters } from "./useCharacters";
import { useFavorites } from "@/context/FavoritesContext";
import { useFilters } from "@/context/FiltersContext";
import { Character } from "@/types/types";

/**
 * Logic to filter characters.
 */
export function useFilteredCharacters() {
  const { data: characters, isLoading } = useCharacters();
  const { favorites } = useFavorites();
  const { search, species, characterType } = useFilters();

  const normalize = (str: string) => str.toLowerCase().trim();
  const matchesSearch = (char: Character) =>
    !search || normalize(char.name).includes(normalize(search));
  const matchesSpecies = (char: Character) =>
    species === "All" || char.species === species;

  const showStarred = characterType === "All" || characterType === "Starred";
  const showOthers = characterType === "All" || characterType === "Others";

  const starred = showStarred
    ? favorites.filter((char) => matchesSearch(char) && matchesSpecies(char))
    : [];

  const others = showOthers
    ? characters?.filter(
        (char: Character) =>
          !favorites.some((f) => f.id === char.id) &&
          matchesSearch(char) &&
          matchesSpecies(char)
      ) ?? []
    : [];

  return {
    isLoading,
    starred,
    others,
  };
}
