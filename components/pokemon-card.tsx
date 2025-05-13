"use client";
import Link from "next/link";
import Image from "next/image";
import { getPokemonImageUrl } from "@/lib/pokemon";
import { Card, CardContent } from "@/components/ui/card";

import { type PokemonListItem } from "@/lib/types";

interface PokemonCardProps {
  pokemon: PokemonListItem;
  id: string;
  currentPage: number;
  searchQuery: string;
}

export function PokemonCard({
  pokemon,
  id,
  currentPage,
  searchQuery,
}: PokemonCardProps) {
  // Build the URL with return page information
  const detailUrl = new URL(
    `/pokemon/${id}`,
    typeof window !== "undefined" ? window.location.origin : "http://localhost"
  );

  // Add query parameters for returning to the correct page
  if (currentPage > 1) {
    detailUrl.searchParams.set("returnPage", currentPage.toString());
  }

  if (searchQuery) {
    detailUrl.searchParams.set("returnQuery", searchQuery);
  }

  return (
    <Link href={detailUrl.pathname + detailUrl.search} className="block">
      <Card className="hover:shadow-md transition-shadow" data-pokemon-id={id}>
        <CardContent className="p-4 flex flex-col items-center">
          <Image
            src={getPokemonImageUrl(id) || "/placeholder.svg"}
            alt={pokemon.name}
            width={120}
            height={120}
            className="mb-2"
          />
          <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>
          <span className="text-sm text-muted-foreground">
            #{id.padStart(3, "0")}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
