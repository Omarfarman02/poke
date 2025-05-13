import { PokemonGrid } from "@/components/pokemon-grid"
import { PaginationControl } from "@/components/pagination-control"
import { getAllPokemon, ITEMS_PER_PAGE, MAX_PAGES } from "@/lib/pokemon"
import { EmptyState } from "@/components/empty-state"

interface PokemonListProps {
  query: string
  page: number
}

export async function PokemonList({ query, page }: PokemonListProps) {
  // Fetch all Pokémon for search functionality
  const allPokemon = await getAllPokemon()

  // Filter by search query if provided
  const filteredResults = query
    ? allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()))
    : allPokemon

  // Calculate total pages
  const totalItems = filteredResults.length
  const totalPages = Math.min(Math.ceil(totalItems / ITEMS_PER_PAGE), MAX_PAGES)

  // Ensure current page is valid
  const validPage = page > totalPages ? 1 : page

  // Paginate the results
  const startIndex = (validPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedResults = filteredResults.slice(startIndex, endIndex)

  // Determine if we should show pagination
  const showPagination = totalPages > 1

  return (
    <div>
      {filteredResults.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <>
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {paginatedResults.length} of {totalItems} Pokémon
            {query ? ` matching "${query}"` : ""}
          </div>

          <PokemonGrid pokemonList={paginatedResults} currentPage={validPage} searchQuery={query} />

          {showPagination && <PaginationControl currentPage={validPage} totalPages={totalPages} query={query} />}
        </>
      )}
    </div>
  )
}
