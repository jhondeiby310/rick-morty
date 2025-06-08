import CharacterRow from "./CharacterRow";
import { Character } from "@/types/types";

type CharacterSectionProps = {
    title: string;
    characters: Character[];
    selectedId: number;
    onSelect: (id: number) => void;
    onToggleFavorite: (character: Character) => void;
    favorites: Character[];
};

/**
 * Renders a section of characters in a list,
 * with a header that includes the title and character count.
 * Each character is rendered with the `CharacterRow` component.
 */
export default function CharacterSection({
    title,
    characters,
    selectedId,
    onSelect,
    onToggleFavorite,
    favorites,
}: CharacterSectionProps) {
    return (
        <div>
            <h3 className="uppercase text-xs font-bold text-gray-400 mb-5 px-3">
                {title} ({characters.length})
            </h3>
            <ul>
                {characters.map((char) => (
                    <CharacterRow
                        key={char.id}
                        character={char}
                        selected={char.id === selectedId}
                        onSelect={onSelect}
                        onToggleFavorite={onToggleFavorite}
                        favorites={favorites}
                    />
                ))}
            </ul>
        </div>
    );
}
