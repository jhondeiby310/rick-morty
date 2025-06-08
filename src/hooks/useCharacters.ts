// src/hooks/useCharacters.ts
import { useQuery } from "@tanstack/react-query";
import { useFilters } from "@/context/FiltersContext";
import { getCharacters } from "@/api/getCharacters";
import { Character } from "@/types/types";
import { useFavorites } from "@/context/FavoritesContext";

/**
 * Custom hook to fetch and filter characters based on user filters and favorites.
 * Applies client-side filtering for favorites-starred/others.
 */
export function useCharacters() {
  const { search, species, characterType } = useFilters();
  const { favorites } = useFavorites();

  return useQuery({
    queryKey: ["characters", search, species, characterType, favorites.map(f => f.id)],
    queryFn: () =>
      getCharacters({
        name: search || undefined,
        species: species !== "All" ? species : undefined,
      }),
    staleTime: 1000 * 60 * 5,
    select: (characters) => {
      return characters.filter((char: Character) => {
        const isFav = favorites.some((fav) => fav.id === char.id);

        if (characterType === "Starred") return isFav;
        if (characterType === "Others") return !isFav;
        return true;
      });
    },
  });
}
