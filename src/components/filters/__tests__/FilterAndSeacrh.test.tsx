import SearchAndFilters from "@/components/filters/SearchAndFilters";
import { render, screen } from "@testing-library/react";
import { useFilters } from "@/context/FiltersContext";
import { useIsMobile } from "@/hooks/useIsMobile";

jest.mock("@/context/FiltersContext", () => ({
    useFilters: jest.fn(),
}));

jest.mock("@/hooks/useIsMobile", () => ({
    useIsMobile: jest.fn(),
}));

jest.mock("@/components/filters/AdvancedSearchHeader", () => ({
    __esModule: true,
    default: function AdvancedSearchHeaderMock() {
        return <div>AdvancedSearchHeader</div>;
    },
}));

jest.mock("@/components/filters/SearchInput", () => ({
    __esModule: true,
    default: function SearchInputMock() {
        return <div>SearchInput</div>;
    },
}));

jest.mock("@/components/filters/FilterPanel", () => ({
    __esModule: true,
    default: function FilterPanelMock({ onClose }: { onClose: () => void }) {
        return (
            <div>
                FilterPanel
                <button onClick={onClose}>Close</button>
            </div>
        );
    },
}));

jest.mock("@/components/filters/SearchMetaInfo", () => ({
    __esModule: true,
    default: function SearchMetaInfoMock({ activeFilters }: { activeFilters: string[] }) {
        return <div>SearchMetaInfo with {activeFilters.length} filters</div>;
    },
}));


describe("SearchAndFilters", () => {
    const defaultFilters = {
        characterType: "All",
        species: "All",
        search: "",
        openFiltersPanel: false,
        setOpenFiltersPanel: jest.fn(),
        setCharacterType: jest.fn(),
        setSpecies: jest.fn(),
        setSearch: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("It should only show the header if there are active filters and it is on mobile.", () => {
        (useFilters as jest.Mock).mockReturnValue({
            ...defaultFilters,
            characterType: "Alien",
        });
        (useIsMobile as jest.Mock).mockReturnValue(true);

        render(<SearchAndFilters />);
        expect(screen.getByText("AdvancedSearchHeader")).toBeInTheDocument();
        expect(screen.queryByText("Rick and Morty list")).not.toBeInTheDocument();
    });

    it("It should show the title and input if there are no active filters or it is not mobile.", () => {
        (useFilters as jest.Mock).mockReturnValue(defaultFilters);
        (useIsMobile as jest.Mock).mockReturnValue(false);

        render(<SearchAndFilters />);
        expect(screen.getByText("Rick and Morty list")).toBeInTheDocument();
        expect(screen.getByText("SearchInput")).toBeInTheDocument();
    });

    it("should show the filter panel if it is open and is mobile", () => {
        (useFilters as jest.Mock).mockReturnValue({
            ...defaultFilters,
            openFiltersPanel: true,
        });
        (useIsMobile as jest.Mock).mockReturnValue(true);

        render(<SearchAndFilters />);
        expect(screen.getByText("FilterPanel")).toBeInTheDocument();
    });

    it("should display the SearchMetaInfo component with the filters active", () => {
        (useFilters as jest.Mock).mockReturnValue({
            ...defaultFilters,
            characterType: "Alien",
        });
        (useIsMobile as jest.Mock).mockReturnValue(false);

        render(<SearchAndFilters />);
        expect(screen.getByText(/SearchMetaInfo with 1 filters/i)).toBeInTheDocument();
    });
});
