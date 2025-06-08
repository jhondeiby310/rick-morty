import { useCharacters } from "@/hooks/useCharacters";
import { useFilters } from "@/context/FiltersContext";
import { useFavorites } from "@/context/FavoritesContext";

type Props = {
  activeFilters: string[];
};

/**
 * Displays the number of results and active filters applied.
 * Only displayed if there are filters or text in the search box.
 */
export default function SearchMetaInfo({ activeFilters }: Props) {
  const { data: characters } = useCharacters();
  const { search, characterType, species, setOpenFiltersPanel } = useFilters();
  const { favorites } = useFavorites();

  let resultsCount = 0;

  if (characterType === "Starred") {
    const filteredFavorites = favorites.filter(fav => {
      const matchesSpecies = species === "All" || fav.species === species;
      const matchesSearch = search.trim() === "" || fav.name.toLowerCase().includes(search.toLowerCase());
      return matchesSpecies && matchesSearch;
    });

    resultsCount = filteredFavorites.length;
  } else {
    resultsCount = characters?.length ?? 0;
  }

  const activeFiltersCount = activeFilters.length;
  const showResults = activeFiltersCount > 0 || search.trim() !== "";

  if (!showResults) return null;

  return (
    <div className="flex items-center justify-between mt-2 text-sm border-t border-b border-gray-200 h-18 md:border-none md:h-8">
      <p className="text-[#2563eb] text-base font-semibold">
        {resultsCount} Result{resultsCount !== 1 ? "s" : ""}
      </p>

      {activeFiltersCount > 0 && (
        <span onClick={() => setOpenFiltersPanel(true)}
          className="bg-green-100 text-[#3b8520] cursor-pointer text-sm px-3 py-1 rounded-full font-semibold">
          {activeFiltersCount} Filter{activeFiltersCount > 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
