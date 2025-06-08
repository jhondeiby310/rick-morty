import FiltersSection from "./FiltersSection";
import BackButton from "../ui/BackButton";
import { useFilters } from "@/context/FiltersContext";
import { useState, useEffect } from "react";
import { CHARACTER_OPTIONS, SPECIES_OPTIONS } from "@/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = {
  onClose: () => void;
};

/**
 * Panel that allows you to filter characters by type and species.
 * Local changes are only applied when you confirm with the button.
 */
export default function FilterPanel({ onClose }: Props) {
  const {
    characterType,
    species,
    setCharacterType,
    setSpecies,
  } = useFilters();

  const isMobile = useIsMobile();

  const [hasChanged, setHasChanged] = useState(false);
  const [localSpecies, setLocalSpecies] = useState(species);
  const [localType, setLocalType] = useState(characterType);

  useEffect(() => {
    setHasChanged(species !== localSpecies || characterType !== localType);
  }, [localSpecies, localType]);

  const handleApply = () => {
    setSpecies(localSpecies);
    setCharacterType(localType);
    onClose?.();
    setHasChanged(false);
  };

  return (
    <div
      className={`${isMobile
        ? "fixed inset-0 bg-white z-50 flex flex-col pt-12 p-6"
        : "bg-white rounded-xl shadow-lg p-4 w-full"
        }`}
    >
      {isMobile && (
        <div className="mb-4 flex items-center relative">
          <BackButton onClick={onClose}/>
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-normal">
            Filters
          </h2>
        </div>
      )}

      <div className="flex-grow">
        <FiltersSection
          title="Characters"
          options={CHARACTER_OPTIONS}
          selected={localType}
          onSelect={setLocalType}
        />
        <FiltersSection
          title="Specie"
          options={SPECIES_OPTIONS}
          selected={localSpecies}
          onSelect={setLocalSpecies}
        />
      </div>

      <div className="pt-4">
        <button
          onClick={handleApply}
          disabled={!hasChanged}
          className={`w-full text-sm py-3 rounded-lg font-medium transition ${hasChanged
            ? "bg-[#8054C7] hover:bg-[#5A3696] text-white"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          Filter
        </button>
      </div>
    </div>
  );
}
