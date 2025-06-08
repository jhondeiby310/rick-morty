import DetailRow from "./DetailRow";
import { Character } from "@/types/types";

/**
 * displays character information.
 */
export default function CharacterInfo({ character }: { character: Character }) {
    return (
        <div>
            <p className="text-2xl font-bold text-gray-900 mb-4">{character.name}</p>
            <DetailRow label="Specie" value={character.species} />
            <hr className="text-gray-200" />
            <DetailRow label="Status" value={character.status} />
            <hr className="text-gray-200" />
            <DetailRow label="Location" value={character.location?.name ?? "-"} />
        </div>
    );
}