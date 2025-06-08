import BackButton from "../ui/BackButton";
import { useFilters } from "@/context/FiltersContext";

/**
 * Displays the number of results and active filters applied.
 * Only displayed if there are filters.
 */
export default function AdvancedSearchHeader() {
    const { characterType, species, search, setSpecies, setCharacterType, setOpenFiltersPanel } = useFilters();

    const activeFilters = [
        characterType !== "All" ? "characterType" : null,
        species !== "All" ? "species" : null,
    ].filter(Boolean);

    const activeFiltersCount = activeFilters.length;
    const showResults = activeFiltersCount > 0 || search.trim() !== "";

    const clearFilters = () => {
        setSpecies("All");
        setCharacterType("All");
    }

    if (!showResults) return null;

    return (
        <div className="flex justify-between px-3">
            <BackButton onClick={() => setOpenFiltersPanel(true)} />
            <h2 className="text-lg font-medium text-black">Advanced search</h2>
            <button
                onClick={clearFilters}
                className="right-4 text-[#8054C7] text-sm font-medium cursor-pointer"
            >
                Done
            </button>
        </div>
    );
}
