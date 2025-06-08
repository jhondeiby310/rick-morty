import Spinner from "../../ui/Spinner";
import CharacterSection from "./CharacterSection";
import { useRouter } from "next/router";
import { useFavorites } from "@/context/FavoritesContext";
import { useFilteredCharacters } from "@/hooks/useFilteredCharacters";

/**
 * Displays the character sidebar, divided into "Starred" and "Others."
 */
export default function CharacterSidebarList() {
  const router = useRouter();
  const { toggleFavorite, favorites } = useFavorites();
  const { isLoading, starred, others } = useFilteredCharacters();

  const selectedId = Number(router.query.id);

  const handleSelect = (id: number) => {
    router.push(`/character/${id}`);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="space-y-6 text-sm">
      {starred.length > 0 && (
        <CharacterSection
          title="Starred Characters"
          characters={starred}
          selectedId={selectedId}
          onSelect={handleSelect}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
      {others.length > 0 && (
        <CharacterSection
          title="Characters"
          characters={others}
          selectedId={selectedId}
          onSelect={handleSelect}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
}
