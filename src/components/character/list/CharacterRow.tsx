import FavoriteToggleButton from "../../ui/FavoriteToggleButton";
import { Character } from "@/types/types";

/**
 * Component that represents a character's row in the sidebar.
 * Includes their name, species, image, and favorite button.
 */
type RowProps = {
    /** Character data. */
    character: Character;
    /** If this character is currently selected. */
    selected?: boolean;
    /** Function on row click. */
    onSelect: (id: number) => void;
    /** List of characters marked as favorites. */
    favorites: Character[];
    /** Favorite toggle function. */
    onToggleFavorite?: (character: Character) => void;
};

export default function CharacterRow({ character, selected, onSelect, onToggleFavorite, favorites }: RowProps) {
    return (
        <li
            onClick={() => onSelect(character.id)}
            className={`
                relative flex items-center justify-between h-18 p-4
                cursor-pointer transition rounded-lg
                ${selected ? "bg-[#EEE3FF]" : "hover:bg-gray-100"}
                before:absolute before:top-0 before:left-3 before:right-3 before:h-px before:bg-gray-200
            `}
        >
            <div className="flex items-center gap-2 overflow-hidden">
                <img src={character.image} alt={character.name} className="w-8 h-8 rounded-full" />
                <div className="truncate">
                    <p className="text-sm font-medium truncate">{character.name}</p>
                    <p className="text-sm text-gray-500 truncate">{character.species}</p>
                </div>
            </div>

            <FavoriteToggleButton
                style="hover:bg-[#8054C70D]"
                isFavorite={favorites.some(fav => fav.id === character.id)}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite?.(character);
                }}
            />
        </li>

    );
}