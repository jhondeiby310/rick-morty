/**
 * Context that stores the application's active filters (search, type, species).
 */

import { createContext, useContext, useState } from "react";

type FiltersContextType = {
  search: string;
  characterType: string;
  species: string;
  openFiltersPanel: boolean;
  setSearch: (val: string) => void;
  setCharacterType: (val: string) => void;
  setSpecies: (val: string) => void;
  setOpenFiltersPanel: (val: boolean) => void;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");
  const [characterType, setCharacterType] = useState("All");
  const [species, setSpecies] = useState("All");
  const [openFiltersPanel, setOpenFiltersPanel] = useState(false);

  return (
    <FiltersContext.Provider
      value={{ search, characterType, species, openFiltersPanel, setSearch, setCharacterType, setSpecies, setOpenFiltersPanel }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) throw new Error("useFilters must be used within a FiltersProvider");
  return context;
};
