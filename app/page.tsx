import { Suspense } from "react";
import { SearchBar } from "@/components/search-bar";
import { PokemonList } from "@/components/pokemon-list";
import { PokemonListSkeleton } from "@/components/pokemon-list-skeleton";
import { logSearch } from "@/app/actions";

interface PageProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}

export default async function Home(pageProps: PageProps) {
  const { q, page } = await pageProps.searchParams;

  const currentPage = Number(page) || 1;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokémon Explorer</h1>

      <SearchBar defaultValue={q as string} onSearch={logSearch} />

      <Suspense key={`${q}-${currentPage}`} fallback={<PokemonListSkeleton />}>
        <PokemonList query={q as string} page={currentPage} />
      </Suspense>
    </main>
  );
}
