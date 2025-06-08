/**
 * Context that manages favorited characters,
 * including persistence in localStorage.
 */
import { FAVORITES_STORAGE_KEY } from "@/constants";
import { Character } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";

type FavoritesContextType = {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = (character: Character) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === character.id);
      return exists
        ? prev.filter((fav) => fav.id !== character.id)
        : [...prev, character];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
