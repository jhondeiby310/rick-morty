import CharacterDetail from "@/components/character/detail/CharacterDetail";
import MainLayout from "@/components/layout/MainLayout";
import { GetServerSideProps } from "next";
import { getCharacterById } from "@/api/getCharacterById";
import { Character } from "@/types/types";
import { isAxiosError } from "axios";

type Props = {
  character?: Character;
  errorMessage?: string;
};

type ApiErrorResponse = {
  error: string;
};

/**
 * Page that displays a character's details based on the ID obtained from the URL.
 * Uses SSR via getServerSideProps.
 */
export default function CharacterPage({ character, errorMessage }: Props) {
  const isError = !!errorMessage;
  const isLoading = false;

  return (
    <MainLayout>
      <CharacterDetail
        character={character}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const id = context.params?.id;

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return {
      props: { errorMessage: "Invalid character ID." },
    };
  }

  try {
    const character = await getCharacterById(Number(id));
    return {
      props: { character },
    };
  } catch (error: unknown) {
    let errorMessage = "Failed to load character.";

    if (isAxiosError<ApiErrorResponse>(error) && error.response?.data?.error) {
      errorMessage = error.response.data.error;
    }

    return {
      props: {
        errorMessage,
      },
    };
  }
};
