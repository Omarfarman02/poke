"use client";
import { extractIdFromUrl } from "@/lib/pokemon";
import { type PokemonListItem } from "@/lib/types";
import { PokemonCard } from "@/components/pokemon-card";
import { MouseEvent } from "react";

interface PokemonGridProps {
  pokemonList: PokemonListItem[];
  currentPage: number;
  searchQuery: string;
}

export function PokemonGrid({
  pokemonList,
  currentPage,
  searchQuery,
}: PokemonGridProps) {
  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    // Event delegation for list items
    const target = e.target as HTMLElement;
    const pokemonCard = target.closest("[data-pokemon-id]");

    if (pokemonCard) {
      const id = pokemonCard.getAttribute("data-pokemon-id");
      // Navigation is handled by the Link component
      console.log(`Clicked on Pokémon with ID: ${id}`);
    }
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      onClick={clickHandler}
    >
      {pokemonList.map((pokemon) => {
        const id = extractIdFromUrl(pokemon.url);
        return (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            id={id}
            currentPage={currentPage}
            searchQuery={searchQuery}
          />
        );
      })}
    </div>
  );
}
