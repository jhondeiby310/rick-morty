import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCharacterById } from "@/api/getCharacterById";
import { Character } from "@/types/types";

type ApiErrorResponse = {
  error: string;
};

/**
 * Hook that retrieves a character's information by ID.
 * Uses React Query and Axios for cache and state management.
 */
export function useCharacterById(id: number | undefined) {
  return useQuery<Character, AxiosError<ApiErrorResponse>>({
    queryKey: ["character", id],
    enabled: typeof id === "number",
    queryFn: () => {
      if (typeof id !== "number") {
        return Promise.reject(new Error("Invalid character ID"));
      }
      return getCharacterById(id);
    },
    staleTime: 1000 * 60 * 10,
    retry: false,
    refetchOnWindowFocus: false,
  });
}
