import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPokemonDetails } from "@/lib/pokemon";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface PokemonDetailProps {
  params: { id: string };
  searchParams: { returnPage?: string; returnQuery?: string };
}

export default async function PokemonDetail(pageProps: PokemonDetailProps) {
  const { returnPage, returnQuery } = await pageProps.searchParams;
  const { id } = await pageProps.params;

  const pokemon = await getPokemonDetails(id);

  if (!pokemon) {
    notFound();
  }

  // Build the back link URL with the correct page and search query
  const backLinkParams = new URLSearchParams();
  const backLink = backLinkParams.toString()
    ? `/?${backLinkParams.toString()}`
    : "/";

  if (returnQuery) backLinkParams.set("q", returnQuery);

  if (returnPage) backLinkParams.set("page", returnPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href={backLink} className="inline-flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to list
          {returnPage && ` (Page ${returnPage})`}
        </Link>
      </Button>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src={
                  pokemon.sprites.other["official-artwork"].front_default ||
                  "/placeholder.svg?height=200&width=200"
                }
                alt={pokemon.name}
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
            </div>

            <div className="w-full md:w-2/3 md:pl-6">
              <CardTitle className="text-3xl font-bold capitalize mb-2">
                {pokemon.name}
              </CardTitle>

              <div className="flex flex-wrap gap-2 mb-4">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Stats</h2>
                  <ul className="space-y-1">
                    {pokemon.stats.map((stat) => (
                      <li key={stat.stat.name} className="flex justify-between">
                        <span className="capitalize">
                          {stat.stat.name.replace("-", " ")}:
                        </span>
                        <span className="font-medium">{stat.base_stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">Details</h2>
                  <ul className="space-y-1">
                    <li className="flex justify-between">
                      <span>Height:</span>
                      <span className="font-medium">
                        {pokemon.height / 10} m
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Weight:</span>
                      <span className="font-medium">
                        {pokemon.weight / 10} kg
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Base Experience:</span>
                      <span className="font-medium">
                        {pokemon.base_experience}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-lg font-semibold mt-4 mb-2">Abilities</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability.ability.name}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {ability.ability.name.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
