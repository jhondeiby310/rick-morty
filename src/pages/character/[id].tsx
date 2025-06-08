import CharacterDetail from "@/components/character/detail/CharacterDetail";
import MainLayout from "@/components/layout/MainLayout";
import { useRouter } from "next/router";
import { useCharacterById } from "@/hooks/useCharacterById";

/**
 * Page that displays a character's details based on the ID obtained from the URL.
 * Uses React Query to load the data and displays it using the CharacterDetail component.
 */
export default function CharacterPage() {
  const router = useRouter();
  const { id } = router.query;

  const numericId = typeof id === "string" ? parseInt(id, 10) : undefined;
  const { data: character, isLoading, isError, error } = useCharacterById(numericId);

  return (
    <MainLayout>
      <CharacterDetail character={character} isLoading={isLoading} isError={isError} errorMessage={error?.response?.data.error}/>
    </MainLayout>
  );
}
