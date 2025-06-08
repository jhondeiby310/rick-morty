import MainLayout from "@/components/layout/MainLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCharacters } from "@/hooks/useCharacters";
import { useFavorites } from "@/context/FavoritesContext";

/**
 * When characters are available, automatically redirect
 * to the favorite (if any) or the first available character.
 * Applies only on desktop (width >= 768px).
 */
export default function Home() {
  const router = useRouter();
  const { data: characters, isLoading } = useCharacters();
  const { favorites } = useFavorites();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop || isLoading || !characters || characters.length === 0) return;

    const firstFavoriteId = favorites[0]?.id;
    const fallbackId = characters[0]?.id;

    if (firstFavoriteId || fallbackId) {
      const targetId = firstFavoriteId || fallbackId;
      router.replace(`/character/${targetId}`);
    }
  }, [favorites, characters, isLoading]);

  return <MainLayout>{null}</MainLayout>;
}
