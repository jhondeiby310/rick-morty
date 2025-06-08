import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FiltersProvider } from "@/context/FiltersContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </FiltersProvider>
    </QueryClientProvider>
  );
}
