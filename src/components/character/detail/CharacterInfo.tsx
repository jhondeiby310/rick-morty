import DetailRow from "./DetailRow";
import { Character } from "@/types/types";

/**
 * displays character information.
 */
export default function CharacterInfo({ character }: { character: Character }) {
    return (
        <div>
            <p className="text-2xl font-semibold mb-2">{character.name}</p>
            <DetailRow label="Specie" value={character.species} />
            <hr className="text-gray-200" />
            <DetailRow label="Status" value={character.status} />
            <hr className="text-gray-200" />
            <DetailRow label="Occupation" value={character.origin?.name ?? "-"} />
        </div>
    );
}