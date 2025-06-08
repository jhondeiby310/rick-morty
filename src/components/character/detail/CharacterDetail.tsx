import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/ErrorMessage";
import CharacterAvatarWithIcon from "./CharacterAvatarWithIcon";
import BackButton from "../../ui/BackButton";
import CharacterInfo from "./CharacterInfo";
import { useRouter } from "next/router";
import { Character } from "@/types/types";
import { useFavorites } from "@/context/FavoritesContext";

/**
 * Props for the CharacterDetail component.
 */
type CharacterDetailProps = {
  /** Character data to display (optional if loading or error). */
  character?: Character;
  /** Whether the data is currently loading. */
  isLoading: boolean;
  /** Whether there was an error fetching data. */
  isError: boolean;
  /** Optional error message to show if an error occurs. */
  errorMessage?: string;
};

/**
 * Displays detailed character information including avatar, name,
 * status, species and origin. Handles loading and error states.
 */
export default function CharacterDetail({ character, isLoading, isError, errorMessage }: CharacterDetailProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();

  if (isError) {
    return <ErrorMessage message={errorMessage} />;
  }

  if (isLoading || !character) {
    return <Spinner />;
  }

  const favorite = favorites.some((fav) => fav.id === character.id);

  return (
    <div className="w-full pt-2 md:pt-7 px-4 md:px-0 lg:px-10 xl:px-16 2xl:px-20">
      <BackButton style="block md:hidden mb-6" onClick={() => router.push("/")} />
      <CharacterAvatarWithIcon
        image={character.image}
        alt={character.name}
        isFavorite={favorite}
        onToggle={() => toggleFavorite(character)} />
      <CharacterInfo character={character} /> 
    </div>
  );
}