import AdvancedSearchHeader from "./AdvancedSearchHeader";
import FilterPanel from "./FilterPanel";
import SearchInput from "./SearchInput";
import SearchMetaInfo from "./SearchMetaInfo";
import { useFilters } from "@/context/FiltersContext";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * Component that renders the search and filter section of the page.
 * 
 * - Shows a search input and header.
 * - On mobile with active filters, it shows only a compact header.
 * - On mobile, the filters panel opens as a full-screen overlay.
 * - Displays current active filters metadata.
 */
export default function SeacrhAndFilters() {

  const { characterType, species, openFiltersPanel, setOpenFiltersPanel } = useFilters();

  const activeFilters = [
    characterType !== "All" ? "characterType" : null,
    species !== "All" ? "species" : null,
  ].filter(Boolean) as string[];

  const isMobile = useIsMobile();

  const showHeaderOnly = isMobile && activeFilters.length > 0;

  return (
      <div>
        {showHeaderOnly ? (
          <AdvancedSearchHeader />
        ) : (
          <>
            <h2 className="text-2xl font-bold md:font-normal mb-4 text-font-dark">Rick and Morty list</h2>
            <div className="relative my-8">
              <SearchInput />
            </div>
          </>
        )}

        {openFiltersPanel && isMobile &&
          <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
            <FilterPanel onClose={() => setOpenFiltersPanel(false)} />
          </div>}

        <div className="mt-6 px-4">
          <SearchMetaInfo activeFilters={activeFilters}/>
        </div>
      </div>
  );
}
